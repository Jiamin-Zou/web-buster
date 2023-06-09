import Game from "./game.js";
import GameView from "./game_view.js";

class MenuHandler {
  constructor() {
    this.game, this.gameView;

    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");

    this.modal = document.querySelector("#gameModal");
    this.closeModal = document.querySelector(".close-game-menu");
    this.modal.style.display = "flex";
    this.openModal = document.querySelector(".fa-circle-info");
    this.difficultySelector = document.querySelector(".game-diff-levels");
    this.gameOverScreen = document.querySelector("#game-over-screen");
    this.gameOverMenuBtn = document.querySelector("#game-over-to-menu");

    this.bgm = document.getElementById("gameBGM");
    this.audioToggle = document.querySelector(".fa-music");

    this.toUnmute = document.querySelector(".fa-volume-xmark");
    this.toMute = document.querySelector(".fa-volume-high");
    this.muteText = document.querySelector(".mute-display");

    this.startGameBtn = document.querySelector("#game-start-btn");
    this.startGame = this.startGame.bind(this);
    this.handleBGMPlay = this.handleBGMPlay.bind(this);
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.startGameBtn.addEventListener("click", () => {
      this.modal.style.display = "none";
      this.gameOverScreen.style.display = "none";
      this.startGame();
    });

    this.closeModal.addEventListener("click", () => {
      this.modal.style.display = "none";
    });

    this.difficultySelector.addEventListener("click", (e) => {
      if (e.target.className === "diff-selections-lv") {
        const selected = document.querySelector(".difficulty-selected");
        if (selected !== e.target) {
          selected.className = "diff-selections-lv";
          e.target.classList.add("difficulty-selected");
        }
      }
    });

    this.audioToggle.addEventListener("click", this.handleBGMPlay);

    this.toUnmute.addEventListener("click", () => {
      this.muteText.innerText = "Mute";
      this.toUnmute.style.display = "none";
      this.toMute.style.display = "block";
      let audioControl = document.querySelector(".audio-display");
      this.bgm.play();
      this.bgm.volume = 0.5;
      audioControl.innerText = "Pause BGM";
    });
    this.toMute.addEventListener("click", () => {
      this.muteText.innerText = "Unmute";
      this.toMute.style.display = "none";
      this.toUnmute.style.display = "block";
      let audioControl = document.querySelector(".audio-display");
      this.bgm.pause();
      this.bgm.volume = 0;
      audioControl.innerText = "Play BGM";
    });

    this.openModal.addEventListener("click", () => {
      this.modal.style.display = "flex";
    });

    this.gameOverMenuBtn.addEventListener("click", () => {
      this.modal.style.display = "flex";
    });
  }

  handleBGMPlay() {
    let audioControl = document.querySelector(".audio-display");
    if (this.bgm.paused) {
      if (this.muteText.innerText === "Unmute") {
        this.bgm.volume = 0.0;
      } else this.bgm.volume = 0.5;
      this.bgm.play();
      audioControl.innerText = "Pause BGM";
    } else {
      this.bgm.pause();
      audioControl.innerText = "Play BGM";
    }
  }
  startGame() {
    let difficulty = document.querySelector(".difficulty-selected").innerText;
    difficulty = parseInt(difficulty);
    this.modal.style.display = "none";
    if (this.startGameBtn.innerText === "Start Game") {
      this.startGameBtn.innerText = "Restart Game";
      this.game = new Game(this.canvas, difficulty);
      this.gameView = new GameView(this.game, this.ctx);
      this.gameView.start();
    } else {
      this.gameView.restart(difficulty);
    }
  }
}
export default MenuHandler;
