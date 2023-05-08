import Player from "./player.js";
import Enemy from "./enemy.js";

class Game {
    static GRAVITY = 0.5;
    constructor (canvas) {
        this.screenWidth = canvas.width;
        this.screenHeight = canvas.height;
        this.player = this.addPlayer();
        this.enemies = [];
        this.projectiles = [];
        
    }

    addPlayer() {
        const player = new Player({game: this})
        return player;
    }
    draw(ctx) {
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
        this.player.update(ctx);
    }
}

export default Game;