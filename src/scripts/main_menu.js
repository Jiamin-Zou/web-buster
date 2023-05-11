import Game from "./game.js";
import GameView from "./game_view.js";

class MenuHandler {
    constructor() {
        this.game, this.gameView;
        this.startMenu = document.querySelector("#game-menu");
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d")
        this.modal = document.querySelector("#gameModal");
        this.modal.style.display = "flex";
        this.startGameBtn = document.querySelector("#game-start-btn");
        this.difficultySelector = document.querySelector(".game-diff-ctn");
        this.startGame = this.startGame.bind(this);
        this.bgm = document.getElementById("gameBGM");
        this.audioToggle = document.querySelector(".instructions")
        this.bindEventListeners();
    }

    bindEventListeners() {
        this.startGameBtn.addEventListener("click", ()=> {
            this.modal.style.display = "none";
            // debugger
                this.startGame()
        })

        this.difficultySelector.addEventListener("click", (e)=> {
            const selected = document.querySelector(".difficulty-selected")
            if (selected !== e.target) {
                selected.className = "diff-selections-lv";
                e.target.classList.add("difficulty-selected")
            }
        })
        
        this.audioToggle.addEventListener("click", (e)=> {
            if(this.bgm .paused) {
                this.bgm.play();
            } else {
                this.bgm.pause();
            }
        })
        
    }

    startGame() {
        const difficulty = document.querySelector(".difficulty-selected").innerText;
        this.modal.style.display = "none";
        if (this.startGameBtn.innerText === "Start Game") {
            // debugger
            this.game = new Game(this.canvas, difficulty);
            this.gameView = new GameView(this.game, this.ctx);
            this.gameView.start();
        } else {
            // debugger
            // debugger
            // this.game = new Game(this.canvas, difficulty);
            // this.gameView = new GameView(this.game, this.ctx);
            // this.gameView.start();
            this.gameView.restart(difficulty);
        }
    }


}
export default MenuHandler;