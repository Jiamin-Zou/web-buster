import MovingObject from "./moving_object.js"
import * as Util from "./util.js"
class Player extends MovingObject {
    static START_POS = [100, (600 - 80 - 38 * 2)]
    static MOVE_BOUND_LEFT = 100;
    static MOVE_BOUND_RIGHT = 500;
    static UP_BOUND = 80;
    // x = 100; from left
    // y = (gameHeight - floorHeight - player dHeight)


    constructor(args) {
        const idleRight = Util.loadSprite("src/assets/images/sprites/player-idle-right.png");
        const idleLeft = Util.loadSprite("src/assets/images/sprites/player-idle-left.png");
        const runRight = Util.loadSprite("src/assets/images/sprites/player-run-shoot-right.png");
        const runLeft = Util.loadSprite("src/assets/images/sprites/player-run-shoot-left.png");
        args.img = idleRight;
        args.width = 32;
        args.height = 38;
        args.pos = Player.START_POS;
        args.health = 30;
        args.frames = 6;
        super(args);

        this.idleLeft = idleLeft;
        this.idleRight = idleRight;
        this.runLeft = runLeft;
        this.runRight = runRight;
        this.hpDisplay = document.querySelector("#hp-stat");
        this.hpDisplay.innerText = this.health;
        this.inJump = false;
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
        if (this.pressedKey.left && x > Player.MOVE_BOUND_LEFT) {
            this.vel[0] = -spd;
            this.img = this.runLeft;
        } else if (this.pressedKey.right && x < Player.MOVE_BOUND_RIGHT) {
            this.vel[0] = spd;
            this.img = this.runRight;
        } else {
            this.vel[0] = 0
            if (this.pressedKey.right) {
                this.img = this.runRight;
                this.game.platformScroll("right");
            } else if (this.pressedKey.left) {
                this.img = this.runLeft;
                this.game.platformScroll("left");
            }
        }

        if (this.pressedKey.up && y > Player.UP_BOUND && !this.inJump){
            this.inJump = true;
            this.vel[1] = -spd * 2;

        }

        if(this.pressedKey.shoot) {
            if (this.img === this.idleLeft) {
                this.img = this.runLeft;
            } else if (this.img === this.idleRight) {
                this.img = this.runRight;
            }
            this.shoot();
        }
        
        if(this.game.checkOnPlatform()) {
            this.vel[1] = 0;
            this.inJump = false;
        }
    }

    shoot() {
        console.log("Player is shooting a projectile")
    }

}

export default Player;