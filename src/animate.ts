import { getState, State, Sprite } from './state';
import { CANVAS, CTX } from './constants';

export function drawSprite(sprite: Sprite): void {
    // Cannot draw this sprite until its image is loaded.
    if (!sprite.image) {
        return;
    }
    const fps = sprite.frameRate;
    let frame = Math.floor((getState().time / 1000) * fps);
    let imageRow: number;
    if (sprite.isAttacking && sprite.attackFrames) {
        frame = frame % sprite.attackFrames[sprite.directionString].length;
        imageRow = sprite.attackFrames[sprite.directionString][frame];
    } else {
        frame = frame % sprite.walkFrames.length;
        imageRow = sprite.walkFrames[frame];
    }
    CTX.drawImage(
        sprite.image,
        imageRow * sprite.width,
        sprite.direction * sprite.height,
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

export function moveSprite(sprite: Sprite, movementSpeed: number): void {
    const state: State = getState();
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
    if (state.pressedKeys[' '] || state.pressedKeys.c) {
        sprite.isAttacking = true;
    } else {
        sprite.isAttacking = false;
    }
    // collision detection with other actors
    const victim: Sprite = detectCollision(sprite, state.actors);
    if (victim) {
        const mh = movementSpeed+sprite.height/2;
        const mw = movementSpeed+sprite.width/2;
        if (sprite.directionString === 'up') {
            moveSpriteDown(sprite, mh);
        } else if (sprite.directionString === 'down') {
            moveSpriteUp(sprite, mh);
        } else if (sprite.directionString === 'left') {
            moveSpriteRight(sprite, mw);
        } else {
            moveSpriteLeft(sprite, mw);
        }
    }
    // Detect boundaries
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

export function detectCollision(sprite: Sprite, allActors: Sprite[]): Sprite {
    // if x is < or > sprite value OR y is < or > sprite value, then NO COLLISION
    let actor: Sprite;
    for (actor of allActors) {
        let isCollision: boolean = false;
        if (actor === sprite) {
            return;
        }
        if (actor.x + actor.width < sprite.x) { // actor left of sprite
        } else if (actor.x > sprite.x + sprite.width) { // actor right of sprite
        } else if (actor.y + actor.height < sprite.y) { // actor left of sprite
        } else if (actor.y > sprite.y + sprite.height) { // actor right of sprite
        } else {
            return actor;
        }
    }
}

export function autoPilotSprite(sprite: Sprite, movementSpeed: number): void {
    const state = getState();
    // determine frame
    const fps = sprite.frameRate / 2;
    let frame: number = Math.floor((state.time / 1000) * fps);
    let direction: string = sprite.path[frame % sprite.path.length];
    // update sprite object with new coordinates at correct frame
    if (direction === 'up') {
        sprite.y -= movementSpeed;
        sprite.direction = sprite.imageRows.up;
        sprite.directionString = 'up';
    } else if (direction === 'down') {
        sprite.y += movementSpeed;
        sprite.direction = sprite.imageRows.down;
        sprite.directionString = 'down';
    }
    if (direction === 'left') {
        sprite.x -= movementSpeed;
        sprite.direction = sprite.imageRows.left;
        sprite.directionString = 'left';
    } else if (direction === 'right') {
        sprite.x += movementSpeed;
        sprite.direction = sprite.imageRows.right;
        sprite.directionString = 'left';
    }
    // collision detection with other actors
    const victim: Sprite = detectCollision(sprite, state.actors);
    if (victim) {
        const mh = movementSpeed+sprite.height/2;
        const mw = movementSpeed+sprite.width/2;
        if (sprite.directionString === 'up') {
            moveSpriteDown(sprite, mh);
        } else if (sprite.directionString === 'down') {
            moveSpriteUp(sprite, mh);
        } else if (sprite.directionString === 'left') {
            moveSpriteRight(sprite, mw);
        } else {
            moveSpriteLeft(sprite, mw);
        }
    }
    // Detect boundaries
    let width: number = CANVAS.width - sprite.width * sprite.scale;
    if (sprite.x > width) {
        sprite.x = width;
    } else if (sprite.x < 0) {
        sprite.x = 0;
    }
    let height: number = CANVAS.height - sprite.height * sprite.scale;
    if (sprite.y > height) {
        sprite.y = height;
    } else if (sprite.y < 0) {
        sprite.y = 0;
    }
}
