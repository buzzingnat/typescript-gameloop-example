import { requireImage } from './utils';

export let state: any = {
    time: 0,
    character: {
        // Will be set when the image is loaded.
        image: requireImage(
            "https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png"
        ),
        x: 0,
        y: 0,
        height: 18,
        width: 16,
        scale: 2,
        currentFrame: 0,
        frameArray: [0, 1, 0, 2],
        frameRate: 4,
        direction: 0,
        animationTime: 0,
        name: "character",
        imageRows: {
            down: 0,
            up: 1,
            left: 2,
            right: 3
        }
    },
    grimReaper: {
        // Will be set when the image is loaded.
        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16
        image: requireImage(
            "https://opengameart.org/sites/default/files/underworld_load-atlas-32x32_1.png"
        ),
        x: 30,
        y: 60,
        height: 32,
        width: 32,
        scale: 1.5,
        currentFrame: 0,
        frameArray: [3, 4, 5],
        frameRate: 5,
        direction: 0,
        animationTime: 0,
        name: "grimReaper",
        imageRows: {
            down: 2,
            up: 0,
            left: 1,
            right: 3
        }
    },
    chicken: {
        // by daneeklu, LPC style farm animals
        image: requireImage(
            "https://opengameart.org/sites/default/files/chicken_walk.png"
        ),
        x: 120,
        y: 210,
        height: 32,
        width: 32,
        scale: 1.25,
        currentFrame: 0,
        frameArray: [0, 1, 2, 3],
        frameRate: 5,
        direction: 0,
        animationTime: 0,
        name: "chicken",
        imageRows: {
            down: 2,
            up: 0,
            left: 1,
            right: 3
        }
    },
    snake: {
        // by basxto and yolkati, [LPC] snake
        image: requireImage(
            "https://opengameart.org/sites/default/files/snake-NESW_0.png"
        ),
        x: 60,
        y: 280,
        height: 32,
        width: 32,
        scale: 1.5,
        currentFrame: 0,
        frameArray: [0, 1, 2],
        frameRate: 5,
        direction: 0,
        animationTime: 0,
        name: "snake",
        imageRows: {
            down: 2,
            up: 0,
            left: 3,
            right: 1
        }
    },
    pressedKeys: {}
};

export function getState() {
    return state;
}
