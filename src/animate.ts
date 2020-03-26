import { getState, Sprite } from './state';
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

export function moveSprite(sprite: Sprite, movementSpeed: number): void {
    // sprite is an object from state
    if (getState().pressedKeys.w || getState().pressedKeys.ArrowUp) {
        sprite.y -= movementSpeed;
        sprite.direction = sprite.imageRows.up;
        sprite.directionString = 'up';
        console.log(getState().pressedKeys);
    } else if (getState().pressedKeys.s || getState().pressedKeys.ArrowDown) {
        sprite.y += movementSpeed;
        sprite.direction = sprite.imageRows.down;
        sprite.directionString = 'down';
    }
    if (getState().pressedKeys.a || getState().pressedKeys.ArrowLeft) {
        sprite.x -= movementSpeed;
        sprite.direction = sprite.imageRows.left;
        sprite.directionString = 'left';
    } else if (getState().pressedKeys.d || getState().pressedKeys.ArrowRight) {
        sprite.x += movementSpeed;
        sprite.direction = sprite.imageRows.right;
        sprite.directionString = 'right';
    }
    if (getState().pressedKeys[' '] || getState().pressedKeys.c) {
        sprite.isAttacking = true;
    } else {
        sprite.isAttacking = false;
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

export function autoPilotSprite(sprite: Sprite, movementSpeed: number): void {
    // path for NPC wandering
    let path: string[] = [];
    if (sprite.name === "turtle") {
        path = [
            "down",
            "down",
            "left",
            "left",
            "up",
            "up",
            "right",
            "right",
            "up",
            "up",
            "right",
            "right",
            "down",
            "down",
            "left",
            "left"
        ];
    }
    if (sprite.name === "snail") {
        path = ["left", "left", "left", "right", "right", "right"];
    }
    if (sprite.name === "grimReaper") {
        path = ["up", "down"];
    }
    // determine frame
    const fps = sprite.frameRate / 2;
    let frame: number = Math.floor((getState().time / 1000) * fps);
    let direction: string = path[frame % path.length];
    // update sprite object with new coordinates at correct frame
    if (direction === "up") {
        sprite.y -= movementSpeed;
        sprite.direction = sprite.imageRows.up;
    } else if (direction === "down") {
        sprite.y += movementSpeed;
        sprite.direction = sprite.imageRows.down;
    }
    if (direction === "left") {
        sprite.x -= movementSpeed;
        sprite.direction = sprite.imageRows.left;
    } else if (direction === "right") {
        sprite.x += movementSpeed;
        sprite.direction = sprite.imageRows.right;
    }
    // Detect boundaries
    let width: number = CANVAS.width - sprite.width * 2;
    if (sprite.x > width) {
        sprite.x = width;
    } else if (sprite.x < 0) {
        sprite.x = 0;
    }
    let height: number = CANVAS.height - sprite.height * 2;
    if (sprite.y > height) {
        sprite.y = height;
    } else if (sprite.y < 0) {
        sprite.y = 0;
    }
}
