import MovingObject from "./moving_object.js"
import Projectile from "./projectile.js"
import * as Util from "./util.js"

class Enemy extends MovingObject {
    static SHOOT_WAVE = 2;
    constructor(args, enemyType=1, difficulty=1) {
        const idleLeft = Util.loadSprite(`src/assets/images/sprites/enemy_${enemyType}_Idle_left.png`)
        const idleRight = Util.loadSprite(`src/assets/images/sprites/enemy_${enemyType}_Idle_right.png`)
        args.img = idleLeft;
        args.width = 32;
        args.height = 32;
        args.frames = 4;
        switch (difficulty) {
          case 1:
            args.health = 2;
            break;
          case 2:
            args.health = 3;
            break;
          case 3:
            args.health = 5; //crazy
            break;
          default:
            args.health = 2;
        }
        
        args.idleLeft = idleLeft;
        args.idleRight = idleRight;
        args.type = "enemy";
        args.dir = "left"
        super(args)
        this.shootCount = 0;
        this.chaseRange = 350;
        this.stopRange = 250;
    }

    shoot() {
        if (!this.isHurt) {
            const now = Date.now()
            const check = now - this.shootBasetime;
            // 0.4 second cool
            if (check / 400 >= 1 && this.shootCount !== Enemy.SHOOT_WAVE) {
                this.shootBasetime = now;
                this.shootCooldown = false;
                // 2 sec cold down after wave of 2 shots
            } else if (check / 2000 >= 1 && this.shootCount === Enemy.SHOOT_WAVE) {
                this.shootBasetime = now;
                this.shootCooldown = false;
                this.shootCount = 0;
            }


    
            if (!this.shootCooldown) {
                this.vel[0] = 0;
                const args = { game:this.game };
                if (this.dir === "left") {
                    this.img = this.runLeft;
                    args.dir = this.dir;
                } else if (this.dir === "right") {
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

    update() {
        const player = this.game.player;
        const [playerX, playerY] = player.pos;
        const [enemyX, enemyY] = this.pos;
        const dist = Util.dist(player.pos, this.pos);
      
        if (dist < this.chaseRange) {
          const speed = this.speed;
          this.shoot()
          if (playerX < enemyX) {
            this.dir = "left";
            this.img = this.runLeft;
            this.vel[0] = -speed;
          } else {
            this.dir = "right";
            this.img = this.runRight
            this.vel[0] = speed;
          }
      
          if (dist <= this.stopRange) {
            this.vel[0] = 0;
          }
      
          // Check if on the ground before allowing jump
          // && if playerY is at least 50px above enemy + (offset height different)
          if (!this.inJump && playerY < enemyY - 50 + (player.dHeight - this.dHeight)) {
            const jumpHeight = 13;
            this.vel[1] = -jumpHeight;
            this.inJump = true;
          }
        } else {
          this.vel[0] = 0;
        }
      
        super.update();
      }
    

    updateMovement() {
    }

}

export default Enemy;