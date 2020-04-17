// main.ts
import 'normalize.css'; // do once for app
import 'app/style/style.css'; // get webpack to build files correctly
import 'app/index.html'; // get webpack to build files correctly
import _ from 'lodash';

import { CANVAS, CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_SCALE, CTX, ELEMENT } from './constants';
import { State, getState, Sprite } from './state';
import { requireImage } from './utils';
import { drawSprite, moveSprite, autoPilotSprite, displayTextAlert } from './animate';

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

function updateAttackStatus (sprite: Sprite, state: State):void {
    if (sprite.attackTarget) {
        // do not move
        // if opponent is dead, then end attack
        if (sprite.attackTarget.actorStats.health <= 0) {
            sprite.attackTarget = null;
            sprite.nextAttack = null;
        }
        // also need an nextAttack value that is the next time actor can attack;
        // update this with every attack, check to see when you can next attack
        else if (state.time >= sprite.nextAttack) {
            // do damage at attack speed of sprite
            sprite.attackTarget.actorStats.health -= sprite.actorStats.damage;
            sprite.nextAttack = state.time + sprite.actorStats.attackSpeed;
            // console.log(`****`);
            // console.log(`****`);
            // console.log(`${sprite.name}:${sprite.actorStats.health} is attacking ${sprite.attackTarget.name}:${sprite.attackTarget.actorStats.health} for ${sprite.actorStats.damage}`);
            // console.log(`----`);
            // console.log(`current time: ${state.time}`);
            // console.log(`next attack time: ${sprite.nextAttack}`);
        }
    }
}

function update(progress: number): void {
    // update the state of the world for elapsed time since last render
    const state = getState();
    const character = state.character;
    // if the actor has an attack target, do damage to enemy at attack speed of actor
    // character calculated before all other actors
    if (character.actorStats.health > 0) {
        if (character.attackTarget) {
            updateAttackStatus(character, state);
        } else {
            // only move if character has health AND character is NOT attacking
            moveSprite(state.character, 1);
        }
    }
    for (const sprite of state.actors) {
        if (sprite.actorStats.health > 0) {
            if (!sprite.attackTarget) {
                // only move if sprite has health AND sprite is NOT attacking
                autoPilotSprite(sprite, 1);
            } else {
                updateAttackStatus(sprite, state);
            }
        }
    }
    state.time += progress;
}

function drawDot(x, y) {
    CTX.beginPath();
    CTX.arc(x,y,10,0*Math.PI,1.5*Math.PI);
    CTX.closePath();
    CTX.fillStyle = 'rgb(100, 20, 20, 50%)';
    CTX.fill();
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
        // TODO: draw all dead actors before any living ones
        drawSprite(sprite);
    }
    if (true) {
        displayTextAlert(
            'stunned',
            state.character.x+(state.character.width/2)*state.character.scale,
            state.character.y-2
        );
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
