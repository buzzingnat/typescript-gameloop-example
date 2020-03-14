import { getState } from './state';
import { CANVAS, CTX } from './constants';

export function drawSprite(sprite) {
    // Cannot draw this sprite until its image is loaded.
    if (!sprite.image) {
        return;
    }
    const fps = sprite.frameRate;
    let frame = Math.floor((getState().time / 1000) * fps);
    frame = frame % sprite.frameArray.length;
    CTX.drawImage(
        sprite.image,
        sprite.frameArray[frame] * sprite.width +
            (sprite.offset ? sprite.offset : 0),
        sprite.direction * sprite.height + (sprite.offset ? sprite.offset : 0),
        sprite.width,
        sprite.height,
        sprite.x,
        sprite.y,
        sprite.width * sprite.scale,
        sprite.height * sprite.scale
    );
}

export function moveSprite(sprite, movementSpeed) {
    // sprite is an object from state
    if (getState().pressedKeys.w) {
        sprite.y -= movementSpeed;
        sprite.direction = sprite.imageRows.up;
    } else if (getState().pressedKeys.s) {
        sprite.y += movementSpeed;
        sprite.direction = sprite.imageRows.down;
    }
    if (getState().pressedKeys.a) {
        sprite.x -= movementSpeed;
        sprite.direction = sprite.imageRows.left;
    } else if (getState().pressedKeys.d) {
        sprite.x += movementSpeed;
        sprite.direction = sprite.imageRows.right;
    }
    // Detect boundaries
    let width = CANVAS.width - sprite.width * 2;
    if (sprite.x > width) {
        sprite.x = width;
    } else if (sprite.x < 0) {
        sprite.x = 0;
    }
    let height = CANVAS.height - sprite.height * 2;
    if (sprite.y > height) {
        sprite.y = height;
    } else if (sprite.y < 0) {
        sprite.y = 0;
    }
}

export function autoPilotSprite(sprite, movementSpeed) {
    // path for NPC wandering
    let path = [];
    if (sprite.name === "chicken") {
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
    if (sprite.name === "snake") {
        path = ["left", "left", "left", "right", "right", "right"];
    }
    if (sprite.name === "grimReaper") {
        path = ["up", "down"];
    }
    // determine frame
    const fps = sprite.frameRate / 2;
    let frame = Math.floor((getState().time / 1000) * fps);
    let direction = path[frame % path.length];
    // update sprite object with new coordinates at correct frame
    if (direction === "up") {
        sprite.y -= movementSpeed;
        sprite.direction = sprite.imageRows.up;
    } else if (direction === "down") {
        sprite.y += movementSpeed;
        sprite.direction = sprite.imageRows.down;
    }
    if (direction === "left") {
        //console.log(`goat x value is ${sprite.x}`);
        sprite.x -= movementSpeed;
        sprite.direction = sprite.imageRows.left;
    } else if (direction === "right") {
        sprite.x += movementSpeed;
        sprite.direction = sprite.imageRows.right;
    }
    // Detect boundaries
    let width = CANVAS.width - sprite.width * 2;
    if (sprite.x > width) {
        sprite.x = width;
    } else if (sprite.x < 0) {
        sprite.x = 0;
    }
    let height = CANVAS.height - sprite.height * 2;
    if (sprite.y > height) {
        sprite.y = height;
    } else if (sprite.y < 0) {
        sprite.y = 0;
    }
}
