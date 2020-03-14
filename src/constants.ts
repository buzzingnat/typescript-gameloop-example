const CANVAS = document.createElement("canvas");
const CANVAS_WIDTH = 750; // a standard 2019 smartphone size
const CANVAS_HEIGHT = 1334; // a standard 2019 smartphone size
const CANVAS_SCALE = 3;
const CTX = CANVAS.getContext("2d");

const ELEMENT = document.getElementById("app");
ELEMENT.append(CANVAS);
const TIME = new Date(Date.now()).toLocaleTimeString();
const START_TIME = Date.now();

export { CANVAS, CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_SCALE, CTX, ELEMENT, TIME, START_TIME };
