/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = 800;\n  canvas.height = 500;\n  let player = new Image();\n  player.src = \"../src/assets/images/sprites/player_walk.png\";\n  let width = 32;\n  let height = 32;\n  let frame = 7;\n  let frameY = 0;\n  let currentFrame = 0;\n  let x = 0;\n  document.addEventListener(\"keydown\", e => {\n    if (['d', 'a'].indexOf(e.key) >= 0) {\n      currentFrame++;\n      currentFrame %= frame;\n    }\n    if (e.key === 'd') {\n      frameY = 0;\n      if (x + 5 <= canvas.width - width * 2) {\n        x += 5;\n      }\n    }\n    if (e.key === 'a') {\n      frameY = 1;\n      if (x - 5 >= 0) {\n        x -= 5;\n      }\n    }\n  });\n  document.addEventListener(\"keyup\", e => {\n    if (e.key === 'd') {\n      currentFrame = 0;\n    }\n    if (e.key === 'a') {\n      currentFrame = 0;\n    }\n  });\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(player, currentFrame * width, frameY * height, width, height, x, canvas.height - 150, width * 2, height * 2);\n    window.setTimeout(() => {\n      requestAnimationFrame(animate);\n    }, 1000 / 30);\n  }\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllciIsIkltYWdlIiwic3JjIiwiZnJhbWUiLCJmcmFtZVkiLCJjdXJyZW50RnJhbWUiLCJ4IiwiZSIsImluZGV4T2YiLCJrZXkiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwid2luZG93Iiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWJ1c3Rlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjYW52YXMud2lkdGggPSA4MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgIGxldCBwbGF5ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBwbGF5ZXIuc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy9wbGF5ZXJfd2Fsay5wbmdcIjtcblxuICAgIGxldCB3aWR0aCA9IDMyO1xuICAgIGxldCBoZWlnaHQgPSAzMjtcbiAgICBsZXQgZnJhbWUgPSA3O1xuICAgIGxldCBmcmFtZVkgPSAwO1xuICAgIGxldCBjdXJyZW50RnJhbWUgPSAwO1xuICAgIGxldCB4ID0gMDtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChlKT0+IHtcbiAgICAgICAgaWYgKFsnZCcgLCAnYSddLmluZGV4T2YoZS5rZXkpID49IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZSsrO1xuICAgICAgICAgICAgY3VycmVudEZyYW1lICU9IGZyYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnZCcpIHtcbiAgICAgICAgICAgIGZyYW1lWSA9IDA7XG4gICAgICAgICAgICBpZiAoeCs1IDw9IGNhbnZhcy53aWR0aCAtIHdpZHRoKjIgKSB7eCArPSA1O31cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXkgPT09J2EnKSB7XG4gICAgICAgICAgICBmcmFtZVkgPSAxO1xuICAgICAgICAgICAgaWYgKHgtNSA+PSAwICkge3ggLT0gNTt9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKT0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnZCcpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUua2V5ID09PSdhJykge1xuICAgICAgICAgICAgY3VycmVudEZyYW1lID0gMDtcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShwbGF5ZXIsIGN1cnJlbnRGcmFtZSp3aWR0aCwgZnJhbWVZKmhlaWdodCwgd2lkdGgsIGhlaWdodCwgeCwgY2FudmFzLmhlaWdodC0xNTAsIHdpZHRoKjIsIGhlaWdodCoyKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge3JlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKX0sIDEwMDAvMzApO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxr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\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYnVzdGVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;