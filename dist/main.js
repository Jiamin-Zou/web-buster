/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\n\nwindow.addEventListener('load', () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = 800;\n  canvas.height = 500;\n  const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  const gameView = new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx);\n  gameView.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ1M7QUFFOUNFLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU07RUFDbEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbkNKLE1BQU0sQ0FBQ0ssS0FBSyxHQUFHLEdBQUc7RUFDbEJMLE1BQU0sQ0FBQ00sTUFBTSxHQUFHLEdBQUc7RUFFbkIsTUFBTUMsSUFBSSxHQUFHLElBQUlYLHdEQUFJLENBQUNJLE1BQU0sQ0FBQztFQUM3QixNQUFNUSxRQUFRLEdBQUcsSUFBSVgsNkRBQVEsQ0FBQ1UsSUFBSSxFQUFFSixHQUFHLENBQUM7RUFFeENLLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7QUFFcEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWJ1c3Rlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY2FudmFzLndpZHRoID0gODAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpO1xuXG4gICAgZ2FtZVZpZXcuc3RhcnQoKVxuXG59KVxuIl0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsImdhbWVWaWV3Iiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object.js */ \"./src/scripts/moving_object.js\");\n\nclass Enemy extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUE2QztBQUU3QyxNQUFNQyxLQUFLLFNBQVNELHlEQUFZLENBQUM7QUFJakMsK0RBQWVDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYnVzdGVyLy4vc3JjL3NjcmlwdHMvZW5lbXkuanM/ZTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3QuanNcIlxuXG5jbGFzcyBFbmVteSBleHRlbmRzIE1vdmluZ09iamVjdCB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lbXk7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIkVuZW15Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/scripts/player.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy.js */ \"./src/scripts/enemy.js\");\n\n\nclass Game {\n  static GRAVITY = 0.5;\n  constructor(canvas) {\n    this.screenWidth = canvas.width;\n    this.screenHeight = canvas.height;\n    this.player = this.addPlayer();\n    this.enemies = [];\n    this.projectiles = [];\n  }\n  addPlayer() {\n    const player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      game: this\n    });\n    return player;\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);\n    this.player.update(ctx);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFpQztBQUNGO0FBRS9CLE1BQU1FLElBQUksQ0FBQztFQUNQLE9BQU9DLE9BQU8sR0FBRyxHQUFHO0VBQ3BCQyxXQUFXQSxDQUFFQyxNQUFNLEVBQUU7SUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUMvQixJQUFJLENBQUNDLFlBQVksR0FBR0gsTUFBTSxDQUFDSSxNQUFNO0lBQ2pDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDQyxPQUFPLEdBQUcsRUFBRTtJQUNqQixJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFO0VBRXpCO0VBRUFGLFNBQVNBLENBQUEsRUFBRztJQUNSLE1BQU1ELE1BQU0sR0FBRyxJQUFJVixrREFBTSxDQUFDO01BQUNjLElBQUksRUFBRTtJQUFJLENBQUMsQ0FBQztJQUN2QyxPQUFPSixNQUFNO0VBQ2pCO0VBQ0FLLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNOQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQ0UsWUFBWSxDQUFDO0lBQ3hELElBQUksQ0FBQ0UsTUFBTSxDQUFDUSxNQUFNLENBQUNGLEdBQUcsQ0FBQztFQUMzQjtBQUNKO0FBRUEsK0RBQWVkLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYnVzdGVyLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXkuanNcIjtcblxuY2xhc3MgR2FtZSB7XG4gICAgc3RhdGljIEdSQVZJVFkgPSAwLjU7XG4gICAgY29uc3RydWN0b3IgKGNhbnZhcykge1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5hZGRQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkUGxheWVyKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHtnYW1lOiB0aGlzfSlcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnNjcmVlbldpZHRoLCB0aGlzLnNjcmVlbkhlaWdodClcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGN0eCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJFbmVteSIsIkdhbWUiLCJHUkFWSVRZIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJzY3JlZW5XaWR0aCIsIndpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaGVpZ2h0IiwicGxheWVyIiwiYWRkUGxheWVyIiwiZW5lbWllcyIsInByb2plY3RpbGVzIiwiZ2FtZSIsImRyYXciLCJjdHgiLCJjbGVhclJlY3QiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  static LEFT_KEY = [\"ArrowLeft\", \"a\"];\n  static RIGHT_KEY = [\"ArrowRight\", \"d\"];\n  static UP_KEY = [\"ArrowUp\", \"w\"];\n  static DOWN_KEY = [\"ArrowDown\", \"s\"];\n  static SHOOT_KEY = [\" \"];\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n    this.bindKeyHandlers();\n    this.animate = this.animate.bind(this);\n  }\n  start() {\n    this.animate();\n  }\n  animate() {\n    requestAnimationFrame(this.animate);\n    this.game.draw(this.ctx);\n  }\n  bindKeyHandlers() {\n    document.addEventListener(\"keydown\", this.handleKeyDown.bind(this));\n    document.addEventListener(\"keyup\", this.handleKeyUp.bind(this));\n  }\n  handleKeyDown(e) {\n    const key = e.key;\n    const player = this.game.player;\n    console.log(\"keydown:-\" + key + \"-\");\n    if (GameView.LEFT_KEY.includes(key)) {\n      player.pressedKey.left = true;\n    } else if (GameView.RIGHT_KEY.includes(key)) {\n      player.pressedKey.right = true;\n    } else if (GameView.UP_KEY.includes(key)) {\n      player.pressedKey.up = true;\n    } else if (GameView.DOWN_KEY.includes(key)) {\n      // player.pressedKey.down = true;\n    } else if (GameView.SHOOT_KEY.includes(key)) {\n      player.pressedKey.shoot = true;\n    }\n  }\n  handleKeyUp(e) {\n    const key = e.key;\n    const player = this.game.player;\n    console.log(\"keyup:-\" + key + \"-\");\n    if (GameView.LEFT_KEY.includes(key)) {\n      player.pressedKey.left = false;\n      player.img = player.idleLeft;\n    } else if (GameView.RIGHT_KEY.includes(key)) {\n      player.pressedKey.right = false;\n      player.img = player.idleRight;\n    } else if (GameView.UP_KEY.includes(key)) {\n      player.pressedKey.up = false;\n    } else if (GameView.DOWN_KEY.includes(key)) {\n      // player.pressedKey.down = false;\n    } else if (GameView.SHOOT_KEY.includes(key)) {\n      player.pressedKey.shoot = false;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pDLElBQUlwQixRQUFRLENBQUNDLFFBQVEsQ0FBQ3VCLFFBQVEsQ0FBQ0osR0FBRyxDQUFDLEVBQUU7TUFDakNDLE1BQU0sQ0FBQ0ksVUFBVSxDQUFDQyxJQUFJLEdBQUcsS0FBSztNQUM5QkwsTUFBTSxDQUFDUyxHQUFHLEdBQUdULE1BQU0sQ0FBQ1UsUUFBUTtJQUNoQyxDQUFDLE1BQU0sSUFBSy9CLFFBQVEsQ0FBQ0UsU0FBUyxDQUFDc0IsUUFBUSxDQUFDSixHQUFHLENBQUMsRUFBRTtNQUMxQ0MsTUFBTSxDQUFDSSxVQUFVLENBQUNFLEtBQUssR0FBRyxLQUFLO01BQy9CTixNQUFNLENBQUNTLEdBQUcsR0FBR1QsTUFBTSxDQUFDVyxTQUFTO0lBQ2pDLENBQUMsTUFBTSxJQUFLaEMsUUFBUSxDQUFDRyxNQUFNLENBQUNxQixRQUFRLENBQUNKLEdBQUcsQ0FBQyxFQUFFO01BQ3ZDQyxNQUFNLENBQUNJLFVBQVUsQ0FBQ0csRUFBRSxHQUFHLEtBQUs7SUFDaEMsQ0FBQyxNQUFNLElBQUs1QixRQUFRLENBQUNJLFFBQVEsQ0FBQ29CLFFBQVEsQ0FBQ0osR0FBRyxDQUFDLEVBQUU7TUFDekM7SUFBQSxDQUNILE1BQU0sSUFBS3BCLFFBQVEsQ0FBQ0ssU0FBUyxDQUFDbUIsUUFBUSxDQUFDSixHQUFHLENBQUMsRUFBRTtNQUMxQ0MsTUFBTSxDQUFDSSxVQUFVLENBQUNJLEtBQUssR0FBRyxLQUFLO0lBQ25DO0VBQ0o7QUFFSjtBQUVBLCtEQUFlN0IsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1idXN0ZXIvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lVmlldyB7XG4gICAgc3RhdGljIExFRlRfS0VZID0gW1wiQXJyb3dMZWZ0XCIsIFwiYVwiXTtcbiAgICBzdGF0aWMgUklHSFRfS0VZID0gW1wiQXJyb3dSaWdodFwiLCBcImRcIl07XG4gICAgc3RhdGljIFVQX0tFWSA9IFtcIkFycm93VXBcIiwgXCJ3XCJdXG4gICAgc3RhdGljIERPV05fS0VZID0gW1wiQXJyb3dEb3duXCIsXCJzXCJdXG4gICAgc3RhdGljIFNIT09UX0tFWSA9IFtcIiBcIl07XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuYmluZEtleUhhbmRsZXJzKClcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBiaW5kS2V5SGFuZGxlcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24oZSkge1xuICAgICAgICBjb25zdCBrZXkgPSBlLmtleTtcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5nYW1lLnBsYXllcjtcbiAgICAgICAgY29uc29sZS5sb2coXCJrZXlkb3duOi1cIiArIGtleSArXCItXCIpXG4gICAgICAgIGlmIChHYW1lVmlldy5MRUZUX0tFWS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBwbGF5ZXIucHJlc3NlZEtleS5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICggR2FtZVZpZXcuUklHSFRfS0VZLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIHBsYXllci5wcmVzc2VkS2V5LnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICggR2FtZVZpZXcuVVBfS0VZLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIHBsYXllci5wcmVzc2VkS2V5LnVwID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICggR2FtZVZpZXcuRE9XTl9LRVkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgLy8gcGxheWVyLnByZXNzZWRLZXkuZG93biA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIEdhbWVWaWV3LlNIT09UX0tFWS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBwbGF5ZXIucHJlc3NlZEtleS5zaG9vdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcChlKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGUua2V5O1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmdhbWUucGxheWVyO1xuICAgICAgICBjb25zb2xlLmxvZyhcImtleXVwOi1cIiArIGtleSArXCItXCIpXG4gICAgICAgIGlmIChHYW1lVmlldy5MRUZUX0tFWS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBwbGF5ZXIucHJlc3NlZEtleS5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5ZXIuaW1nID0gcGxheWVyLmlkbGVMZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKCBHYW1lVmlldy5SSUdIVF9LRVkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgcGxheWVyLnByZXNzZWRLZXkucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBsYXllci5pbWcgPSBwbGF5ZXIuaWRsZVJpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKCBHYW1lVmlldy5VUF9LRVkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgcGxheWVyLnByZXNzZWRLZXkudXAgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICggR2FtZVZpZXcuRE9XTl9LRVkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgLy8gcGxheWVyLnByZXNzZWRLZXkuZG93biA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKCBHYW1lVmlldy5TSE9PVF9LRVkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgcGxheWVyLnByZXNzZWRLZXkuc2hvb3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiXSwibmFtZXMiOlsiR2FtZVZpZXciLCJMRUZUX0tFWSIsIlJJR0hUX0tFWSIsIlVQX0tFWSIsIkRPV05fS0VZIiwiU0hPT1RfS0VZIiwiY29uc3RydWN0b3IiLCJnYW1lIiwiY3R4IiwiYmluZEtleUhhbmRsZXJzIiwiYW5pbWF0ZSIsImJpbmQiLCJzdGFydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlS2V5VXAiLCJlIiwia2V5IiwicGxheWVyIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwicHJlc3NlZEtleSIsImxlZnQiLCJyaWdodCIsInVwIiwic2hvb3QiLCJpbWciLCJpZGxlTGVmdCIsImlkbGVSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nclass MovingObject {\n  static GRAVITY = 0.8;\n  constructor(args) {\n    this.img = args.img;\n    this.width = args.width;\n    this.height = args.height;\n    this.pos = args.pos;\n    this.vel = args.vel || [0, 0];\n    this.speed = args.speed || 5;\n    this.health = args.health;\n    this.game = args.game;\n    this.frameX = 0;\n    this.frameY = 0;\n    this.dWidth = this.width * 2;\n    this.dHeight = this.height * 2;\n    this.moving = false;\n  }\n  draw(ctx) {\n    const [dX, dY] = this.pos;\n    const sX = this.frameX * this.width;\n    const sY = this.frameY * this.height;\n    ctx.drawImage(this.img, sX, sY, this.width, this.height, dX, dY, this.dWidth, this.dHeight);\n  }\n  update(ctx) {\n    this.draw(ctx);\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    if (this.pos[1] + this.dHeight + this.vel[1] < this.game.screenHeight) {\n      this.vel[1] += MovingObject.GRAVITY;\n    } else {\n      this.vel[1] = 0;\n    }\n    this.move();\n  }\n  move(timeDelta) {\n    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n      offsetX = this.vel[0] * velocityScale,\n      offsetY = this.vel[1] * velocityScale;\n    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n    if (this.game.isOutOfBounds(this.pos)) {\n      this.remove();\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHb0IsYUFBYTtNQUNyQ0UsT0FBTyxHQUFHLElBQUksQ0FBQ3RCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR29CLGFBQWE7SUFFckMsSUFBSSxDQUFDckIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdzQixPQUFPLEVBQUUsSUFBSSxDQUFDdEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdUIsT0FBTyxDQUFDO0lBRXpELElBQUksSUFBSSxDQUFDbkIsSUFBSSxDQUFDb0IsYUFBYSxDQUFDLElBQUksQ0FBQ3hCLEdBQUcsQ0FBQyxFQUFFO01BQ25DLElBQUksQ0FBQ3lCLE1BQU0sQ0FBQyxDQUFDO0lBQ2pCO0VBQ0o7QUFDSjtBQUVBLCtEQUFlaEMsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1idXN0ZXIvLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzP2MyMDEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTk9STUFMX0ZSQU1FX1RJTUVfREVMVEEgPSAxMDAwIC8gNjA7XG5cbmNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgc3RhdGljIEdSQVZJVFkgPSAwLjg7XG5cbiAgICBjb25zdHJ1Y3RvciAoYXJncykge1xuICAgICAgICB0aGlzLmltZyA9IGFyZ3MuaW1nO1xuICAgICAgICB0aGlzLndpZHRoID0gYXJncy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBhcmdzLmhlaWdodDtcbiAgICAgICAgdGhpcy5wb3MgPSBhcmdzLnBvcztcbiAgICAgICAgdGhpcy52ZWwgPSBhcmdzLnZlbCB8fCBbMCwgMF07XG4gICAgICAgIHRoaXMuc3BlZWQgPSBhcmdzLnNwZWVkIHx8IDU7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gYXJncy5oZWFsdGg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGFyZ3MuZ2FtZTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDBcbiAgICAgICAgdGhpcy5kV2lkdGggPSB0aGlzLndpZHRoICogMjtcbiAgICAgICAgdGhpcy5kSGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiAyO1xuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGNvbnN0IFtkWCwgZFldID0gdGhpcy5wb3M7XG4gICAgICAgIGNvbnN0IHNYID0gdGhpcy5mcmFtZVggKiB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBzWSA9IHRoaXMuIGZyYW1lWSAqIHRoaXMuaGVpZ2h0O1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHNYLCBzWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIGRYLCBkWSwgdGhpcy5kV2lkdGgsIHRoaXMuZEhlaWdodClcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXVxuICAgICAgICB0aGlzLnBvc1sxXSArPSB0aGlzLnZlbFsxXVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gKyB0aGlzLmRIZWlnaHQgKyB0aGlzLnZlbFsxXSA8IHRoaXMuZ2FtZS5zY3JlZW5IZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMudmVsWzFdICs9TW92aW5nT2JqZWN0LkdSQVZJVFk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZlbFsxXSA9IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmUoKVxuICAgIH1cblxuICAgIG1vdmUodGltZURlbHRhKSB7XG4gICAgICAgIGNvbnN0IHZlbG9jaXR5U2NhbGUgPSB0aW1lRGVsdGEgLyBOT1JNQUxfRlJBTUVfVElNRV9ERUxUQSxcbiAgICAgICAgb2Zmc2V0WCA9IHRoaXMudmVsWzBdICogdmVsb2NpdHlTY2FsZSxcbiAgICAgICAgb2Zmc2V0WSA9IHRoaXMudmVsWzFdICogdmVsb2NpdHlTY2FsZTtcblxuICAgICAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIG9mZnNldFgsIHRoaXMucG9zWzFdICsgb2Zmc2V0WV07XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5pc091dE9mQm91bmRzKHRoaXMucG9zKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0OyJdLCJuYW1lcyI6WyJOT1JNQUxfRlJBTUVfVElNRV9ERUxUQSIsIk1vdmluZ09iamVjdCIsIkdSQVZJVFkiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsInBvcyIsInZlbCIsInNwZWVkIiwiaGVhbHRoIiwiZ2FtZSIsImZyYW1lWCIsImZyYW1lWSIsImRXaWR0aCIsImRIZWlnaHQiLCJtb3ZpbmciLCJkcmF3IiwiY3R4IiwiZFgiLCJkWSIsInNYIiwic1kiLCJkcmF3SW1hZ2UiLCJ1cGRhdGUiLCJzY3JlZW5IZWlnaHQiLCJtb3ZlIiwidGltZURlbHRhIiwidmVsb2NpdHlTY2FsZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiaXNPdXRPZkJvdW5kcyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object.js */ \"./src/scripts/moving_object.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/scripts/util.js\");\n\n\nclass Player extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static STARTPOS = [100, 400];\n  constructor(args) {\n    const idleRight = _util_js__WEBPACK_IMPORTED_MODULE_1__.loadSprite(\"src/assets/images/sprites/player-idle-right.png\");\n    const idleLeft = _util_js__WEBPACK_IMPORTED_MODULE_1__.loadSprite(\"src/assets/images/sprites/player-idle-left.png\");\n    const runRight = _util_js__WEBPACK_IMPORTED_MODULE_1__.loadSprite(\"src/assets/images/sprites/player-run-shoot-right.png\");\n    const runLeft = _util_js__WEBPACK_IMPORTED_MODULE_1__.loadSprite(\"src/assets/images/sprites/player-run-shoot-left.png\");\n    args.img = idleRight;\n    args.width = 32;\n    args.height = 38;\n    args.pos = Player.STARTPOS;\n    args.health = 30;\n    super(args);\n    this.idleLeft = idleLeft;\n    this.idleRight = idleRight;\n    this.runLeft = runLeft;\n    this.runRight = runRight;\n    this.hpDisplay = document.querySelector(\"#hp-stat\");\n    this.hpDisplay.innerText = this.health;\n    this.frames = this.img.width / this.width;\n    this.pressedKey = {\n      left: false,\n      right: false,\n      up: false,\n      down: false,\n      shoot: false\n    };\n  }\n  move() {\n    const spd = this.speed;\n    if (this.pressedKey.left) {\n      this.vel[0] = -spd;\n      this.img = this.runLeft;\n    } else if (this.pressedKey.right) {\n      this.vel[0] = spd;\n      this.img = this.runRight;\n    } else {\n      this.vel[0] = 0;\n    }\n    if (this.pressedKey.up) {\n      this.vel[1] = -spd;\n    }\n  }\n  shoot() {\n    console.log(\"Player is shooting a projectile\");\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTZDO0FBQ1o7QUFDakMsTUFBTUUsTUFBTSxTQUFTRix5REFBWSxDQUFDO0VBQzlCLE9BQU9HLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFHNUJDLFdBQVdBLENBQUNDLElBQUksRUFBRTtJQUNkLE1BQU1DLFNBQVMsR0FBR0wsZ0RBQWUsQ0FBQyxpREFBaUQsQ0FBQztJQUNwRixNQUFNTyxRQUFRLEdBQUdQLGdEQUFlLENBQUMsZ0RBQWdELENBQUM7SUFDbEYsTUFBTVEsUUFBUSxHQUFHUixnREFBZSxDQUFDLHNEQUFzRCxDQUFDO0lBQ3hGLE1BQU1TLE9BQU8sR0FBR1QsZ0RBQWUsQ0FBQyxxREFBcUQsQ0FBQztJQUN0RkksSUFBSSxDQUFDTSxHQUFHLEdBQUdMLFNBQVM7SUFDcEJELElBQUksQ0FBQ08sS0FBSyxHQUFHLEVBQUU7SUFDZlAsSUFBSSxDQUFDUSxNQUFNLEdBQUcsRUFBRTtJQUNoQlIsSUFBSSxDQUFDUyxHQUFHLEdBQUdaLE1BQU0sQ0FBQ0MsUUFBUTtJQUMxQkUsSUFBSSxDQUFDVSxNQUFNLEdBQUcsRUFBRTtJQUNoQixLQUFLLENBQUNWLElBQUksQ0FBQztJQUVYLElBQUksQ0FBQ0csUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0YsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQ0ksT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ08sU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDbkQsSUFBSSxDQUFDRixTQUFTLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNKLE1BQU07SUFDdEMsSUFBSSxDQUFDSyxNQUFNLEdBQUcsSUFBSSxDQUFDVCxHQUFHLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUs7SUFDekMsSUFBSSxDQUFDUyxVQUFVLEdBQUc7TUFDZEMsSUFBSSxFQUFFLEtBQUs7TUFDWEMsS0FBSyxFQUFFLEtBQUs7TUFDWkMsRUFBRSxFQUFFLEtBQUs7TUFDVEMsSUFBSSxFQUFFLEtBQUs7TUFDWEMsS0FBSyxFQUFFO0lBQ1gsQ0FBQztFQUNMO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNILE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNDLEtBQUs7SUFDdEIsSUFBSSxJQUFJLENBQUNSLFVBQVUsQ0FBQ0MsSUFBSSxFQUFFO01BQ3RCLElBQUksQ0FBQ1EsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNGLEdBQUc7TUFDbEIsSUFBSSxDQUFDakIsR0FBRyxHQUFHLElBQUksQ0FBQ0QsT0FBTztJQUMzQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNXLFVBQVUsQ0FBQ0UsS0FBSyxFQUFFO01BQzlCLElBQUksQ0FBQ08sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHRixHQUFHO01BQ2pCLElBQUksQ0FBQ2pCLEdBQUcsR0FBRyxJQUFJLENBQUNGLFFBQVE7SUFDNUIsQ0FBQyxNQUFNO01BQUMsSUFBSSxDQUFDcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFBQTtJQUV2QixJQUFJLElBQUksQ0FBQ1QsVUFBVSxDQUFDRyxFQUFFLEVBQUM7TUFDbkIsSUFBSSxDQUFDTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0YsR0FBRztJQUN0QjtFQUNKO0VBRUFGLEtBQUtBLENBQUEsRUFBRztJQUNKSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztFQUNsRDtBQUVKO0FBRUEsK0RBQWU5QixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWJ1c3Rlci8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdC5qc1wiXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuL3V0aWwuanNcIlxuY2xhc3MgUGxheWVyIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBzdGF0aWMgU1RBUlRQT1MgPSBbMTAwLCA0MDBdXG5cblxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgaWRsZVJpZ2h0ID0gVXRpbC5sb2FkU3ByaXRlKFwic3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy9wbGF5ZXItaWRsZS1yaWdodC5wbmdcIik7XG4gICAgICAgIGNvbnN0IGlkbGVMZWZ0ID0gVXRpbC5sb2FkU3ByaXRlKFwic3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy9wbGF5ZXItaWRsZS1sZWZ0LnBuZ1wiKTtcbiAgICAgICAgY29uc3QgcnVuUmlnaHQgPSBVdGlsLmxvYWRTcHJpdGUoXCJzcmMvYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3BsYXllci1ydW4tc2hvb3QtcmlnaHQucG5nXCIpO1xuICAgICAgICBjb25zdCBydW5MZWZ0ID0gVXRpbC5sb2FkU3ByaXRlKFwic3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy9wbGF5ZXItcnVuLXNob290LWxlZnQucG5nXCIpO1xuICAgICAgICBhcmdzLmltZyA9IGlkbGVSaWdodDtcbiAgICAgICAgYXJncy53aWR0aCA9IDMyO1xuICAgICAgICBhcmdzLmhlaWdodCA9IDM4O1xuICAgICAgICBhcmdzLnBvcyA9IFBsYXllci5TVEFSVFBPUztcbiAgICAgICAgYXJncy5oZWFsdGggPSAzMDtcbiAgICAgICAgc3VwZXIoYXJncyk7XG5cbiAgICAgICAgdGhpcy5pZGxlTGVmdCA9IGlkbGVMZWZ0O1xuICAgICAgICB0aGlzLmlkbGVSaWdodCA9IGlkbGVSaWdodDtcbiAgICAgICAgdGhpcy5ydW5MZWZ0ID0gcnVuTGVmdDtcbiAgICAgICAgdGhpcy5ydW5SaWdodCA9IHJ1blJpZ2h0O1xuICAgICAgICB0aGlzLmhwRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHAtc3RhdFwiKTtcbiAgICAgICAgdGhpcy5ocERpc3BsYXkuaW5uZXJUZXh0ID0gdGhpcy5oZWFsdGg7XG4gICAgICAgIHRoaXMuZnJhbWVzID0gdGhpcy5pbWcud2lkdGggLyB0aGlzLndpZHRoXG4gICAgICAgIHRoaXMucHJlc3NlZEtleSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgdXA6IGZhbHNlLFxuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICBzaG9vdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBjb25zdCBzcGQgPSB0aGlzLnNwZWVkXG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRLZXkubGVmdCkge1xuICAgICAgICAgICAgdGhpcy52ZWxbMF0gPSAtc3BkO1xuICAgICAgICAgICAgdGhpcy5pbWcgPSB0aGlzLnJ1bkxlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmVzc2VkS2V5LnJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnZlbFswXSA9IHNwZDtcbiAgICAgICAgICAgIHRoaXMuaW1nID0gdGhpcy5ydW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHt0aGlzLnZlbFswXSA9IDB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZEtleS51cCl7XG4gICAgICAgICAgICB0aGlzLnZlbFsxXSA9IC1zcGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgaXMgc2hvb3RpbmcgYSBwcm9qZWN0aWxlXCIpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiVXRpbCIsIlBsYXllciIsIlNUQVJUUE9TIiwiY29uc3RydWN0b3IiLCJhcmdzIiwiaWRsZVJpZ2h0IiwibG9hZFNwcml0ZSIsImlkbGVMZWZ0IiwicnVuUmlnaHQiLCJydW5MZWZ0IiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJwb3MiLCJoZWFsdGgiLCJocERpc3BsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJmcmFtZXMiLCJwcmVzc2VkS2V5IiwibGVmdCIsInJpZ2h0IiwidXAiLCJkb3duIiwic2hvb3QiLCJtb3ZlIiwic3BkIiwic3BlZWQiLCJ2ZWwiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadSprite\": function() { return /* binding */ loadSprite; }\n/* harmony export */ });\nfunction loadSprite(src) {\n  const img = new Image();\n  img.src = src;\n  return img;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxVQUFVQSxDQUFDQyxHQUFHLEVBQUU7RUFDNUIsTUFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0VBQ3ZCRCxHQUFHLENBQUNELEdBQUcsR0FBR0EsR0FBRztFQUNiLE9BQU9DLEdBQUc7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1idXN0ZXIvLi9zcmMvc2NyaXB0cy91dGlsLmpzPzY5NGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRTcHJpdGUoc3JjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIHJldHVybiBpbWc7XG59Il0sIm5hbWVzIjpbImxvYWRTcHJpdGUiLCJzcmMiLCJpbWciLCJJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYnVzdGVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;