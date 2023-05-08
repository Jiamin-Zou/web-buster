import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";

window.addEventListener('load', () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 500;

    const game = new Game(canvas);
    const gameView = new GameView(game, ctx);

    gameView.start()

})
