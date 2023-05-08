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
        this.backgrounds = [];
        this.enemies = [];
        this.projectiles = [];
        this.platforms = []
        this.player = this.addPlayer();
        this.createBackground();
        this.createPlatforms();
        this.createEnemies()
        
    }

    addPlayer() {
        const player = new Player({game: this})
        return player;
    }

    createBackground() {
        const bgImg = Util.loadSprite("src/assets/images/background/background.png");
        const bgArgs = {
            img: bgImg,
            pos: [0, 0],
            width: 10000,
            height: 600
        }
        const bg = new Background(bgArgs);
        this.backgrounds.push(bg);
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
                type: "floor",
            }
            const floor = new Platform(args);
            this.platforms.push(floor);
            x += width;
        }
    }

    createPlatforms() {
        const floor = Util.loadSprite("src/assets/images/sprites/floor_tile.png");
        const width = 500;
        const height = 80;
        this.createFloor(floor, width, height);


        const plat = Util.loadSprite("src/assets/images/sprites/platform_1_224_31.png")

        Util.PLATFORMS_POS.forEach((pos) => {
            const args = {
                img: plat,
                pos: pos,
                width: 224,
                height: 31,
            }
            const platform = new Platform (args)
            this.platforms.push(platform)
        })
    }

    createEnemies() {

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
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
        this.drawBackground(ctx)
        this.drawPlatforms(ctx);
        this.player.draw(ctx);
    }

    drawPlatforms(ctx) {
        this.platforms.forEach( (platform) => {
            platform.draw(ctx);
        })
    }

    drawBackground(ctx) {
        this.backgrounds.forEach( (background) => {
            background.draw(ctx);
        })
    }

    checkOnPlatform() {
        let check = false;
        this.platforms.forEach( (platform) => {
            if (Util.isOnPlatform(this.player, platform)) {
                // this.player.vel[1] = 0;
                check = true;
            }
        })

        return check;
    }

    inUpperBound(obj) {
        const [x, y] = obj.pos;
        return (x <= 10);
    }
}

export default Game;