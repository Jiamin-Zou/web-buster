import MovingObject from "./moving_object.js"
import Projectile from "./projectile.js";
import * as Util from "./util.js"
let jumpBasetime = Date.now();

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
        
        this.inJump = false;
        this.pressedKey = {
            left: false,
            right: false
        }
    };

    updateHealthDisplay() {
        this.hpDisplay.innerText = this.health;
    }

    updateMovement() {
        const spd = this.speed;
        const [x, y] = this.pos;
        if (this.pressedKey.left && x > Player.MOVE_BOUND_LEFT) {
            this.img = this.runLeft;
            this.vel[0] = -spd;
        } else if (this.pressedKey.right && x < Player.MOVE_BOUND_RIGHT) {
            this.vel[0] = spd;
            this.img = this.runRight;
        } else {
            this.vel[0] = 0
            if (this.pressedKey.right) {
                this.img = this.runRight;
                this.dir = "right";
                this.game.Scroll(this.dir);
            } else if (this.pressedKey.left) {
                this.img = this.runLeft;
                this.dir = "left"
                this.game.Scroll(this.dir);
            }
        }
    }

    shoot() {
            const now = Date.now()
            const check = now - this.shootBasetime;
            // 0.3 second cool
            if (check / 300 >= 1) {
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