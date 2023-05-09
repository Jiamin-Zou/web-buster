import MovingObject from "./moving_object.js"
import Projectile from "./projectile.js"
import * as Util from "./util.js"

class Enemy extends MovingObject {
    static SHOOT_WAVE = 3;
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
        args.dir = "left"
        super(args)
        this.shootCount = 0;;
    }

    shoot() {
        if (!this.isHurt) {
            const now = Date.now()
            const check = now - this.shootBasetime;
            // 0.2 second cool
            if (check / 200 >= 1 && this.shootCount !== Enemy.SHOOT_WAVE) {
                this.shootBasetime = now;
                this.shootCooldown = false;
                // 2 sec cold down after wave of 3
            } else if (check / 2000 >= 1 && this.shootCount === Enemy.SHOOT_WAVE) {
                this.shootBasetime = now;
                this.shootCooldown = false;
                this.shootCount = 0;
            }


    
            if (!this.shootCooldown) {
                const args = { game:this.game };
                if (this.img === this.idleLeft || this.img === this.runLeft) {
                    this.img = this.runLeft;
                    args.dir = this.dir;
                } else if (this.img === this.idleRight || this.img === this.runRight) {
                    this.img = this.runRight;
                    args.dir = this.dir;
                }
                // debugger
                new Projectile(args, this)
                this.shootCooldown = true;
                this.shootCount++;
            }
        }
        
    }

}

export default Enemy;