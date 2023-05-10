import Game from "./game.js";
import GameView from "./game_view.js";

class MenuHandler {
    constructor() {
        // this.menuBtn = document.querySelector("#open-menu")
        this.startMenu = document.querySelector("#game-menu");
        this.canvas = document.querySelector("#canvas");
        this.modal = document.querySelector("#game-menu");
        this.modal.showModal()
        this.startGameBtn = document.querySelector("#game-start-btn");
        this.difficultySelector = document.querySelector(".game-diff-ctn");
        this.startGame = this.startGame.bind(this);
        this.bindListeners();
    }

    bindListeners() {
        // this.menuBtn.addEventListener("click", ()=> {
        //     this.modal.showModal();
        // })
        this.startGameBtn.addEventListener("click", ()=> {
            this.modal.close();
            this.startGame();
        })
        this.difficultySelector.addEventListener("click", (e)=> {
            const selected = document.querySelector(".difficulty-selected")
            if (selected !== e.target) {
                selected.className = "diff-selections-lv";
                e.target.classList.add("difficulty-selected")
            }
        })
    }

    startGame() {
        const difficulty = document.querySelector(".difficulty-selected").innerText;
        const ctx = this.canvas.getContext("2d");
        
        const game = new Game(this.canvas, difficulty);
        const gameView = new GameView(game, ctx);
        gameView.start()
    }


}
export default MenuHandler;