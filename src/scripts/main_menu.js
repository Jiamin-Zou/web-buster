import Game from "./game.js";
import GameView from "./game_view.js";

class MenuHandler {
    constructor() {
        this.game, this.gameView;

        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d")

        this.modal = document.querySelector("#gameModal");
        this.closeModal = document.querySelector(".close-game-menu")
        this.modal.style.display = "flex";
        this.openModal = document.querySelector(".fa-circle-info")
        this.difficultySelector = document.querySelector(".game-diff-levels");
        
        this.bgm = document.getElementById("gameBGM");
        this.audioToggle = document.querySelector(".fa-play")

        this.startGameBtn = document.querySelector("#game-start-btn");
        this.startGame = this.startGame.bind(this);
        this.bindEventListeners();
    }

    bindEventListeners() {
        this.startGameBtn.addEventListener("click", ()=> {
            this.modal.style.display = "none";
                this.startGame()
        })

        
        this.closeModal.addEventListener("click", ()=> {
            this.modal.style.display = "none";
        })



        this.difficultySelector.addEventListener("click", (e)=> {
            if (e.target.className === "diff-selections-lv") {
                const selected = document.querySelector(".difficulty-selected")
                if (selected !== e.target) {
                    selected.className = "diff-selections-lv";
                    e.target.classList.add("difficulty-selected")
                }
            }
        })
        
        this.audioToggle.addEventListener("click", ()=> {
            let audioControl = document.querySelector(".audio-display")
            if(this.bgm.paused) {
                this.bgm.play();
                audioControl.innerText = "Pause"
            } else {
                this.bgm.pause();
                audioControl.innerText = "Play"
            }
        })

        this.openModal.addEventListener("click", () => {
            this.modal.style.display = "flex";
        })
        
    }

    startGame() {
        const difficulty = document.querySelector(".difficulty-selected").innerText;
        this.modal.style.display = "none";
        if (this.startGameBtn.innerText === "Start Game") {
            this.game = new Game(this.canvas, difficulty);
            this.gameView = new GameView(this.game, this.ctx);
            this.gameView.start();
        } else {
            this.gameView.restart(difficulty);
        }
    }


}
export default MenuHandler;