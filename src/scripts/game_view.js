let basetime = Date.now();
import Player from "./player.js";
const FPS = 1000/45;
let reqID;

class GameView {
    static LEFT_KEY = ["ArrowLeft", "a"];
    static RIGHT_KEY = ["ArrowRight", "d"];
    static UP_KEY = ["ArrowUp", "w"]
    static DOWN_KEY = ["ArrowDown","s"]
    static SHOOT_KEY = [" "]; //space key

    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.hpDisplay = document.querySelector("#hp-stat");
        this.hpDisplay.innerText = this.game.player.health;
        this.hpBar = document.querySelector("#player-hp-bar");
        this.enemyCountDisplay = document.querySelector("#enemy-counts")
        this.enemyCountDisplay.innerText = this.game.enemies.length;
        this.difficultyDisplay = document.querySelector("#game-difficulty");
        this.difficultyDisplay.innerText = this.game.difficulty
        // debugger
        this.bindKeyHandlers()
        this.animate = this.animate.bind(this)
    }

    start() {
        this.animate();
    }

    animate() {
        // const now = Date.now();
        // const check = now - basetime;
        // if (check / FPS >= 1) {
        //     basetime = now;
            this.game.step();
            this.updateHealthDisplay();
            this.updateEnemyCount();
            this.game.draw(this.ctx);
        // }

            if (this.game.isGameEnd) this.executeGameEnd();
        reqID = requestAnimationFrame(this.animate, FPS);
    }

    bindKeyHandlers() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        document.addEventListener("keyup", this.handleKeyUp.bind(this))
    }

    unbindKeyHandlers() {
        document.removeEventListener("keydown", this.handleKeyDown.bind(this));
        document.removeEventListener("keyup", this.handleKeyUp.bind(this));
    }
      

    handleKeyDown(e) {
        e.preventDefault()
        const key = e.key;
        const player = this.game.player;

        switch (key) {
            case "ArrowLeft":
                player.dir = "left";
                player.img = player.runLeft;
                player.pressedKey.left = true;
                break;
            case "ArrowDown":
                break;
            case "ArrowRight":
                player.dir = "right";
                player.img = player.runRight;
                player.pressedKey.right = true;
                break;
            case "ArrowUp":
                const upSpd = 10;
                if(player.pos[1] + upSpd >= Player.UP_BOUND && !player.inJump){
                    player.inJump = true;
                    player.vel[1] -= 15;
                }
                break;
            case " ":
                player.shoot();
                break;
        }
    }

    handleKeyUp(e) {
        e.preventDefault()
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
                switch (player.dir) {
                    case "left":
                        player.img = player.idleLeft;
                        break;
                    case "right":
                        player.img = player.idleRight;
                        break;
                }
                break;
            case " ":
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
                this.hpBar.appendChild(hp)
            }
        } else if (this.hpBar.children.length > health) {
            for (let i = health; i < this.hpBar.children.length; i++) {
                const lc = this.hpBar.lastChild;
                if (lc) this.hpBar.removeChild(this.hpBar.lastChild);
                
            }
        }
    }

    updateEnemyCount() {
        const count = this.game.enemies.length;
        this.enemyCountDisplay.innerHTML = count;
    }

    executeGameEnd () {
        cancelAnimationFrame(reqID);
        this.unbindKeyHandlers();
        const btn = document.querySelector("#game-start-btn");
        const msg = document.querySelector("#welcome-msg");
        const menu = document.querySelector("#game-menu");
        msg.innerText = "Hope you enjoyed playing. Another round?"
        btn.innerText = "Restart Game"
        menu.showModal();
    }

}

export default GameView;