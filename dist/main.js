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

eval("document.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = 800;\n  canvas.height = 500;\n  let player = document.createElement(\"img\");\n  player.src = \"../src/assets/images/sprites/player_walking.png\";\n  let bg = document.createElement(\"img\");\n  bg.src = \"../src/assets/images/background/game_bg.png\";\n  let width = 32;\n  let height = 33;\n  let frame = 7;\n  let frameY = 0;\n  let currentFrame = 0;\n  let x = 0;\n  document.addEventListener(\"keydown\", e => {\n    if (['d', 'a'].indexOf(e.key) >= 0) {\n      currentFrame++;\n      currentFrame %= frame;\n    }\n    if (e.key === 'd') {\n      frameY = 0;\n      if (x + 5 <= canvas.width - width * 2) {\n        x += 5;\n      }\n    }\n    if (e.key === 'a') {\n      frameY = 1;\n      if (x - 5 >= 0) {\n        x -= 5;\n      }\n    }\n  });\n  document.addEventListener(\"keyup\", e => {\n    if (e.key === 'd') {\n      currentFrame = 0;\n    }\n    if (e.key === 'a') {\n      currentFrame = 0;\n    }\n  });\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);\n    ctx.drawImage(player, currentFrame * width, frameY * height, width, height, x, canvas.height - 130, width * 2, height * 2);\n    window.setTimeout(() => {\n      requestAnimationFrame(animate);\n    }, 1000 / 30);\n  }\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllciIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJiZyIsImZyYW1lIiwiZnJhbWVZIiwiY3VycmVudEZyYW1lIiwieCIsImUiLCJpbmRleE9mIiwia2V5IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1idXN0ZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY2FudmFzLndpZHRoID0gODAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbiAgICBsZXQgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwbGF5ZXIuc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy9wbGF5ZXJfd2Fsa2luZy5wbmdcIjtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGJnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9nYW1lX2JnLnBuZ1wiXG5cbiAgICBsZXQgd2lkdGggPSAzMjtcbiAgICBsZXQgaGVpZ2h0ID0gMzM7XG4gICAgbGV0IGZyYW1lID0gNztcbiAgICBsZXQgZnJhbWVZID0gMDtcbiAgICBsZXQgY3VycmVudEZyYW1lID0gMDtcbiAgICBsZXQgeCA9IDA7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoZSk9PiB7XG4gICAgICAgIGlmIChbJ2QnICwgJ2EnXS5pbmRleE9mKGUua2V5KSA+PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50RnJhbWUrKztcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZSAlPSBmcmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICAgICAgICBmcmFtZVkgPSAwO1xuICAgICAgICAgICAgaWYgKHgrNSA8PSBjYW52YXMud2lkdGggLSB3aWR0aCoyICkge3ggKz0gNTt9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUua2V5ID09PSdhJykge1xuICAgICAgICAgICAgZnJhbWVZID0gMTtcbiAgICAgICAgICAgIGlmICh4LTUgPj0gMCApIHt4IC09IDU7fVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSk9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICAgICAgICBjdXJyZW50RnJhbWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmtleSA9PT0nYScpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZSA9IDA7XG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmcsIDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICBjdHguZHJhd0ltYWdlKHBsYXllciwgY3VycmVudEZyYW1lKndpZHRoLCBmcmFtZVkqaGVpZ2h0LCB3aWR0aCwgaGVpZ2h0LCB4LCBjYW52YXMuaGVpZ2h0LTEzMCwgd2lkdGgqMiwgaGVpZ2h0KjIpO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpfSwgMTAwMC8zMCk7XG4gICAgfVxuICAgIGFuaW1hdGUoKTtcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbkNILE1BQU0sQ0FBQ0ksS0FBSyxHQUFHLEdBQUc7RUFDbEJKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLEdBQUc7RUFFbkIsSUFBSUMsTUFBTSxHQUFHUixRQUFRLENBQUNTLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUNELE1BQU0sQ0FBQ0UsR0FBRyxHQUFDLGlEQUFpRDtFQUM1RCxJQUFJQyxFQUFFLEdBQUdYLFFBQVEsQ0FBQ1MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0Q0UsRUFBRSxDQUFDRCxHQUFHLEdBQUcsNkNBQTZDO0VBRXRELElBQUlKLEtBQUssR0FBRyxFQUFFO0VBQ2QsSUFBSUMsTUFBTSxHQUFHLEVBQUU7RUFDZixJQUFJSyxLQUFLLEdBQUcsQ0FBQztFQUNiLElBQUlDLE1BQU0sR0FBRyxDQUFDO0VBQ2QsSUFBSUMsWUFBWSxHQUFHLENBQUM7RUFDcEIsSUFBSUMsQ0FBQyxHQUFHLENBQUM7RUFDVGYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVlLENBQUMsSUFBSTtJQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFHLEdBQUcsQ0FBQyxDQUFDQyxPQUFPLENBQUNELENBQUMsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO01BQ2pDSixZQUFZLEVBQUU7TUFDZEEsWUFBWSxJQUFJRixLQUFLO0lBQ3pCO0lBRUEsSUFBSUksQ0FBQyxDQUFDRSxHQUFHLEtBQUssR0FBRyxFQUFFO01BQ2ZMLE1BQU0sR0FBRyxDQUFDO01BQ1YsSUFBSUUsQ0FBQyxHQUFDLENBQUMsSUFBSWIsTUFBTSxDQUFDSSxLQUFLLEdBQUdBLEtBQUssR0FBQyxDQUFDLEVBQUc7UUFBQ1MsQ0FBQyxJQUFJLENBQUM7TUFBQztJQUNoRDtJQUNBLElBQUlDLENBQUMsQ0FBQ0UsR0FBRyxLQUFJLEdBQUcsRUFBRTtNQUNkTCxNQUFNLEdBQUcsQ0FBQztNQUNWLElBQUlFLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFHO1FBQUNBLENBQUMsSUFBSSxDQUFDO01BQUM7SUFDM0I7RUFDSixDQUFDLENBQUM7RUFFRmYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdlLENBQUMsSUFBSTtJQUNyQyxJQUFJQSxDQUFDLENBQUNFLEdBQUcsS0FBSyxHQUFHLEVBQUU7TUFDZkosWUFBWSxHQUFHLENBQUM7SUFDcEI7SUFDQSxJQUFJRSxDQUFDLENBQUNFLEdBQUcsS0FBSSxHQUFHLEVBQUU7TUFDZEosWUFBWSxHQUFHLENBQUM7SUFDcEI7RUFDSixDQUFDLENBQUM7RUFHRixTQUFTSyxPQUFPQSxDQUFBLEVBQUc7SUFDZmYsR0FBRyxDQUFDZ0IsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUNsQixNQUFNLENBQUNJLEtBQUssRUFBQ0osTUFBTSxDQUFDSyxNQUFNLENBQUM7SUFDN0NILEdBQUcsQ0FBQ2lCLFNBQVMsQ0FBQ1YsRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUVULE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNLLE1BQU0sQ0FBQztJQUNuREgsR0FBRyxDQUFDaUIsU0FBUyxDQUFDYixNQUFNLEVBQUVNLFlBQVksR0FBQ1IsS0FBSyxFQUFFTyxNQUFNLEdBQUNOLE1BQU0sRUFBRUQsS0FBSyxFQUFFQyxNQUFNLEVBQUVRLENBQUMsRUFBRWIsTUFBTSxDQUFDSyxNQUFNLEdBQUMsR0FBRyxFQUFFRCxLQUFLLEdBQUMsQ0FBQyxFQUFFQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0lBQ2hIZSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxNQUFNO01BQUNDLHFCQUFxQixDQUFDTCxPQUFPLENBQUM7SUFBQSxDQUFDLEVBQUUsSUFBSSxHQUFDLEVBQUUsQ0FBQztFQUN0RTtFQUNBQSxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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