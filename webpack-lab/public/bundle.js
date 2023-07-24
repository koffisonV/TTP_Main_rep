/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ \"./client/score.js\");\nconst winnerText = document.getElementById(\"winner\");\nconst leftoversBtn = document.getElementById(\"leftovers\");\nconst takeoutBtn = document.getElementById(\"takeout\");\n\n\nconst updateWinner = () => {\n  const currWinner = (0,_score__WEBPACK_IMPORTED_MODULE_0__.getWinner)();\n  winnerText.innerText = currWinner;\n};\n\ntakeoutBtn.addEventListener(\"click\", () => {\n  (0,_score__WEBPACK_IMPORTED_MODULE_0__.voteTakeout)();\n  updateWinner();\n});\n\nleftoversBtn.addEventListener(\"click\", () => {\n  (0,_score__WEBPACK_IMPORTED_MODULE_0__.voteLeftovers)();\n  updateWinner();\n});\n\n\n//# sourceURL=webpack://Webpack/./client/app.js?");

/***/ }),

/***/ "./client/score.js":
/*!*************************!*\
  !*** ./client/score.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWinner: () => (/* binding */ getWinner),\n/* harmony export */   voteLeftovers: () => (/* binding */ voteLeftovers),\n/* harmony export */   voteTakeout: () => (/* binding */ voteTakeout)\n/* harmony export */ });\nlet takeoutScore = 0;\nlet leftoversScore = 0;\n\nconst getWinner = () => {\n  if (takeoutScore === leftoversScore) return \"It's a tie\";\n  else {\n    return takeoutScore > leftoversScore ? \"Order out\" : \"Eat Leftovers\";\n  }\n};\n\nconst voteTakeout = () => {\n  takeoutScore++;\n};\n\nconst voteLeftovers = () => {\n  leftoversScore++;\n};\n\n//# sourceURL=webpack://Webpack/./client/score.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/app.js");
/******/ 	
/******/ })()
;