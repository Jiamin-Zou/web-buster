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
        this.createPlatforms();
        
    }

    addPlayer() {
        const player = new Player({game: this})
        return player;
    }

    createFloor(img, width, height) {
        let x = 0
        const y = this.screenHeight - 80;
        while (x < 10000) {
            const pos = [x, y];
            const args = {
                img: img,
                pos: pos,
                width: width,
                height: height,
                scale: 1,
                type: "floor",
            }
            const floor = new Platform(args);
            this.platforms.push(floor);
            x += width;
        }
    }

    createPlatforms() {
        const img = Util.loadSprite("src/assets/images/sprites/floor_tile.png");
        const width = 500;
        const height = 80;
        this.createFloor(img, width, height);

        const scale = 0.5;

        Util.PLATFORMS_POS.forEach((pos) => {
            const args = {
                img:img,
                pos: pos,
                width: width,
                height: height,
            }
            const platform = new Platform (args)
            this.platforms.push(platform)
        })
    }

    step() {
        this.player.update();
        this.checkOnPlaform();
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
        this.drawPlatforms(ctx);
        this.player.draw(ctx);
    }

    drawPlatforms(ctx) {
        this.platforms.forEach( (platform) => {
            platform.draw(ctx);
        })
    }

    checkOnPlaform() {
        this.platforms.forEach( (platform) => {
            if (Util.isOnPlatform(this.player, platform)) {
                this.player.vel[1] = 0;
            }
        })
    }
}

export default Game;