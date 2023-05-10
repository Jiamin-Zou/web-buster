import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";
import MenuHandler from "./scripts/main_menu.js";

window.addEventListener('load', () => {
    const canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 600;
    // const ctx = canvas.getContext("2d");

    // const game = new Game(canvas);
    // const gameView = new GameView(game, ctx);

    // gameView.start()
    const handler = new MenuHandler();

})
