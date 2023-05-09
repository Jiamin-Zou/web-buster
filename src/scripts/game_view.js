let basetime = Date.now();
import Player from "./player.js";
const FPS = 1000/30;

class GameView {
    static LEFT_KEY = ["ArrowLeft", "a"];
    static RIGHT_KEY = ["ArrowRight", "d"];
    static UP_KEY = ["ArrowUp", "w"]
    static DOWN_KEY = ["ArrowDown","s"]
    static SHOOT_KEY = [" "]; //space key

    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
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
            // basetime = now;
            this.game.step();
            this.game.draw(this.ctx);
        // }
        requestAnimationFrame(this.animate, FPS);
        
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
                player.pressedKey.left = true;
                break;
            case "ArrowDown":
                break;
            case "ArrowRight":
                player.dir = "right";
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
                player.pressedKey.left = false;
                break;
            case "ArrowDown":
                break;
            case "ArrowRight":
                // player.dir = "right";
                player.pressedKey.right = false;
                break;

        }
    }

}

export default GameView;