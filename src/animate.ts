import { getState, State, Sprite } from './state';
import { CANVAS, CTX } from './constants';

function getFrameTime(framesPerSecond: number): number {
    return Math.floor((getState().time / 1000) * framesPerSecond);
}

export function drawSprite(sprite: Sprite): void {
    // Cannot draw this sprite until its image is loaded.
    if (!sprite.image) {
        return;
    }
    const fps = sprite.frameRate;
    let frame = getFrameTime(fps);
    let imageRow: number;
    let imageColumn = sprite.direction;
    if (sprite.actorStats.health <= 0) {
        // show dead body
        if (sprite.imageRows.death || sprite.imageRows.death === 0) {
            imageRow = sprite.imageRows.death;
        } else {
            imageRow = sprite.imageRows.down;
        }
        frame = frame % sprite.deathFrames.length;
        imageColumn = sprite.deathFrames[frame];
    } else if (sprite.attackTarget && sprite.attackFrames) {
        frame = frame % sprite.attackFrames[sprite.directionString].length;
        imageRow = sprite.attackFrames[sprite.directionString][frame];
    } else {
        frame = frame % sprite.walkFrames.length;
        imageRow = sprite.walkFrames[frame];
    }
    CTX.drawImage(
        sprite.image,
        imageRow * sprite.width,
        imageColumn * sprite.height,
        sprite.width,
        sprite.height,
        sprite.x,
        sprite.y,
        sprite.width * sprite.scale,
        sprite.height * sprite.scale
    );
}

function moveSpriteUp(sprite: Sprite, movementSpeed: number) {
    sprite.y -= movementSpeed;
    sprite.direction = sprite.imageRows.up;
    sprite.directionString = 'up';
}
function moveSpriteDown(sprite: Sprite, movementSpeed: number) {
    sprite.y += movementSpeed;
    sprite.direction = sprite.imageRows.down;
    sprite.directionString = 'down';
}
function moveSpriteLeft(sprite: Sprite, movementSpeed: number) {
    sprite.x -= movementSpeed;
    sprite.direction = sprite.imageRows.left;
    sprite.directionString = 'left';
}
function moveSpriteRight(sprite: Sprite, movementSpeed: number) {
    sprite.x += movementSpeed;
    sprite.direction = sprite.imageRows.right;
    sprite.directionString = 'right';
}

function detectKeyInputsForMovement(state: State, sprite: Sprite, movementSpeed: number) {
    // process key inputs stored on state
    if (state.pressedKeys.w || state.pressedKeys.ArrowUp) {
        moveSpriteUp(sprite, movementSpeed);
    } else if (state.pressedKeys.s || state.pressedKeys.ArrowDown) {
        moveSpriteDown(sprite, movementSpeed)
    }
    if (state.pressedKeys.a || state.pressedKeys.ArrowLeft) {
        moveSpriteLeft(sprite, movementSpeed);
    } else if (state.pressedKeys.d || state.pressedKeys.ArrowRight) {
        moveSpriteRight(sprite, movementSpeed);
    }
}

function detectGameBoundaries(sprite: Sprite) {
    let width = CANVAS.width - sprite.width * sprite.scale;
    if (sprite.x > width) {
        sprite.x = width;
    } else if (sprite.x < 0) {
        sprite.x = 0;
    }
    let height = CANVAS.height - sprite.height * sprite.scale;
    if (sprite.y > height) {
        sprite.y = height;
    } else if (sprite.y < 0) {
        sprite.y = 0;
    }
}

function beginCombat(attacker: Sprite, defender: Sprite) {
    attacker.attackTarget = defender;
    defender.attackTarget = attacker;
}

function detectCollision(sprite: Sprite, allActors: Sprite[]): Sprite {
    // if x is < or > sprite value OR y is < or > sprite value, then NO COLLISION
    for (const actor of allActors) {
        if (actor === sprite || actor.actorStats.health <= 0) {
            continue;
        }
        if (actor.x + actor.width < sprite.x) { // actor left of sprite
        } else if (actor.x > sprite.x + sprite.width) { // actor right of sprite
        } else if (actor.y + actor.height < sprite.y) { // actor below sprite
        } else if (actor.y > sprite.y + sprite.height) { // actor above sprite
        } else {
            return actor;
        }
    }
}

function handleCollision(sprite: Sprite, state: State, movementSpeed: number): void {
    const victim: Sprite = detectCollision(sprite, [...state.actors, state.character]);
    if (victim) {
        beginCombat(sprite, victim);
    }
}

function followPredefinedPath(sprite: Sprite, movementSpeed: number, direction: ('up' | 'down' | 'left' | 'right')) {
    if (direction === 'up') {
        moveSpriteUp(sprite, movementSpeed);
    } else if (direction === 'down') {
        moveSpriteDown(sprite, movementSpeed);
    }
    if (direction === 'left') {
        moveSpriteLeft(sprite, movementSpeed);
    } else if (direction === 'right') {
        moveSpriteRight(sprite, movementSpeed);
    }
}

export function moveSprite(sprite: Sprite, movementSpeed: number): void {
    const state: State = getState();
    detectKeyInputsForMovement(state, sprite, movementSpeed);
    // collision detection with other actors
    handleCollision(sprite, state, movementSpeed);
    // Detect boundaries
    detectGameBoundaries(sprite);
}

export function autoPilotSprite(sprite: Sprite, movementSpeed: number): void {
    const state = getState();
    // determine frame
    const fps = sprite.frameRate / 2;
    let frame: number = Math.floor((state.time / 1000) * fps);
    let direction: ('up' | 'down' | 'left' | 'right') = sprite.path[frame % sprite.path.length];
    // update sprite object with new coordinates at correct frame
    if (sprite.actorStats.health <= 0) {
        return;
    }
    if (sprite.attackTarget && sprite.attackTarget.actorStats) {
        sprite.attackTarget.actorStats.health -= sprite.actorStats.damage;
        if (sprite.attackTarget.actorStats.health <= 0) {
            sprite.attackTarget = null;
        }
        // do not move
        // deal damage to character as long as it has health
        // if character is dead, then end attack
    } else {
        followPredefinedPath(sprite, movementSpeed, direction);
        // collision detection with other actors
        handleCollision(sprite, state, movementSpeed);
    }
    // Detect boundaries
    detectGameBoundaries(sprite);
}
