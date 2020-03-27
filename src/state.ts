import { requireImage } from './utils';

import woman from 'gfx/woman.png';
import man from 'gfx/man.png';
import personTan from 'gfx/person-tan.png';
import sprites from 'gfx/sprites.png';

export interface Sprite {
    image: HTMLImageElement,
    x: number,
    y: number,
    height: number,
    width: number,
    scale: number,
    currentFrame: number,
    walkFrames: number[],
    attackFrames?: {
        down: number[],
        up: number[],
        left: number[],
        right: number[],
    },
    frameRate: number,
    direction: number,
    directionString: 'up' | 'down' | 'left' | 'right',
    animationTime: number,
    name: string,
    imageRows: {
        down: number,
        up: number,
        left: number,
        right: number,
    },
    isAttacking: boolean,
    path?: ('up' | 'down' | 'left' | 'right')[],
}

export interface State {
    time: number,
    character: Sprite,
    grimReaper: Sprite,
    turtle: Sprite,
    snail: Sprite,
    actors: Sprite[],
    pressedKeys: {[key in string]: boolean},
}

export let state: State = {
    time: 0,
    character: {
        image: requireImage(woman),
        x: 0,
        y: 0,
        height: 32,
        width: 32,
        scale: 1,
        currentFrame: 0,
        walkFrames: [0, 1, 0, 2],
        attackFrames: {
            down: [0, 3, 3, 1],
            up: [0, 3, 3, 2],
            left: [0, 3, 3, 2],
            right: [0, 3, 3, 2],
        },
        frameRate: 5,
        direction: 0,
        directionString: 'up',
        animationTime: 0,
        name: 'character',
        imageRows: {
            down: 2,
            up: 0,
            left: 1,
            right: 3
        },
        isAttacking: false
    },
    grimReaper: {
        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16
        image: requireImage(sprites),
        x: 30,
        y: 60,
        height: 32,
        width: 32,
        scale: 1,
        currentFrame: 0,
        walkFrames: [3, 4, 3, 5],
        frameRate: 5,
        direction: 0,
        directionString: 'up',
        animationTime: 0,
        name: 'grimReaper',
        imageRows: {
            down: 2,
            up: 0,
            left: 1,
            right: 3
        },
        isAttacking: false
    },
    turtle: {
        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16
        image: requireImage(sprites),
        x: 120,
        y: 210,
        height: 32,
        width: 32,
        scale: 1,
        currentFrame: 0,
        walkFrames: [0, 1, 0, 2],
        frameRate: 5,
        direction: 0,
        directionString: 'up',
        animationTime: 0,
        name: 'turtle',
        imageRows: {
            down: 6,
            up: 4,
            left: 5,
            right: 7
        },
        isAttacking: false,
        path: [
            'down',
            'down',
            'left',
            'left',
            'up',
            'up',
            'right',
            'right',
            'up',
            'up',
            'right',
            'right',
            'down',
            'down',
            'left',
            'left'
        ]
    },
    snail: {
        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16
        image: requireImage(sprites),
        x: 60,
        y: 280,
        height: 32,
        width: 32,
        scale: 1,
        currentFrame: 0,
        walkFrames: [0, 1, 0, 2],
        frameRate: 5,
        direction: 0,
        directionString: 'up',
        animationTime: 0,
        name: 'snail',
        imageRows: {
            down: 10,
            up: 8,
            left: 9,
            right: 11
        },
        isAttacking: false
    },
    actors: [],
    pressedKeys: {}
};

export function getState(): State {
    return state;
}
