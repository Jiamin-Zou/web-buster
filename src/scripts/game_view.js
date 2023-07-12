import Player from "./player.js";
let reqID;

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.hpDisplay = document.querySelector("#hp-stat");
    this.hpDisplay.innerText = this.game.player.health;
    this.hpBar = document.querySelector("#player-hp-bar");
    this.enemyCountDisplay = document.querySelector("#enemy-counts");
    this.enemyCountDisplay.innerText = this.game.enemies.length;
    this.difficultyDisplay = document.querySelector("#game-difficulty");
    this.difficultyDisplay.innerText = this.game.difficulty;
    this.scoreDisplay = document.querySelector("#score-count");
    this.timeDisplay = document.querySelector("#game-time");
    this.animate = this.animate.bind(this);
    this.start = this.start.bind(this);
    this.bindKeyHandlers();
    this.lastFrameTime = 0;
    this.frameDuration = 1000 / 60;
    this.scoreTime = 0;
    this.scoreTimeInc = 150;
    this.scoreInc = this.timeScore();
    this.gameTime = 0;
    this.endStat = {};
  }

  timeScore() {
    let increment = 0;
    switch (this.game.difficulty) {
      case 1:
        return (increment = 20);
      case 2:
        return (increment = 50);
      case 3:
        return (increment = 100);
      default:
        return (increment = 20);
    }
  }

  start() {
    const timeNow = performance.now();
    this.lastFrameTime = timeNow;
    this.scoreTime = timeNow;
    this.gameTime = timeNow;
    reqID = requestAnimationFrame(this.animate);
  }

  restart(difficulty) {
    cancelAnimationFrame(reqID);
    this.game.reset(difficulty, this.ctx);
    this.difficultyDisplay.innerText = this.game.difficulty;
    this.scoreInc = this.timeScore();
    this.bindKeyHandlers();
    const timeNow = performance.now();
    this.lastFrameTime = timeNow;
    this.scoreTime = timeNow;
    this.gameTime = timeNow;
    reqID = requestAnimationFrame(this.animate);
  }

  executeGameEnd() {
    const btn = document.querySelector("#game-start-btn");
    const msg = document.querySelector("#welcome-msg");
    const menu = document.querySelector("#gameModal");
    msg.innerText = "Hope you enjoyed playing. Another round?";
    btn.innerText = "Restart Game";
    // menu.style.display = "flex";
    this.setGameOverStat();
    const gameOverScreen = document.querySelector("#game-over-screen");
    gameOverScreen.style.display = "flex";
  }

  setGameOverStat() {
    const stats = this.gameStat;
    const endCount = document.querySelector("#game-over-enemy-count");
    const endTime = document.querySelector("#game-over-time");
    const endScore = document.querySelector("#game-over-score");
    endCount.innerText = stats.killCount;
    const runTimeSeconds = Math.floor(stats.runTime); // Get the integer part of the runTime
    const minutes = Math.floor(runTimeSeconds / 60); // Calculate the minutes
    const seconds = runTimeSeconds % 60; // Calculate the seconds

    endTime.innerText = `${minutes} m : ${seconds} s`;
    endScore.innerText = `${stats.score} Pt`;
  }

  animate(currentTime) {
    if (this.game.gameStop) {
      this.executeGameEnd();
      return;
    }
    const elapsed = currentTime - this.lastFrameTime;

    // if (elapsed >= this.frameDuration) {
    //   this.lastFrameTime = performance.now();
    //   this.game.draw(this.ctx);
    //   this.game.step();
    //   this.updateHealthDisplay();
    //   this.updateEnemyCount();
    // }

    this.game.draw(this.ctx);
    if (!this.game.isGameEnd) {
      this.updateGameTime(currentTime);
      this.updateScore(currentTime);
      this.game.step(elapsed);
      this.updateHealthDisplay();
      this.updateEnemyCount();
      this.game.checkGameEnd();
      if (this.game.isGameEnd) {
        this.gameStat = this.getGameEndStat(currentTime);
        this.unbindKeyHandlers();
      }
    }
    this.lastFrameTime = performance.now();

    reqID = requestAnimationFrame(this.animate);
  }

  bindKeyHandlers() {
    this.boundHandleKeyDown = this.handleKeyDown.bind(this);
    this.boundHandleKeyUp = this.handleKeyUp.bind(this);
    document.addEventListener("keydown", this.boundHandleKeyDown);
    document.addEventListener("keyup", this.boundHandleKeyUp);
  }

  unbindKeyHandlers() {
    document.removeEventListener("keydown", this.boundHandleKeyDown);
    document.removeEventListener("keyup", this.boundHandleKeyUp);
  }

  handleKeyDown(e) {
    e.preventDefault();
    const key = e.key;
    const player = this.game.player;

    switch (key) {
      case "ArrowLeft":
        // player.dir = "left";
        // player.img = player.runLeft;
        player.pressedKey.left = true;
        break;
      case "ArrowDown":
        break;
      case "ArrowRight":
        // player.dir = "right";
        // player.img = player.runRight;
        player.pressedKey.right = true;
        break;
      case "ArrowUp":
        const upSpd = 27;
        if (player.pos[1] + upSpd >= Player.UP_BOUND && !player.inJump) {
          player.inJump = true;
          player.vel[1] -= upSpd;
        }
        break;
      case " ":
        player.pressedKey.shoot = true;
        player.shoot();
        break;
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    const key = e.key;
    const player = this.game.player;

    switch (key) {
      case "ArrowLeft":
        // player.dir = "left";
        player.img = player.idleLeft;
        player.pressedKey.left = false;
        break;
      case "ArrowDown":
        break;
      case "ArrowRight":
        // player.dir = "right";
        player.img = player.idleRight;
        player.pressedKey.right = false;
        break;
      case "ArrowUp":
        // switch (player.dir) {
        //     case "left":
        //         player.img = player.idleLeft;
        //         break;
        //     case "right":
        //         player.img = player.idleRight;
        //         break;
        // }
        break;
      case " ":
        player.pressedKey.shoot = false;
        switch (player.dir) {
          case "left":
            player.img = player.idleLeft;
            break;
          case "right":
            player.img = player.idleRight;
            break;
        }
        break;
    }
  }

  updateHealthDisplay() {
    const health = this.game.player.health;
    this.hpDisplay.innerText = health;
    const hp = document.createElement("li");

    if (this.hpBar.children.length < health) {
      for (let i = hp.children.length; i < health; i++) {
        this.hpBar.appendChild(hp);
      }
    } else if (this.hpBar.children.length > health) {
      for (let i = health; i < this.hpBar.children.length; i++) {
        const lc = this.hpBar.lastChild;
        if (lc) this.hpBar.removeChild(this.hpBar.lastChild);
      }
    }
  }

  updateEnemyCount() {
    this.enemyCountDisplay.innerHTML = this.game.killCount;
  }

  updateScore(currentTime) {
    const elapsed = currentTime - this.scoreTime;
    const runTime = (currentTime - this.gameTime) / 1000;
    const killCountFactor = Math.floor(this.game.killCount / 5) + 1;
    let increment = this.scoreInc;
    // console.log(runTime);
    console.log(killCountFactor)
    if (elapsed > this.scoreTimeInc) {
      if (runTime / 1000 >= 300) {
        increment *= 2;
      } else if (runTime >= 120) {
        increment *= 1.4;
      } else if (runTime >= 60) {
        increment *= 1.2;
      } else if (runTime >= 30) {
        increment *= 1.1;
      }
      this.game.score += increment * killCountFactor + killCountFactor;
      this.scoreTime = performance.now();
    }
    this.scoreDisplay.innerText = this.game.score;
  }

  updateGameTime(currentTime) {
    const elapsed = currentTime - this.gameTime;
    const formattedTime = (elapsed / 1000).toFixed(3);
    this.timeDisplay.innerText = formattedTime;
  }

  getGameEndStat(currentTime) {
    const elapsed = currentTime - this.gameTime;
    const gameStat = {
      runTime: elapsed / 1000,
      score: this.game.score,
      killCount: this.game.killCount,
    };
    return gameStat;
  }
}

export default GameView;
