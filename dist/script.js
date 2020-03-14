/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"normalize.css\");\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"index.html\");\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var app_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/style.css */ \"./src/style.css\");\n/* harmony import */ var app_index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/index.html */ \"./src/index.html\");\n // do once for app\n\n\nconst CANVAS = document.createElement(\"canvas\");\nconst CANVAS_WIDTH = 750; // a standard 2019 smartphone size\nconst CANVAS_HEIGHT = 1334; // a standard 2019 smartphone size\nconst CANVAS_SCALE = 3;\nCANVAS.width = CANVAS_WIDTH / CANVAS_SCALE;\nCANVAS.height = CANVAS_HEIGHT / CANVAS_SCALE;\nconst CTX = CANVAS.getContext(\"2d\");\nlet state = {\n    time: 0,\n    character: {\n        // Will be set when the image is loaded.\n        image: requireImage(\"https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png\"),\n        x: 0,\n        y: 0,\n        height: 18,\n        width: 16,\n        scale: 2,\n        currentFrame: 0,\n        frameArray: [0, 1, 0, 2],\n        frameRate: 4,\n        direction: 0,\n        animationTime: 0,\n        name: \"character\",\n        imageRows: {\n            down: 0,\n            up: 1,\n            left: 2,\n            right: 3\n        }\n    },\n    grimReaper: {\n        // Will be set when the image is loaded.\n        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16\n        image: requireImage(\"https://opengameart.org/sites/default/files/underworld_load-atlas-32x32_1.png\"),\n        x: 30,\n        y: 60,\n        height: 32,\n        width: 32,\n        scale: 1.5,\n        currentFrame: 0,\n        frameArray: [3, 4, 5],\n        frameRate: 5,\n        direction: 0,\n        animationTime: 0,\n        name: \"grimReaper\",\n        imageRows: {\n            down: 2,\n            up: 0,\n            left: 1,\n            right: 3\n        }\n    },\n    chicken: {\n        // by daneeklu, LPC style farm animals\n        image: requireImage(\"https://opengameart.org/sites/default/files/chicken_walk.png\"),\n        x: 120,\n        y: 210,\n        height: 32,\n        width: 32,\n        scale: 1.25,\n        currentFrame: 0,\n        frameArray: [0, 1, 2, 3],\n        frameRate: 5,\n        direction: 0,\n        animationTime: 0,\n        name: \"chicken\",\n        imageRows: {\n            down: 2,\n            up: 0,\n            left: 1,\n            right: 3\n        }\n    },\n    snake: {\n        // by basxto and yolkati, [LPC] snake\n        image: requireImage(\"https://opengameart.org/sites/default/files/snake-NESW_0.png\"),\n        x: 60,\n        y: 280,\n        height: 32,\n        width: 32,\n        scale: 1.5,\n        currentFrame: 0,\n        frameArray: [0, 1, 2],\n        frameRate: 5,\n        direction: 0,\n        animationTime: 0,\n        name: \"snake\",\n        imageRows: {\n            down: 2,\n            up: 0,\n            left: 3,\n            right: 1\n        }\n    },\n    pressedKeys: {}\n};\nfunction drawSprite(sprite) {\n    // Cannot draw this sprite until its image is loaded.\n    if (!sprite.image) {\n        return;\n    }\n    const fps = sprite.frameRate;\n    let frame = Math.floor((state.time / 1000) * fps);\n    frame = frame % sprite.frameArray.length;\n    CTX.drawImage(sprite.image, sprite.frameArray[frame] * sprite.width +\n        (sprite.offset ? sprite.offset : 0), sprite.direction * sprite.height + (sprite.offset ? sprite.offset : 0), sprite.width, sprite.height, sprite.x, sprite.y, sprite.width * sprite.scale, sprite.height * sprite.scale);\n}\nfunction moveSprite(sprite, movementSpeed) {\n    // sprite is an object from state\n    if (state.pressedKeys.w) {\n        sprite.y -= movementSpeed;\n        sprite.direction = sprite.imageRows.up;\n    }\n    else if (state.pressedKeys.s) {\n        sprite.y += movementSpeed;\n        sprite.direction = sprite.imageRows.down;\n    }\n    if (state.pressedKeys.a) {\n        sprite.x -= movementSpeed;\n        sprite.direction = sprite.imageRows.left;\n    }\n    else if (state.pressedKeys.d) {\n        sprite.x += movementSpeed;\n        sprite.direction = sprite.imageRows.right;\n    }\n    // Detect boundaries\n    let width = CANVAS.width - sprite.width * 2;\n    if (sprite.x > width) {\n        sprite.x = width;\n    }\n    else if (sprite.x < 0) {\n        sprite.x = 0;\n    }\n    let height = CANVAS.height - sprite.height * 2;\n    if (sprite.y > height) {\n        sprite.y = height;\n    }\n    else if (sprite.y < 0) {\n        sprite.y = 0;\n    }\n}\nfunction autoPilotSprite(sprite, movementSpeed) {\n    // path for NPC wandering\n    let path = [];\n    if (sprite.name === \"chicken\") {\n        path = [\n            \"down\",\n            \"down\",\n            \"left\",\n            \"left\",\n            \"up\",\n            \"up\",\n            \"right\",\n            \"right\",\n            \"up\",\n            \"up\",\n            \"right\",\n            \"right\",\n            \"down\",\n            \"down\",\n            \"left\",\n            \"left\"\n        ];\n    }\n    if (sprite.name === \"snake\") {\n        path = [\"left\", \"left\", \"left\", \"right\", \"right\", \"right\"];\n    }\n    if (sprite.name === \"grimReaper\") {\n        path = [\"up\", \"down\"];\n    }\n    // determine frame\n    const fps = sprite.frameRate / 2;\n    let frame = Math.floor((state.time / 1000) * fps);\n    let direction = path[frame % path.length];\n    // update sprite object with new coordinates at correct frame\n    if (direction === \"up\") {\n        sprite.y -= movementSpeed;\n        sprite.direction = sprite.imageRows.up;\n    }\n    else if (direction === \"down\") {\n        sprite.y += movementSpeed;\n        sprite.direction = sprite.imageRows.down;\n    }\n    if (direction === \"left\") {\n        //console.log(`goat x value is ${sprite.x}`);\n        sprite.x -= movementSpeed;\n        sprite.direction = sprite.imageRows.left;\n    }\n    else if (direction === \"right\") {\n        sprite.x += movementSpeed;\n        sprite.direction = sprite.imageRows.right;\n    }\n    // Detect boundaries\n    let width = CANVAS.width - sprite.width * 2;\n    if (sprite.x > width) {\n        sprite.x = width;\n    }\n    else if (sprite.x < 0) {\n        sprite.x = 0;\n    }\n    let height = CANVAS.height - sprite.height * 2;\n    if (sprite.y > height) {\n        sprite.y = height;\n    }\n    else if (sprite.y < 0) {\n        sprite.y = 0;\n    }\n}\nfunction update(progress) {\n    // update the state of the world for elapsed time since last render\n    moveSprite(state.character, 3);\n    autoPilotSprite(state.chicken, 2);\n    autoPilotSprite(state.grimReaper, 1);\n    autoPilotSprite(state.snake, 1);\n    state.time += progress;\n}\nfunction draw() {\n    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);\n    CTX.imageSmoothingEnabled = false;\n    // draw state of the world\n    CTX.drawImage(backgroundImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    drawSprite(state.chicken);\n    drawSprite(state.grimReaper);\n    drawSprite(state.snake);\n    drawSprite(state.character);\n}\nfunction loop(timestamp) {\n    window.requestAnimationFrame(loop);\n    let progress = timestamp - lastRender;\n    update(progress);\n    draw();\n    lastRender = timestamp;\n}\nlet lastRender = 0;\nfunction requireImage(source) {\n    const image = new Image();\n    image.src = source;\n    return image;\n}\nconst backgroundImage = requireImage(\"https://opengameart.org/sites/default/files/preview_241.png\");\nwindow.addEventListener(\"keydown\", keyDownListener, false);\nfunction keyDownListener(event) {\n    state.pressedKeys[event.key] = true;\n}\nwindow.addEventListener(\"keyup\", keyUpListener, false);\nfunction keyUpListener(event) {\n    state.pressedKeys[event.key] = false;\n}\nconst ELEMENT = document.getElementById(\"app\");\nELEMENT.append(CANVAS);\nconst TIME = new Date(Date.now()).toLocaleTimeString();\nconst START_TIME = Date.now();\nconsole.log(TIME + `; milliseconds: ` + START_TIME);\nwindow.requestAnimationFrame(loop);\n\n\n//# sourceURL=webpack:///./src/script.ts?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"style.css\");\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });