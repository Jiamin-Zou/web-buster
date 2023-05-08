import Platform from "./platform.js"
import Player from "./player.js";
import Enemy from "./enemy.js";
import * as Util from "./util.js"

class Game {
    static GRAVITY = 0.5;
    constructor (canvas) {
        this.screenWidth = canvas.width;
        this.screenHeight = canvas.height;
        this.player = this.addPlayer();
        this.enemies = [];
        this.projectiles = [];
        this.platforms = []
        this.createFloor()
        
    }

    addPlayer() {
        const player = new Player({game: this})
        return player;
    }

    createFloor(){
        const img = Util.loadSprite("src/assets/images/sprites/floor_tile.png");
        const width = 500;
        const height = 80
        // debugger
        let x = 0
        const y = this.screenHeight - 80;
        while (x < 10000) {
            const pos = [x, y];
            const args = {
                img: img,
                pos: pos,
                width: width,
                height: height,
                type: "floor",
            }
            const platform = new Platform(args);
            this.platforms.push(platform);
            x += width;
        }
    }

    step(delta) {
        this.player.update(ctx)

    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
        this.drawPlatforms(ctx);
        this.player.update(ctx);
    }

    drawPlatforms(ctx) {
        this.platforms.forEach((platform) => {
            platform.draw(ctx);
        })
    }
}

export default Game;