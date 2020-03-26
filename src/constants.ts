const CANVAS: HTMLCanvasElement = document.createElement("canvas");
const CANVAS_WIDTH: number = 750; // a standard 2019 smartphone size
const CANVAS_HEIGHT: number = 1334; // a standard 2019 smartphone size
const CANVAS_SCALE: number = 3;
const CTX: CanvasRenderingContext2D = CANVAS.getContext("2d");

const ELEMENT: HTMLElement = document.getElementById("app");
ELEMENT.append(CANVAS);

export { CANVAS, CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_SCALE, CTX, ELEMENT };
