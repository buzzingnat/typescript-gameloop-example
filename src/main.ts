// main.ts
import 'normalize.css'; // do once for app
import 'app/style/style.css'; // get webpack to build files correctly
import 'app/index.html'; // get webpack to build files correctly

import { CANVAS, CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_SCALE, CTX, ELEMENT } from './constants';
import { state, getState } from './state';
import { requireImage } from './utils';
import { drawSprite, moveSprite, autoPilotSprite } from './animate';

CANVAS.width = CANVAS_WIDTH / CANVAS_SCALE;
CANVAS.height = CANVAS_HEIGHT / CANVAS_SCALE;

let lastRender: number = 0;

const backgroundImage: HTMLImageElement = requireImage(
    "https://opengameart.org/sites/default/files/preview_241.png"
);

function update(progress: number): void {
    // update the state of the world for elapsed time since last render
    moveSprite(state.character, 1);
    autoPilotSprite(state.snail, 1);
    autoPilotSprite(state.grimReaper, 1);
    autoPilotSprite(state.turtle, 1);
    state.time += progress;
}

function draw(): void {
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
    drawSprite(state.turtle);
    drawSprite(state.grimReaper);
    drawSprite(state.snail);
    drawSprite(state.character);
}

function loop(timestamp: number): void {
    window.requestAnimationFrame(loop);
    let progress: number = timestamp - lastRender;

    update(progress);
    draw();

    lastRender = timestamp;
}

window.addEventListener("keydown", keyDownListener, false);
function keyDownListener(event: KeyboardEvent): void {
    state.pressedKeys[event.key] = true;
}

window.addEventListener("keyup", keyUpListener, false);
function keyUpListener(event: KeyboardEvent): void {
    state.pressedKeys[event.key] = false;
}

window.requestAnimationFrame(loop);
