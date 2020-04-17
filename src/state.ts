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
    deathFrames: number[],
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
        death?: number,
    },
    path?: ('up' | 'down' | 'left' | 'right')[],
    actorStats: {
        health: number,
        damage: number,
        attackSpeed: number,
    },
    attackTarget: (null | Sprite),
    nextAttack: (null | number),
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
        x: 10,
        y: 10,
        height: 32,
        width: 32,
        scale: 2,
        currentFrame: 0,
        walkFrames: [0, 1, 0, 2],
        attackFrames: {
            down: [0, 3, 3, 1],
            up: [0, 3, 3, 2],
            left: [0, 3, 3, 2],
            right: [0, 3, 3, 2],
        },
        deathFrames: [4],
        frameRate: 5,
        direction: 0,
        directionString: 'up',
        animationTime: 0,
        name: 'character',
        imageRows: {
            down: 2,
            up: 0,
            left: 1,
            right: 3,
            death: 0,
        },
        actorStats: {
            health: 100,
            damage: 3,
            attackSpeed: 500,
        },
        attackTarget: null,
        nextAttack: null,
    },
    grimReaper: {
        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16
        image: requireImage(sprites),
        x: 30,
        y: 60,
        height: 32,
        width: 32,
        scale: 2,
        currentFrame: 0,
        walkFrames: [3, 4, 3, 5],
        attackFrames: {
            down: [3, 3],
            up: [3, 3],
            left: [3, 3],
            right: [3, 3],
        },
        deathFrames: [9], // 10 across, 9 down
        frameRate: 5,
        direction: 0,
        directionString: 'up',
        animationTime: 0,
        name: 'grimReaper',
        imageRows: {
            down: 2,
            up: 0,
            left: 1,
            right: 3,
            death: 10,
        },
        actorStats: {
            health: 70,
            damage: 2,
            attackSpeed: 300,
        },
        attackTarget: null,
        nextAttack: null,
    },
    turtle: {
        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16
        image: requireImage(sprites),
        x: 120,
        y: 210,
        height: 32,
        width: 32,
        scale: 2,
        currentFrame: 0,
        walkFrames: [0, 1, 0, 2],
        attackFrames: {
            down: [0, 0],
            up: [0, 0],
            left: [0, 0],
            right: [0, 0],
        },
        deathFrames: [10], // 10 across, 10 down
        frameRate: 5,
        direction: 0,
        directionString: 'up',
        animationTime: 0,
        name: 'turtle',
        imageRows: {
            down: 6,
            up: 4,
            left: 5,
            right: 7,
            death: 10,
        },
        actorStats: {
            health: 60,
            damage: 1,
            attackSpeed: 300,
        },
        attackTarget: null,
        nextAttack: null,
    },
    snail: {
        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16
        image: requireImage(sprites),
        x: 60,
        y: 280,
        height: 32,
        width: 32,
        scale: 2,
        currentFrame: 0,
        walkFrames: [0, 1, 0, 2],
        attackFrames: {
            down: [0, 0],
            up: [0, 0],
            left: [0, 0],
            right: [0, 0],
        },
        deathFrames: [13], // 9 across, 13 down
        frameRate: 5,
        direction: 0,
        directionString: 'up',
        animationTime: 0,
        name: 'snail',
        imageRows: {
            down: 10,
            up: 8,
            left: 9,
            right: 11,
            death: 9,
        },
        actorStats: {
            health: 20,
            damage: 1,
            attackSpeed: 300,
        },
        attackTarget: null,
        nextAttack: null,
    },
    actors: [],
    pressedKeys: {}
};
window['state'] = state;

export function getState(): State {
    return state;
}
window['getState'] = getState;
