// main.ts
import 'normalize.css'; // do once for app
import 'app/style.css'; // get webpack to build files correctly
import 'app/index.html'; // get webpack to build files correctly

import { CANVAS, CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_SCALE, CTX, ELEMENT, TIME, START_TIME } from './constants';
import { state, getState } from './state';
import { requireImage } from './utils';
import { drawSprite, moveSprite, autoPilotSprite } from './animate';

CANVAS.width = CANVAS_WIDTH / CANVAS_SCALE;
CANVAS.height = CANVAS_HEIGHT / CANVAS_SCALE;

let lastRender = 0;

const backgroundImage = requireImage(
    "https://opengameart.org/sites/default/files/preview_241.png"
);

function update(progress) {
    // update the state of the world for elapsed time since last render
    moveSprite(state.character, 3);
    autoPilotSprite(state.chicken, 2);
    autoPilotSprite(state.grimReaper, 1);
    autoPilotSprite(state.snake, 1);
    state.time += progress;
}

function draw() {
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
    drawSprite(state.chicken);
    drawSprite(state.grimReaper);
    drawSprite(state.snake);
    drawSprite(state.character);
}

function loop(timestamp) {
    window.requestAnimationFrame(loop);
    let progress = timestamp - lastRender;

    update(progress);
    draw();

    lastRender = timestamp;
}

window.addEventListener("keydown", keyDownListener, false);
function keyDownListener(event) {
    state.pressedKeys[event.key] = true;
}

window.addEventListener("keyup", keyUpListener, false);
function keyUpListener(event) {
    state.pressedKeys[event.key] = false;
}

window.requestAnimationFrame(loop);
