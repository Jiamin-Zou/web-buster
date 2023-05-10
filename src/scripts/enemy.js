import MovingObject from "./moving_object.js"
import Projectile from "./projectile.js"
import * as Util from "./util.js"
import * as Enemy1Sprite from "./enemy1SpriteInfo.js"

class Enemy extends MovingObject {
    static SHOOT_WAVE = 2;
    constructor(args, difficulty=1) {
        args.img = Enemy1Sprite.idleLeft;
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
        
        args.idleLeft = Enemy1Sprite.idleLeft;
        args.idleRight = Enemy1Sprite.idleRight;
        args.runLeft = Enemy1Sprite.runLeft;
        args.runRight = Enemy1Sprite.runRight;
        args.hurtLeft = Enemy1Sprite.hurtLeft;
        args.hurtRight = Enemy1Sprite.hurtRight;
        args.attackLeft = Enemy1Sprite.attackLeft;
        args.attackRight = Enemy1Sprite.attackRight;
        args.despawn = Enemy1Sprite.despawn;
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
                    this.img = this.attackLeft;
                    args.dir = this.dir;
                } else if (this.dir === "right") {
                    this.img = this.attackRight;
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
      // movement to chase player if player is within chase range and sopt range
        const player = this.game.player;
        const [playerX, playerY] = player.pos;
        const [enemyX, enemyY] = this.pos;
        const dist = Util.dist(player.pos, this.pos);
      
        if (dist < this.chaseRange) {
          const speed = this.speed;
          if (playerX < enemyX) {
            this.dir = "left";
            this.img = this.runLeft;
            // debugger
            this.vel[0] = -speed;
          } else {
            this.dir = "right";
            this.img = this.runRight;
            this.vel[0] = speed;
          }
          
          if (dist <= this.stopRange) {
            this.vel[0] = 0;
          }
            
            this.shoot()
          // Check if on the ground before allowing jump
          // && if playerY is at least 75px above enemy + (offset height different)
          if (!this.inJump && playerY < enemyY - 75 + (player.dHeight - this.dHeight)) {
            const jumpHeight = 12;
            this.vel[1] = -jumpHeight;
            this.inJump = true;
          }
          } else {
            this.vel[0] = 0;
          // if player not within distance, stand idle 
        }

        // switch (this.dir) {
        //   case "left":
        //     this.img = this.idleLeft;
        //     break;
        //   case "right":
        //     this.img = this.idleRight;
        //     break;
        // }
      
        super.update();
      }

}

export default Enemy;