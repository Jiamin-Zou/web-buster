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
        this.soundToggle = document.querySelector(".sound-control");
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

        this.soundToggle.addEventListener("click", (e) => {
            const playing = document.querySelector(".bgm-on");
            const paused = document.querySelector(".bgm-off");
            console.log(playing);
            console.log(paused);

            // debugger
            if (playing.style.display === "none") {
                paused.style.display = "none";
                playing.style.display = "block";
            } else if (paused.style.display === "none") {
                playing.style.display = "none";
                paused.style.display = "block";
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