import Background from "./background.js";
import Platform from "./platform.js"
import Player from "./player.js";
import Enemy from "./enemy.js";
import * as Util from "./util.js"
// dims width x height
// player: original(32 x 38) * 2 = 64 x 76
// background: 10,000 x 600
// canvas: 800 x 600
// floor: 500 x 80
// platform = floor * 0.5 = 250 x 40

class Game {
    static GRAVITY = 3;
    constructor (canvas) {
        this.screenWidth = canvas.width;
        this.screenHeight = canvas.height;
        this.background = new Background()
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

    platformScroll(dir) {
        // dir = player moving direction
        //everything should move the opposite direction of player movement
        let spd = 0
        switch (dir) {
            case "left":
                spd = this.player.speed;
                break;
            case "right":
                spd = -this.player.speed;
                break;
        }
        this.platforms.forEach((platform) => {
            platform.pos[0] += spd
        })
    }

    step() {
        this.player.update();
        this.checkOnPlaform();
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
        this.background.draw(ctx)
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