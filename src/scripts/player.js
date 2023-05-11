import MovingObject from "./moving_object.js"
import Projectile from "./projectile.js";
import * as PlayerSprites from "./playerSpriteInfo.js"

class Player extends MovingObject {
    static START_POS = [100, (600 - 80 - 38 * 2)] // [100, 444];
    static MOVE_BOUND_LEFT = 100;
    static MOVE_BOUND_RIGHT = 400;
    static UP_BOUND = 40;
    // x = 100; from left
    // y = (gameHeight - floorHeight - player dHeight)


    constructor(args) {
        args.img = PlayerSprites.idleRight;
        args.idleLeft = PlayerSprites.idleLeft;
        args.idleRight = PlayerSprites.idleRight;
        args.runLeft = PlayerSprites.runLeft;
        args.runRight = PlayerSprites.runRight;
        args.hurtLeft = PlayerSprites.hurtLeft;
        args.hurtRight = PlayerSprites.hurtRight;
        args.width = 32;
        args.height = 38;
        args.health = 20;
        args.type = "player";
        args.dir = "right";
        super(args);

        this.pressedKey = {
            left: false,
            right: false
        }
    };

    update() {
        const spd = this.speed;
        const [x, y] = this.pos;

        if (this.pressedKey.right && x < Player.MOVE_BOUND_RIGHT) {
            this.vel[0] = spd;
        } else if ((this.pressedKey.left && this.game.scrollOffset === 0 && this.pos[0] > 0) || (this.pressedKey.left && x > Player.MOVE_BOUND_LEFT)) {
            // debugger
            this.vel[0] = -spd;
        } else {
            this.vel[0] = 0;
            if (this.pressedKey.right && this.game.scrollOffset < 1890) {
                this.img = this.runRight;
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
        }

        super.update();
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