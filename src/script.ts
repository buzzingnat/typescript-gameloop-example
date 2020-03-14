import 'normalize.css'; // do once for app
import 'app/style.css';
import 'app/index.html';

const CANVAS = document.createElement("canvas");
const CANVAS_WIDTH = 750; // a standard 2019 smartphone size
const CANVAS_HEIGHT = 1334; // a standard 2019 smartphone size
const CANVAS_SCALE = 3;
CANVAS.width = CANVAS_WIDTH / CANVAS_SCALE;
CANVAS.height = CANVAS_HEIGHT / CANVAS_SCALE;
const CTX = CANVAS.getContext("2d");

let state: any = {
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

function drawSprite(sprite) {
    // Cannot draw this sprite until its image is loaded.
    if (!sprite.image) {
        return;
    }
    const fps = sprite.frameRate;
    let frame = Math.floor((state.time / 1000) * fps);
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

function moveSprite(sprite, movementSpeed) {
    // sprite is an object from state
    if (state.pressedKeys.w) {
        sprite.y -= movementSpeed;
        sprite.direction = sprite.imageRows.up;
    } else if (state.pressedKeys.s) {
        sprite.y += movementSpeed;
        sprite.direction = sprite.imageRows.down;
    }
    if (state.pressedKeys.a) {
        sprite.x -= movementSpeed;
        sprite.direction = sprite.imageRows.left;
    } else if (state.pressedKeys.d) {
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

function autoPilotSprite(sprite, movementSpeed) {
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
    let frame = Math.floor((state.time / 1000) * fps);
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

let lastRender = 0;

function requireImage(source) {
    const image = new Image();
    image.src = source;
    return image;
}

const backgroundImage = requireImage(
    "https://opengameart.org/sites/default/files/preview_241.png"
);

window.addEventListener("keydown", keyDownListener, false);
function keyDownListener(event) {
    state.pressedKeys[event.key] = true;
}

window.addEventListener("keyup", keyUpListener, false);
function keyUpListener(event) {
    state.pressedKeys[event.key] = false;
}

const ELEMENT = document.getElementById("app");
ELEMENT.append(CANVAS);
const TIME = new Date(Date.now()).toLocaleTimeString();
const START_TIME = Date.now();
console.log(TIME + `; milliseconds: ` + START_TIME);
window.requestAnimationFrame(loop);
