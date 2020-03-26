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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"style/normalize.css\");\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/animate.ts":
/*!************************!*\
  !*** ./src/animate.ts ***!
  \************************/
/*! exports provided: drawSprite, moveSprite, autoPilotSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSprite\", function() { return drawSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSprite\", function() { return moveSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autoPilotSprite\", function() { return autoPilotSprite; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n\n\nfunction drawSprite(sprite) {\n    // Cannot draw this sprite until its image is loaded.\n    if (!sprite.image) {\n        return;\n    }\n    const fps = sprite.frameRate;\n    let frame = Math.floor((Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().time / 1000) * fps);\n    let imageRow;\n    if (sprite.isAttacking && sprite.attackFrames) {\n        frame = frame % sprite.attackFrames[sprite.directionString].length;\n        imageRow = sprite.attackFrames[sprite.directionString][frame];\n    }\n    else {\n        frame = frame % sprite.walkFrames.length;\n        imageRow = sprite.walkFrames[frame];\n    }\n    _constants__WEBPACK_IMPORTED_MODULE_1__[\"CTX\"].drawImage(sprite.image, imageRow * sprite.width, sprite.direction * sprite.height, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width * sprite.scale, sprite.height * sprite.scale);\n}\nfunction moveSprite(sprite, movementSpeed) {\n    // sprite is an object from state\n    if (Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.w || Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.ArrowUp) {\n        sprite.y -= movementSpeed;\n        sprite.direction = sprite.imageRows.up;\n        sprite.directionString = 'up';\n    }\n    else if (Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.s || Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.ArrowDown) {\n        sprite.y += movementSpeed;\n        sprite.direction = sprite.imageRows.down;\n        sprite.directionString = 'down';\n    }\n    if (Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.a || Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.ArrowLeft) {\n        sprite.x -= movementSpeed;\n        sprite.direction = sprite.imageRows.left;\n        sprite.directionString = 'left';\n    }\n    else if (Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.d || Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.ArrowRight) {\n        sprite.x += movementSpeed;\n        sprite.direction = sprite.imageRows.right;\n        sprite.directionString = 'right';\n    }\n    if (Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys[' '] || Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().pressedKeys.c) {\n        sprite.isAttacking = true;\n    }\n    else {\n        sprite.isAttacking = false;\n    }\n    // Detect boundaries\n    let width = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS\"].width - sprite.width * sprite.scale;\n    if (sprite.x > width) {\n        sprite.x = width;\n    }\n    else if (sprite.x < 0) {\n        sprite.x = 0;\n    }\n    let height = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS\"].height - sprite.height * sprite.scale;\n    if (sprite.y > height) {\n        sprite.y = height;\n    }\n    else if (sprite.y < 0) {\n        sprite.y = 0;\n    }\n}\nfunction autoPilotSprite(sprite, movementSpeed) {\n    // path for NPC wandering\n    let path = [];\n    if (sprite.name === \"turtle\") {\n        path = [\n            \"down\",\n            \"down\",\n            \"left\",\n            \"left\",\n            \"up\",\n            \"up\",\n            \"right\",\n            \"right\",\n            \"up\",\n            \"up\",\n            \"right\",\n            \"right\",\n            \"down\",\n            \"down\",\n            \"left\",\n            \"left\"\n        ];\n    }\n    if (sprite.name === \"snail\") {\n        path = [\"left\", \"left\", \"left\", \"right\", \"right\", \"right\"];\n    }\n    if (sprite.name === \"grimReaper\") {\n        path = [\"up\", \"down\"];\n    }\n    // determine frame\n    const fps = sprite.frameRate / 2;\n    let frame = Math.floor((Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().time / 1000) * fps);\n    let direction = path[frame % path.length];\n    // update sprite object with new coordinates at correct frame\n    if (direction === \"up\") {\n        sprite.y -= movementSpeed;\n        sprite.direction = sprite.imageRows.up;\n    }\n    else if (direction === \"down\") {\n        sprite.y += movementSpeed;\n        sprite.direction = sprite.imageRows.down;\n    }\n    if (direction === \"left\") {\n        sprite.x -= movementSpeed;\n        sprite.direction = sprite.imageRows.left;\n    }\n    else if (direction === \"right\") {\n        sprite.x += movementSpeed;\n        sprite.direction = sprite.imageRows.right;\n    }\n    // Detect boundaries\n    let width = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS\"].width - sprite.width * 2;\n    if (sprite.x > width) {\n        sprite.x = width;\n    }\n    else if (sprite.x < 0) {\n        sprite.x = 0;\n    }\n    let height = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS\"].height - sprite.height * 2;\n    if (sprite.y > height) {\n        sprite.y = height;\n    }\n    else if (sprite.y < 0) {\n        sprite.y = 0;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/animate.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: CANVAS, CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_SCALE, CTX, ELEMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS\", function() { return CANVAS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_WIDTH\", function() { return CANVAS_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_HEIGHT\", function() { return CANVAS_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_SCALE\", function() { return CANVAS_SCALE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CTX\", function() { return CTX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELEMENT\", function() { return ELEMENT; });\nconst CANVAS = document.createElement(\"canvas\");\nconst CANVAS_WIDTH = 750; // a standard 2019 smartphone size\nconst CANVAS_HEIGHT = 1334; // a standard 2019 smartphone size\nconst CANVAS_SCALE = 3;\nconst CTX = CANVAS.getContext(\"2d\");\nconst ELEMENT = document.getElementById(\"app\");\nELEMENT.append(CANVAS);\n\n\n\n//# sourceURL=webpack:///./src/constants.ts?");

/***/ }),

/***/ "./src/gfx/sprites.png":
/*!*****************************!*\
  !*** ./src/gfx/sprites.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"gfx/sprites.png\");\n\n//# sourceURL=webpack:///./src/gfx/sprites.png?");

/***/ }),

/***/ "./src/gfx/woman.png":
/*!***************************!*\
  !*** ./src/gfx/woman.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"gfx/woman.png\");\n\n//# sourceURL=webpack:///./src/gfx/woman.png?");

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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var app_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var app_index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/index.html */ \"./src/index.html\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animate */ \"./src/animate.ts\");\n// main.ts\n // do once for app\n // get webpack to build files correctly\n // get webpack to build files correctly\n\n\n\n\n_constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS\"].width = _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS_WIDTH\"] / _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS_SCALE\"];\n_constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS\"].height = _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS_HEIGHT\"] / _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS_SCALE\"];\nlet lastRender = 0;\nconst backgroundImage = Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"requireImage\"])(\"https://opengameart.org/sites/default/files/preview_241.png\");\nfunction update(progress) {\n    // update the state of the world for elapsed time since last render\n    Object(_animate__WEBPACK_IMPORTED_MODULE_6__[\"moveSprite\"])(_state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].character, 1);\n    Object(_animate__WEBPACK_IMPORTED_MODULE_6__[\"autoPilotSprite\"])(_state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].snail, 1);\n    Object(_animate__WEBPACK_IMPORTED_MODULE_6__[\"autoPilotSprite\"])(_state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].grimReaper, 1);\n    Object(_animate__WEBPACK_IMPORTED_MODULE_6__[\"autoPilotSprite\"])(_state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].turtle, 1);\n    _state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].time += progress;\n}\nfunction draw() {\n    _constants__WEBPACK_IMPORTED_MODULE_3__[\"CTX\"].clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS\"].width, _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS\"].height);\n    _constants__WEBPACK_IMPORTED_MODULE_3__[\"CTX\"].imageSmoothingEnabled = false;\n    // draw state of the world\n    _constants__WEBPACK_IMPORTED_MODULE_3__[\"CTX\"].drawImage(backgroundImage, 0, 0, _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS_WIDTH\"], _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS_HEIGHT\"], 0, 0, _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS_WIDTH\"], _constants__WEBPACK_IMPORTED_MODULE_3__[\"CANVAS_HEIGHT\"]);\n    Object(_animate__WEBPACK_IMPORTED_MODULE_6__[\"drawSprite\"])(_state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].turtle);\n    Object(_animate__WEBPACK_IMPORTED_MODULE_6__[\"drawSprite\"])(_state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].grimReaper);\n    Object(_animate__WEBPACK_IMPORTED_MODULE_6__[\"drawSprite\"])(_state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].snail);\n    Object(_animate__WEBPACK_IMPORTED_MODULE_6__[\"drawSprite\"])(_state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].character);\n}\nfunction loop(timestamp) {\n    window.requestAnimationFrame(loop);\n    let progress = timestamp - lastRender;\n    update(progress);\n    draw();\n    lastRender = timestamp;\n}\nwindow.addEventListener(\"keydown\", keyDownListener, false);\nfunction keyDownListener(event) {\n    _state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].pressedKeys[event.key] = true;\n}\nwindow.addEventListener(\"keyup\", keyUpListener, false);\nfunction keyUpListener(event) {\n    _state__WEBPACK_IMPORTED_MODULE_4__[\"state\"].pressedKeys[event.key] = false;\n}\nwindow.requestAnimationFrame(loop);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! exports provided: state, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return getState; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var gfx_woman_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gfx/woman.png */ \"./src/gfx/woman.png\");\n/* harmony import */ var gfx_sprites_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gfx/sprites.png */ \"./src/gfx/sprites.png\");\n\n\n\nlet state = {\n    time: 0,\n    character: {\n        image: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"requireImage\"])(gfx_woman_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n        x: 0,\n        y: 0,\n        height: 32,\n        width: 32,\n        scale: 1,\n        currentFrame: 0,\n        walkFrames: [0, 1, 0, 2],\n        attackFrames: {\n            down: [0, 3, 3, 1],\n            up: [0, 3, 3, 2],\n            left: [0, 3, 3, 2],\n            right: [0, 3, 3, 2],\n        },\n        frameRate: 5,\n        direction: 0,\n        directionString: 'up',\n        animationTime: 0,\n        name: \"character\",\n        imageRows: {\n            down: 2,\n            up: 0,\n            left: 1,\n            right: 3\n        },\n        isAttacking: false\n    },\n    grimReaper: {\n        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16\n        image: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"requireImage\"])(gfx_sprites_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n        x: 30,\n        y: 60,\n        height: 32,\n        width: 32,\n        scale: 1,\n        currentFrame: 0,\n        walkFrames: [3, 4, 3, 5],\n        frameRate: 5,\n        direction: 0,\n        directionString: 'up',\n        animationTime: 0,\n        name: \"grimReaper\",\n        imageRows: {\n            down: 2,\n            up: 0,\n            left: 1,\n            right: 3\n        },\n        isAttacking: false\n    },\n    turtle: {\n        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16\n        image: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"requireImage\"])(gfx_sprites_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n        x: 120,\n        y: 210,\n        height: 32,\n        width: 32,\n        scale: 1,\n        currentFrame: 0,\n        walkFrames: [0, 1, 0, 2],\n        frameRate: 5,\n        direction: 0,\n        directionString: 'up',\n        animationTime: 0,\n        name: \"turtle\",\n        imageRows: {\n            down: 6,\n            up: 4,\n            left: 5,\n            right: 7\n        },\n        isAttacking: false\n    },\n    snail: {\n        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16\n        image: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"requireImage\"])(gfx_sprites_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n        x: 60,\n        y: 280,\n        height: 32,\n        width: 32,\n        scale: 1,\n        currentFrame: 0,\n        walkFrames: [0, 1, 0, 2],\n        frameRate: 5,\n        direction: 0,\n        directionString: 'up',\n        animationTime: 0,\n        name: \"snail\",\n        imageRows: {\n            down: 10,\n            up: 8,\n            left: 9,\n            right: 11\n        },\n        isAttacking: false\n    },\n    pressedKeys: {}\n};\nfunction getState() {\n    return state;\n}\n\n\n//# sourceURL=webpack:///./src/state.ts?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"style/style.css\");\n\n//# sourceURL=webpack:///./src/style/style.css?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: requireImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requireImage\", function() { return requireImage; });\nfunction requireImage(source) {\n    const image = new Image();\n    image.src = source;\n    return image;\n}\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ });