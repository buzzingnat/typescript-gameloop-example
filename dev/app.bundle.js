/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animate.ts":
/*!************************!*\
  !*** ./src/animate.ts ***!
  \************************/
/*! exports provided: drawSprite, moveSprite, autoPilotSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSprite\", function() { return drawSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSprite\", function() { return moveSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autoPilotSprite\", function() { return autoPilotSprite; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n\n\nfunction getFrameTime(framesPerSecond) {\n    return Math.floor((Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().time / 1000) * framesPerSecond);\n}\nfunction drawSprite(sprite) {\n    // Cannot draw this sprite until its image is loaded.\n    if (!sprite.image) {\n        return;\n    }\n    const fps = sprite.frameRate;\n    let frame = getFrameTime(fps);\n    let imageRow;\n    let imageColumn = sprite.direction;\n    if (sprite.actorStats.health <= 0) {\n        // show dead body\n        if (sprite.imageRows.death || sprite.imageRows.death === 0) {\n            imageRow = sprite.imageRows.death;\n        }\n        else {\n            imageRow = sprite.imageRows.down;\n        }\n        frame = frame % sprite.deathFrames.length;\n        imageColumn = sprite.deathFrames[frame];\n    }\n    else if (sprite.attackTarget && sprite.attackFrames) {\n        frame = frame % sprite.attackFrames[sprite.directionString].length;\n        imageRow = sprite.attackFrames[sprite.directionString][frame];\n    }\n    else {\n        frame = frame % sprite.walkFrames.length;\n        imageRow = sprite.walkFrames[frame];\n    }\n    _constants__WEBPACK_IMPORTED_MODULE_1__[\"CTX\"].drawImage(sprite.image, imageRow * sprite.width, imageColumn * sprite.height, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width * sprite.scale, sprite.height * sprite.scale);\n}\nfunction moveSpriteUp(sprite, movementSpeed) {\n    sprite.y -= movementSpeed;\n    sprite.direction = sprite.imageRows.up;\n    sprite.directionString = 'up';\n}\nfunction moveSpriteDown(sprite, movementSpeed) {\n    sprite.y += movementSpeed;\n    sprite.direction = sprite.imageRows.down;\n    sprite.directionString = 'down';\n}\nfunction moveSpriteLeft(sprite, movementSpeed) {\n    sprite.x -= movementSpeed;\n    sprite.direction = sprite.imageRows.left;\n    sprite.directionString = 'left';\n}\nfunction moveSpriteRight(sprite, movementSpeed) {\n    sprite.x += movementSpeed;\n    sprite.direction = sprite.imageRows.right;\n    sprite.directionString = 'right';\n}\nfunction detectKeyInputsForMovement(state, sprite, movementSpeed) {\n    // process key inputs stored on state\n    if (state.pressedKeys.w || state.pressedKeys.ArrowUp) {\n        moveSpriteUp(sprite, movementSpeed);\n    }\n    else if (state.pressedKeys.s || state.pressedKeys.ArrowDown) {\n        moveSpriteDown(sprite, movementSpeed);\n    }\n    if (state.pressedKeys.a || state.pressedKeys.ArrowLeft) {\n        moveSpriteLeft(sprite, movementSpeed);\n    }\n    else if (state.pressedKeys.d || state.pressedKeys.ArrowRight) {\n        moveSpriteRight(sprite, movementSpeed);\n    }\n}\nfunction detectGameBoundaries(sprite) {\n    let width = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS\"].width - sprite.width * sprite.scale;\n    if (sprite.x > width) {\n        sprite.x = width;\n    }\n    else if (sprite.x < 0) {\n        sprite.x = 0;\n    }\n    let height = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS\"].height - sprite.height * sprite.scale;\n    if (sprite.y > height) {\n        sprite.y = height;\n    }\n    else if (sprite.y < 0) {\n        sprite.y = 0;\n    }\n}\nfunction beginCombat(attacker, defender) {\n    attacker.attackTarget = defender;\n    defender.attackTarget = attacker;\n}\nfunction detectCollision(sprite, allActors) {\n    // if x is < or > sprite value OR y is < or > sprite value, then NO COLLISION\n    for (const actor of allActors) {\n        if (actor === sprite || actor.actorStats.health <= 0) {\n            continue;\n        }\n        if (actor.x + actor.width < sprite.x) { // actor left of sprite\n        }\n        else if (actor.x > sprite.x + sprite.width) { // actor right of sprite\n        }\n        else if (actor.y + actor.height < sprite.y) { // actor below sprite\n        }\n        else if (actor.y > sprite.y + sprite.height) { // actor above sprite\n        }\n        else {\n            return actor;\n        }\n    }\n}\nfunction handleCollision(sprite, state, movementSpeed) {\n    const victim = detectCollision(sprite, [...state.actors, state.character]);\n    if (victim) {\n        beginCombat(sprite, victim);\n    }\n}\nfunction followPredefinedPath(sprite, movementSpeed, direction) {\n    if (direction === 'up') {\n        moveSpriteUp(sprite, movementSpeed);\n    }\n    else if (direction === 'down') {\n        moveSpriteDown(sprite, movementSpeed);\n    }\n    if (direction === 'left') {\n        moveSpriteLeft(sprite, movementSpeed);\n    }\n    else if (direction === 'right') {\n        moveSpriteRight(sprite, movementSpeed);\n    }\n}\nfunction moveSprite(sprite, movementSpeed) {\n    const state = Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])();\n    detectKeyInputsForMovement(state, sprite, movementSpeed);\n    // collision detection with other actors\n    handleCollision(sprite, state, movementSpeed);\n    // Detect boundaries\n    detectGameBoundaries(sprite);\n}\nfunction autoPilotSprite(sprite, movementSpeed) {\n    const state = Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])();\n    // determine frame\n    const fps = sprite.frameRate / 2;\n    let frame = Math.floor((state.time / 1000) * fps);\n    let direction = sprite.path[frame % sprite.path.length];\n    // update sprite object with new coordinates at correct frame\n    if (sprite.actorStats.health <= 0) {\n        return;\n    }\n    if (sprite.attackTarget && sprite.attackTarget.actorStats) {\n        sprite.attackTarget.actorStats.health -= sprite.actorStats.damage;\n        if (sprite.attackTarget.actorStats.health <= 0) {\n            sprite.attackTarget = null;\n        }\n        // do not move\n        // deal damage to character as long as it has health\n        // if character is dead, then end attack\n    }\n    else {\n        followPredefinedPath(sprite, movementSpeed, direction);\n        // collision detection with other actors\n        handleCollision(sprite, state, movementSpeed);\n    }\n    // Detect boundaries\n    detectGameBoundaries(sprite);\n}\n\n\n//# sourceURL=webpack:///./src/animate.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var app_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var app_index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/index.html */ \"./src/index.html\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animate */ \"./src/animate.ts\");\n// main.ts\n // do once for app\n // get webpack to build files correctly\n // get webpack to build files correctly\n\n\n\n\n\n_constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS\"].width = _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS_WIDTH\"] / _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS_SCALE\"];\n_constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS\"].height = _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS_HEIGHT\"] / _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS_SCALE\"];\nlet lastRender = 0;\nconst backgroundImage = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"requireImage\"])('https://opengameart.org/sites/default/files/preview_241.png');\nfunction generateActorPath() {\n    let path = [];\n    const directions = ['up', 'down', 'left', 'right'];\n    for (let i = 0; i < lodash__WEBPACK_IMPORTED_MODULE_3___default.a.random(4, 12); i++) {\n        path.push(directions[lodash__WEBPACK_IMPORTED_MODULE_3___default.a.random(directions.length - 1)]);\n    }\n    return path;\n}\nfunction populateActors(state, quantity) {\n    const actorChoices = [state.grimReaper, state.snail, state.turtle];\n    for (let i = 0; i < quantity; i++) {\n        let newActor = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(actorChoices[lodash__WEBPACK_IMPORTED_MODULE_3___default.a.random(actorChoices.length - 1)]);\n        newActor.x = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.random(_constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS\"].width);\n        newActor.y = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.random(_constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS\"].height);\n        newActor.name = newActor.name + '-' + state.actors.length;\n        newActor.path = generateActorPath();\n        state.actors.push(newActor);\n    }\n}\nfunction update(progress) {\n    // update the state of the world for elapsed time since last render\n    const state = Object(_state__WEBPACK_IMPORTED_MODULE_5__[\"getState\"])();\n    for (const sprite of state.actors) {\n        Object(_animate__WEBPACK_IMPORTED_MODULE_7__[\"autoPilotSprite\"])(sprite, 1);\n    }\n    Object(_animate__WEBPACK_IMPORTED_MODULE_7__[\"moveSprite\"])(state.character, 1);\n    state.time += progress;\n}\nfunction draw() {\n    const state = Object(_state__WEBPACK_IMPORTED_MODULE_5__[\"getState\"])();\n    _constants__WEBPACK_IMPORTED_MODULE_4__[\"CTX\"].clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS\"].width, _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS\"].height);\n    _constants__WEBPACK_IMPORTED_MODULE_4__[\"CTX\"].imageSmoothingEnabled = false;\n    // draw state of the world\n    _constants__WEBPACK_IMPORTED_MODULE_4__[\"CTX\"].drawImage(backgroundImage, 0, 0, _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS_WIDTH\"], _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS_HEIGHT\"], 0, 0, _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS_WIDTH\"], _constants__WEBPACK_IMPORTED_MODULE_4__[\"CANVAS_HEIGHT\"]);\n    for (const sprite of state.actors) {\n        Object(_animate__WEBPACK_IMPORTED_MODULE_7__[\"drawSprite\"])(sprite);\n    }\n    Object(_animate__WEBPACK_IMPORTED_MODULE_7__[\"drawSprite\"])(state.character);\n}\nfunction loop(timestamp) {\n    window.requestAnimationFrame(loop);\n    let progress = timestamp - lastRender;\n    update(progress);\n    draw();\n    lastRender = timestamp;\n}\nwindow.addEventListener('keydown', keyDownListener, false);\nfunction keyDownListener(event) {\n    Object(_state__WEBPACK_IMPORTED_MODULE_5__[\"getState\"])().pressedKeys[event.key] = true;\n}\nwindow.addEventListener('keyup', keyUpListener, false);\nfunction keyUpListener(event) {\n    Object(_state__WEBPACK_IMPORTED_MODULE_5__[\"getState\"])().pressedKeys[event.key] = false;\n}\nwindow.addEventListener('load', (event) => {\n    populateActors(Object(_state__WEBPACK_IMPORTED_MODULE_5__[\"getState\"])(), 9);\n});\nwindow.requestAnimationFrame(loop);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! exports provided: state, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return getState; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var gfx_woman_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gfx/woman.png */ \"./src/gfx/woman.png\");\n/* harmony import */ var gfx_sprites_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gfx/sprites.png */ \"./src/gfx/sprites.png\");\n\n\n\nlet state = {\n    time: 0,\n    character: {\n        image: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"requireImage\"])(gfx_woman_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n        x: 0,\n        y: 0,\n        height: 32,\n        width: 32,\n        scale: 1,\n        currentFrame: 0,\n        walkFrames: [0, 1, 0, 2],\n        attackFrames: {\n            down: [0, 3, 3, 1],\n            up: [0, 3, 3, 2],\n            left: [0, 3, 3, 2],\n            right: [0, 3, 3, 2],\n        },\n        deathFrames: [4],\n        frameRate: 5,\n        direction: 0,\n        directionString: 'up',\n        animationTime: 0,\n        name: 'character',\n        imageRows: {\n            down: 2,\n            up: 0,\n            left: 1,\n            right: 3,\n            death: 0,\n        },\n        actorStats: {\n            health: 10,\n            range: 2,\n            damage: 3,\n        },\n        attackTarget: null,\n    },\n    grimReaper: {\n        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16\n        image: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"requireImage\"])(gfx_sprites_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n        x: 30,\n        y: 60,\n        height: 32,\n        width: 32,\n        scale: 1,\n        currentFrame: 0,\n        walkFrames: [3, 4, 3, 5],\n        attackFrames: {\n            down: [3, 3],\n            up: [3, 3],\n            left: [3, 3],\n            right: [3, 3],\n        },\n        deathFrames: [9],\n        frameRate: 5,\n        direction: 0,\n        directionString: 'up',\n        animationTime: 0,\n        name: 'grimReaper',\n        imageRows: {\n            down: 2,\n            up: 0,\n            left: 1,\n            right: 3,\n            death: 10,\n        },\n        actorStats: {\n            health: 7,\n            range: 2,\n            damage: 2,\n        },\n        attackTarget: null,\n    },\n    turtle: {\n        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16\n        image: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"requireImage\"])(gfx_sprites_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n        x: 120,\n        y: 210,\n        height: 32,\n        width: 32,\n        scale: 1,\n        currentFrame: 0,\n        walkFrames: [0, 1, 0, 2],\n        attackFrames: {\n            down: [0, 0],\n            up: [0, 0],\n            left: [0, 0],\n            right: [0, 0],\n        },\n        deathFrames: [10],\n        frameRate: 5,\n        direction: 0,\n        directionString: 'up',\n        animationTime: 0,\n        name: 'turtle',\n        imageRows: {\n            down: 6,\n            up: 4,\n            left: 5,\n            right: 7,\n            death: 10,\n        },\n        actorStats: {\n            health: 12,\n            range: 1,\n            damage: 1,\n        },\n        attackTarget: null,\n    },\n    snail: {\n        // by poikilos, Underworld Load comprehensive top view RPG tileset 32x32 some 16x24 16x16\n        image: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"requireImage\"])(gfx_sprites_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n        x: 60,\n        y: 280,\n        height: 32,\n        width: 32,\n        scale: 1,\n        currentFrame: 0,\n        walkFrames: [0, 1, 0, 2],\n        attackFrames: {\n            down: [0, 0],\n            up: [0, 0],\n            left: [0, 0],\n            right: [0, 0],\n        },\n        deathFrames: [13],\n        frameRate: 5,\n        direction: 0,\n        directionString: 'up',\n        animationTime: 0,\n        name: 'snail',\n        imageRows: {\n            down: 10,\n            up: 8,\n            left: 9,\n            right: 11,\n            death: 9,\n        },\n        actorStats: {\n            health: 7,\n            range: 1,\n            damage: 1,\n        },\n        attackTarget: null,\n    },\n    actors: [],\n    pressedKeys: {}\n};\nwindow['state'] = state;\nfunction getState() {\n    return state;\n}\nwindow['getState'] = getState;\n\n\n//# sourceURL=webpack:///./src/state.ts?");

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