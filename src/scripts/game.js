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
    constructor (canvas) {
        this.screenWidth = canvas.width;
        this.screenHeight = canvas.height;
        this.backgrounds = [];
        this.enemies = [];
        this.projectiles = [];
        this.platforms = [];
        this.scrollOffset = 0;
        this.player = this.addPlayer();
        this.createBackground();
        this.createPlatforms();
        this.createEnemies();
        
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
        Util.ENEMY_POS.forEach((pos) => {
            const args = {
                pos: pos,
                game: this,
            }
            let enemyType = 1;
            const enemy = new Enemy(args, enemyType)
            this.enemies.push(enemy);
        })

    }

    Scroll(dir) {
        // dir = player moving direction
        //everything should move the opposite direction of player movement
        let spd = 0;

        switch (dir) {
            case "left":
                spd = this.player.speed;
                break;
            case "right":
                spd = -this.player.speed;
                break;
        }

        // this.scrollOffset -= spd;

        this.backgrounds.forEach((background) => {
            background.pos[0] += spd * 0.66;
        });

        this.platforms.forEach((platform) => {
            platform.pos[0] += spd;
        });

        this.enemies.forEach((enemy) => {
            enemy.pos[0] += spd;
        });
        this.projectiles.forEach((prj) => {
            prj.pos[0] += spd;
        })
    }

    step() {
        this.updateAllMovingUpjects()
        this.checkOnPlatform();
        this.checkCollision();
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
        this.drawBackground(ctx)
        this.drawPlatforms(ctx);
        this.drawAllMovingObjects(ctx)
    }

    allMovingObjects() {
        return this.enemies.concat(this.projectiles).concat([this.player]);
    }

    drawAllMovingObjects(ctx){
        this.allMovingObjects().forEach((obj) =>{
            if(obj) obj.draw(ctx);
        })
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

    updateAllMovingUpjects() {
        this.allMovingObjects().forEach((obj) =>{
            obj.update()
        })
    }

    checkOnPlatform() {
        this.platforms.forEach( (platform) => {
            this.allMovingObjects().forEach((obj) => {
                if (Util.isOnPlatform(obj, platform)) {
                    if(obj === this.player) {
                        this.player.inJump = false;
                    }
                    obj.vel[1] = 0;
                }
            })
        })

        // return check;
    }

    checkCollision() {
        this.projectiles.forEach((prj) => {
            this.enemies.concat([this.player]).forEach((obj) => {
                if (Util.projectileCollison(prj, obj)) {
                    prj.health--;
                    if(!obj.isHurt) {
                        obj.health--;
                        obj.isHurt = true;
                        switch (obj.dir) {
                            case "left":
                                obj.pos[0] += 20;
                                obj.img = obj.hurtLeft;
                                break;
                            case "right":
                                obj.pos[0] -= 20;
                                obj.img = obj.hurtRight;
                                break;
                        }
                    }
                }
            })
        })
    }

    executeGameOver() {
        console.log("GameOver");
        debugger
    }

    remove(obj) {
        if (obj.type === "projectile") {
            this.projectiles.splice((this.projectiles.indexOf(obj)), 1);
        } else if (obj.type === "enemy") {
            const idx = this.enemies.indexOf(obj)
            this.enemies.splice((this.enemies.indexOf(obj)), 1)
        }
    }
}

export default Game;