import MovingObject from "./moving_object.js"
import Projectile from "./projectile.js";
import * as Util from "./util.js"

class Player extends MovingObject {
    static START_POS = [100, (600 - 80 - 38 * 2)]
    static MOVE_BOUND_LEFT = 100;
    static MOVE_BOUND_RIGHT = 400;
    static UP_BOUND = 40;
    // x = 100; from left
    // y = (gameHeight - floorHeight - player dHeight)


    constructor(args) {
        const idleRight = Util.loadSprite("src/assets/images/sprites/player-idle-right.png");
        const idleLeft = Util.loadSprite("src/assets/images/sprites/player-idle-left.png");
        const runRight = Util.loadSprite("src/assets/images/sprites/player-run-shoot-right.png");
        const runLeft = Util.loadSprite("src/assets/images/sprites/player-run-shoot-left.png");
        const hurtLeft = Util.loadSprite("src/assets/images/sprites/player-hurt-left.png");
        const hurtRight = Util.loadSprite("src/assets/images/sprites/player-hurt-right.png");
        args.img = idleRight;
        args.idleLeft = idleLeft;
        args.idleRight = idleRight;
        args.runLeft = runLeft;
        args.runRight = runRight;
        args.hurtLeft = hurtLeft;
        args.hurtRight = hurtRight;
        args.width = 32;
        args.height = 38;
        args.pos = Player.START_POS;
        args.health = 30;
        args.frames = 6;
        args.type = "player";
        args.dir = "right";
        super(args);

        this.pressedKey = {
            left: false,
            right: false
        }
    };

    updateMovement() {
        const spd = this.speed;
        const [x, y] = this.pos;

        if (this.pressedKey.right && x < Player.MOVE_BOUND_RIGHT) {
            this.vel[0] = spd;
        } else if ((this.pressedKey.left && this.game.scrollOffset === 0 && this.pos[0] > 0) || (this.pressedKey.left && x > Player.MOVE_BOUND_LEFT)) {
            // debugger
            this.vel[0] = -spd;
        } else {
            this.vel[0] = 0;
            if (this.pressedKey.right && this.game.scrollOffset < 1820) {
                this.img = this.runRight;
                console.log(this.game.scrollOffset)
                console.log(this.pos)
                this.dir = "right";
                this.game.scrollOffset += 1;
                this.game.Scroll(this.dir);
            } else if (this.pressedKey.left && this.game.scrollOffset > 0) {
                // debugger
                this.img = this.runLeft;
                this.dir = "left"
                this.game.scrollOffset -= 1;
                this.game.Scroll(this.dir);
            }
        // max background scroll = (background.width - canvas.width)/player.speed * 0.66
        // approx 1991 (max scrollOffset)
        }
    }

    shoot() {
            const now = Date.now()
            const check = now - this.shootBasetime;
            // 0.18 second cool
            if (check / 180 >= 1) {
                this.shootBasetime = now;
                this.shootCooldown = false;
            }
    
            if (!this.shootCooldown) {
                const args = { game:this.game };
                if (this.dir === "left") {
                    this.img = this.runLeft;
                    args.dir = this.dir;
                } else if (this.dir ==="right") {
                    this.img = this.runRight;
                    args.dir = this.dir; 
                }
                // debugger
                new Projectile(args, this)
                this.shootCooldown = true;
            }
        
    }

}

export default Player;