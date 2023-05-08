import MovingObject from "./moving_object.js"
import * as Util from "./util.js"

class Enemy extends MovingObject {
    constructor(args, enemyType) {
        const idleLeft = Util.loadSprite(`src/assets/images/sprites/enemy_${enemyType}_Idle_left_4.png`)
        const idleRight = Util.loadSprite(`src/assets/images/sprites/enemy_${enemyType}_Idle_right_4.png`)
        args.img = idleLeft;
        args.width = 32;
        args.height = 32;
        args.frames = 4;
        args.health = 3;
        args.idleLeft = idleLeft;
        args.idleRight = idleRight;
        args.type = "enemy";
        super(args)
        this.idleLeft = idleLeft;
        this.idleRight = idleRight
    }

}

export default Enemy;