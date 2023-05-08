import MovingObject from "./moving_object.js"
import * as Util from "./util.js"
class Player extends MovingObject {
    static STARTPOS = [100, 400]


    constructor(args) {
        const idleRight = Util.loadSprite("src/assets/images/sprites/player-idle-right.png");
        const idleLeft = Util.loadSprite("src/assets/images/sprites/player-idle-left.png");
        const runRight = Util.loadSprite("src/assets/images/sprites/player-run-shoot-right.png");
        const runLeft = Util.loadSprite("src/assets/images/sprites/player-run-shoot-left.png");
        args.img = idleRight;
        args.width = 32;
        args.height = 38;
        args.pos = Player.STARTPOS;
        args.health = 30;
        super(args);

        this.idleLeft = idleLeft;
        this.idleRight = idleRight;
        this.runLeft = runLeft;
        this.runRight = runRight;
        this.hpDisplay = document.querySelector("#hp-stat");
        this.hpDisplay.innerText = this.health;
        this.frames = this.img.width / this.width
        this.pressedKeys = {
            left: false,
            right: false,
            up: false,
            down: false,
            shoot: false
        }
    };

    shoot() {
        console.log("Player is shooting a projectile")
    }

}

export default Player;