import MovingObject from "./moving_object.js"
import Projectile from "./projectile.js";
import * as Util from "./util.js"
let jumpBasetime = Date.now();
let shootBasetime = Date.now();

class Player extends MovingObject {
    static START_POS = [100, (600 - 80 - 38 * 2)]
    static MOVE_BOUND_LEFT = 100;
    static MOVE_BOUND_RIGHT = 400;
    static UP_BOUND = 80;
    // x = 100; from left
    // y = (gameHeight - floorHeight - player dHeight)


    constructor(args) {
        const idleRight = Util.loadSprite("src/assets/images/sprites/player-idle-right.png");
        const idleLeft = Util.loadSprite("src/assets/images/sprites/player-idle-left.png");
        const runRight = Util.loadSprite("src/assets/images/sprites/player-run-shoot-right.png");
        const runLeft = Util.loadSprite("src/assets/images/sprites/player-run-shoot-left.png");
        args.img = idleRight;
        args.idleLeft = idleLeft;
        args.idleRight = idleRight;
        args.runLeft = runLeft;
        args.runRight = runRight;
        args.width = 32;
        args.height = 38;
        args.pos = Player.START_POS;
        args.health = 30;
        args.frames = 6;
        args.type = "player";
        super(args);

        this.hpDisplay = document.querySelector("#hp-stat");
        this.hpDisplay.innerText = this.health;
        this.inJump = false;
        this.shootCooldown = false;
        this.pressedKey = {
            left: false,
            right: false,
            up: false,
            down: false,
            shoot: false
        }
    };

    updateMovement() {
        const spd = this.speed;
        const [x, y] = this.pos;
        if (this.pressedKey.left && x > Player.MOVE_BOUND_LEFT && !this.isHurt) {
            this.img = this.runLeft;
            this.vel[0] = -spd;
        } else if (this.pressedKey.right && x < Player.MOVE_BOUND_RIGHT && !this.isHurt) {
            this.vel[0] = spd;
            this.img = this.runRight;
        } else {
            this.vel[0] = 0
            if (this.pressedKey.right) {
                this.img = this.runRight;
                this.game.Scroll("right");
            } else if (this.pressedKey.left) {
                this.img = this.runLeft;
                this.game.Scroll("left");
            }
        }

        if (this.pressedKey.up && y > Player.UP_BOUND && !this.inJump && !this.isHurt){
            this.inJump = true;
            this.vel[1] = -spd * 2;
            
        }
        
        if(this.pressedKey.shoot && !this.isHurt) {
            this.shoot();
        }
    }

    shoot() {
        const now = Date.now()
        const check = now - shootBasetime;
        // 0.3 second cool
        if (check / 300 >= 1) {
            shootBasetime = now;
            this.shootCooldown = false;
        }

        if (!this.shootCooldown) {
            let dir = "right"
            const args = { game:this.game };
            if (this.img === this.idleLeft || this.img === this.runLeft) {
                this.img = this.runLeft;
                dir = "left";
            } else if (this.img === this.idleRight || this.img === this.runRight) {
                this.img = this.runRight;
                dir = "right";
            }
            // debugger
            new Projectile(args, this, dir)
            
            console.log("Player is shooting a projectile");
            this.shootCooldown = true;
        }
        
    }

}

export default Player;