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

eval("document.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = 800;\n  canvas.height = 500;\n  let player = new Image();\n  player.src = \"../src/assets/images/sprites/player_walking.png\";\n  let bg = new Image();\n  bg.src = \"src/assets/images/background/game_bg.png\";\n  let width = 32;\n  let height = 33;\n  let frame = 7;\n  let frameY = 0;\n  let currentFrame = 0;\n  let x = 0;\n  document.addEventListener(\"keydown\", e => {\n    if (['d', 'a'].indexOf(e.key) >= 0) {\n      currentFrame++;\n      currentFrame %= frame;\n    }\n    if (e.key === 'd') {\n      frameY = 0;\n      if (x + 5 <= canvas.width - width * 2) {\n        x += 5;\n      }\n    }\n    if (e.key === 'a') {\n      frameY = 1;\n      if (x - 5 >= 0) {\n        x -= 5;\n      }\n    }\n  });\n  document.addEventListener(\"keyup\", e => {\n    if (e.key === 'd') {\n      currentFrame = 0;\n    }\n    if (e.key === 'a') {\n      currentFrame = 0;\n    }\n  });\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);\n    ctx.drawImage(player, currentFrame * width, frameY * height, width, height, x, canvas.height - 130, width * 2, height * 2);\n    window.setTimeout(() => {\n      requestAnimationFrame(animate);\n    }, 1000 / 30);\n  }\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllciIsIkltYWdlIiwic3JjIiwiYmciLCJmcmFtZSIsImZyYW1lWSIsImN1cnJlbnRGcmFtZSIsIngiLCJlIiwiaW5kZXhPZiIsImtleSIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYnVzdGVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG4gICAgbGV0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgIHBsYXllci5zcmM9XCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3BsYXllcl93YWxraW5nLnBuZ1wiO1xuICAgIGxldCBiZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJnLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9nYW1lX2JnLnBuZ1wiO1xuXG4gICAgbGV0IHdpZHRoID0gMzI7XG4gICAgbGV0IGhlaWdodCA9IDMzO1xuICAgIGxldCBmcmFtZSA9IDc7XG4gICAgbGV0IGZyYW1lWSA9IDA7XG4gICAgbGV0IGN1cnJlbnRGcmFtZSA9IDA7XG4gICAgbGV0IHggPSAwO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsKGUpPT4ge1xuICAgICAgICBpZiAoWydkJyAsICdhJ10uaW5kZXhPZihlLmtleSkgPj0gMCkge1xuICAgICAgICAgICAgY3VycmVudEZyYW1lKys7XG4gICAgICAgICAgICBjdXJyZW50RnJhbWUgJT0gZnJhbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdkJykge1xuICAgICAgICAgICAgZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGlmICh4KzUgPD0gY2FudmFzLndpZHRoIC0gd2lkdGgqMiApIHt4ICs9IDU7fVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmtleSA9PT0nYScpIHtcbiAgICAgICAgICAgIGZyYW1lWSA9IDE7XG4gICAgICAgICAgICBpZiAoeC01ID49IDAgKSB7eCAtPSA1O31cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdkJykge1xuICAgICAgICAgICAgY3VycmVudEZyYW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXkgPT09J2EnKSB7XG4gICAgICAgICAgICBjdXJyZW50RnJhbWUgPSAwO1xuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsY2FudmFzLndpZHRoLGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJnLCAwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShwbGF5ZXIsIGN1cnJlbnRGcmFtZSp3aWR0aCwgZnJhbWVZKmhlaWdodCwgd2lkdGgsIGhlaWdodCwgeCwgY2FudmFzLmhlaWdodC0xMzAsIHdpZHRoKjIsIGhlaWdodCoyKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge3JlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKX0sIDEwMDAvMzApO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ2hELE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DSCxNQUFNLENBQUNJLEtBQUssR0FBRyxHQUFHO0VBQ2xCSixNQUFNLENBQUNLLE1BQU0sR0FBRyxHQUFHO0VBRW5CLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztFQUN4QkQsTUFBTSxDQUFDRSxHQUFHLEdBQUMsaURBQWlEO0VBQzVELElBQUlDLEVBQUUsR0FBRyxJQUFJRixLQUFLLENBQUMsQ0FBQztFQUNwQkUsRUFBRSxDQUFDRCxHQUFHLEdBQUcsMENBQTBDO0VBRW5ELElBQUlKLEtBQUssR0FBRyxFQUFFO0VBQ2QsSUFBSUMsTUFBTSxHQUFHLEVBQUU7RUFDZixJQUFJSyxLQUFLLEdBQUcsQ0FBQztFQUNiLElBQUlDLE1BQU0sR0FBRyxDQUFDO0VBQ2QsSUFBSUMsWUFBWSxHQUFHLENBQUM7RUFDcEIsSUFBSUMsQ0FBQyxHQUFHLENBQUM7RUFDVGYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVlLENBQUMsSUFBSTtJQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFHLEdBQUcsQ0FBQyxDQUFDQyxPQUFPLENBQUNELENBQUMsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO01BQ2pDSixZQUFZLEVBQUU7TUFDZEEsWUFBWSxJQUFJRixLQUFLO0lBQ3pCO0lBRUEsSUFBSUksQ0FBQyxDQUFDRSxHQUFHLEtBQUssR0FBRyxFQUFFO01BQ2ZMLE1BQU0sR0FBRyxDQUFDO01BQ1YsSUFBSUUsQ0FBQyxHQUFDLENBQUMsSUFBSWIsTUFBTSxDQUFDSSxLQUFLLEdBQUdBLEtBQUssR0FBQyxDQUFDLEVBQUc7UUFBQ1MsQ0FBQyxJQUFJLENBQUM7TUFBQztJQUNoRDtJQUNBLElBQUlDLENBQUMsQ0FBQ0UsR0FBRyxLQUFJLEdBQUcsRUFBRTtNQUNkTCxNQUFNLEdBQUcsQ0FBQztNQUNWLElBQUlFLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFHO1FBQUNBLENBQUMsSUFBSSxDQUFDO01BQUM7SUFDM0I7RUFDSixDQUFDLENBQUM7RUFFRmYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdlLENBQUMsSUFBSTtJQUNyQyxJQUFJQSxDQUFDLENBQUNFLEdBQUcsS0FBSyxHQUFHLEVBQUU7TUFDZkosWUFBWSxHQUFHLENBQUM7SUFDcEI7SUFDQSxJQUFJRSxDQUFDLENBQUNFLEdBQUcsS0FBSSxHQUFHLEVBQUU7TUFDZEosWUFBWSxHQUFHLENBQUM7SUFDcEI7RUFDSixDQUFDLENBQUM7RUFHRixTQUFTSyxPQUFPQSxDQUFBLEVBQUc7SUFDZmYsR0FBRyxDQUFDZ0IsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUNsQixNQUFNLENBQUNJLEtBQUssRUFBQ0osTUFBTSxDQUFDSyxNQUFNLENBQUM7SUFDN0NILEdBQUcsQ0FBQ2lCLFNBQVMsQ0FBQ1YsRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUVULE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNLLE1BQU0sQ0FBQztJQUNuREgsR0FBRyxDQUFDaUIsU0FBUyxDQUFDYixNQUFNLEVBQUVNLFlBQVksR0FBQ1IsS0FBSyxFQUFFTyxNQUFNLEdBQUNOLE1BQU0sRUFBRUQsS0FBSyxFQUFFQyxNQUFNLEVBQUVRLENBQUMsRUFBRWIsTUFBTSxDQUFDSyxNQUFNLEdBQUMsR0FBRyxFQUFFRCxLQUFLLEdBQUMsQ0FBQyxFQUFFQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0lBQ2hIZSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxNQUFNO01BQUNDLHFCQUFxQixDQUFDTCxPQUFPLENBQUM7SUFBQSxDQUFDLEVBQUUsSUFBSSxHQUFDLEVBQUUsQ0FBQztFQUN0RTtFQUNBQSxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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