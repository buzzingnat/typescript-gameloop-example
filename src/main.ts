// main.ts
import 'normalize.css'; // do once for app
import 'app/style/style.css'; // get webpack to build files correctly
import 'app/index.html'; // get webpack to build files correctly
import _ from 'lodash';

import { CANVAS, CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_SCALE, CTX, ELEMENT } from './constants';
import { State, getState, Sprite } from './state';
import { requireImage } from './utils';
import { drawSprite, moveSprite, autoPilotSprite } from './animate';

console.log('I run');

CANVAS.width = CANVAS_WIDTH / CANVAS_SCALE;
CANVAS.height = CANVAS_HEIGHT / CANVAS_SCALE;

let lastRender: number = 0;

const backgroundImage: HTMLImageElement = requireImage(
    'https://opengameart.org/sites/default/files/preview_241.png'
);

function generateActorPath(): ('up' | 'down' | 'left' | 'right')[] {
    let path: ('up' | 'down' | 'left' | 'right')[] = [];
    const directions:('up' | 'down' | 'left' | 'right')[] = ['up', 'down', 'left', 'right'];
    for (let i = 0; i < _.random(4, 12); i++) {
        path.push(directions[_.random(directions.length - 1)]);
    }
    return path;
}

function populateActors(state: State, quantity: number): void {
    const actorChoices: Sprite[] = [state.grimReaper, state.snail, state.turtle];
    for (let i = 0; i < quantity; i++) {
        let newActor: Sprite = _.cloneDeep(actorChoices[_.random(actorChoices.length - 1)]);
        newActor.x = _.random(CANVAS.width);
        newActor.y = _.random(CANVAS.height);
        newActor.name = newActor.name + '-' + state.actors.length;
        newActor.path = generateActorPath();
        state.actors.push(newActor);
    }
}

function update(progress: number): void {
    // update the state of the world for elapsed time since last render
    const state = getState();
    for (const sprite of state.actors) {
        // only move if sprite has health
        if (sprite.actorStats.health > 0) {
            autoPilotSprite(sprite, 1);
        }
    }
    // only move if character has health
    if (state.character.actorStats.health > 0) {
        moveSprite(state.character, 1);
    }
    state.time += progress;
}

function draw(): void {
    const state = getState();
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CTX.imageSmoothingEnabled = false;
    // draw state of the world
    CTX.drawImage(
        backgroundImage,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
    );
    for (const sprite of state.actors) {
        drawSprite(sprite);
    }
    drawSprite(state.character);
}

function loop(timestamp: number): void {
    window.requestAnimationFrame(loop);
    let progress: number = timestamp - lastRender;

    update(progress);
    draw();

    lastRender = timestamp;
}

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event: KeyboardEvent): void {
    getState().pressedKeys[event.key] = true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event: KeyboardEvent): void {
    getState().pressedKeys[event.key] = false;
}

window.addEventListener('load', (event) => {
    populateActors(getState(), 9)
});
window.requestAnimationFrame(loop);
