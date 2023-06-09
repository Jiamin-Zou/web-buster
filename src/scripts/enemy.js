import MovingObject from "./moving_object.js";
import Projectile from "./projectile.js";
import * as Util from "./util.js";
import * as Enemy1Sprite from "./enemy1SpriteInfo.js";

class Enemy extends MovingObject {
  static SHOOT_WAVE = 2;
  constructor(args, difficulty) {
    args.img = Enemy1Sprite.idleLeft;
    args.width = 32;
    args.height = 32;
    switch (difficulty) {
      case 1:
        args.health = 1;
        break;
      case 2:
        args.health = 3;
        break;
      case 3:
        args.health = 6; //crazy
        break;
    }

    args.idleLeft = Enemy1Sprite.idleLeft;
    args.idleRight = Enemy1Sprite.idleRight;
    args.runLeft = Enemy1Sprite.runLeft;
    args.runRight = Enemy1Sprite.runRight;
    args.hurtLeft = Enemy1Sprite.hurtLeft;
    args.hurtRight = Enemy1Sprite.hurtRight;
    args.type = "enemy";
    args.dir = "left";
    super(args);
    this.shootCount = 0;
    this.chaseRange = 400;
    this.stopRange = 250;
    this.newSpawn = true;
    setTimeout(() => (this.newSpawn = false), 1000);
  }

  shoot() {
    if (!this.isHurt && !this.newSpawn) {
      const now = performance.now();
      const check = now - this.shootBasetime;
      // 0.4 second cool
      if (check / 500 >= 1 && this.shootCount !== Enemy.SHOOT_WAVE) {
        this.shootBasetime = now;
        this.shootCooldown = false;
        // 2.5 sec cold down after wave of 2 shots
      } else if (check / 2500 >= 1 && this.shootCount === Enemy.SHOOT_WAVE) {
        this.shootBasetime = now;
        this.shootCooldown = false;
        this.shootCount = 0;
      }

      if (!this.shootCooldown) {
        this.vel[0] = 0;
        const args = { game: this.game };
        if (this.dir === "left") {
          // Util.switchSprite(this, this.runLeft);
          args.dir = this.dir;
        } else if (this.dir === "right") {
          // Util.switchSprite(this, this.runRight);
          args.dir = this.dir;
        }
        new Projectile(args, this);
        this.shootCooldown = true;
        this.shootCount++;
      }
    }
  }

  update(delta) {
    // movement to chase player if player is within chase range and sopt range
    const player = this.game.player;
    const [playerX, playerY] = this.game.player.pos;
    const [enemyX, enemyY] = this.pos;
    const dist = Util.distance(this.game.player.pos, this.pos);

    if (playerX < enemyX) {
      this.dir = "left";
    } else {
      this.dir = "right";
    }

    if (dist <= this.chaseRange && dist >= this.stopRange) {
      const speed = this.speed;
      if (this.dir === "left") {
        Util.switchSprite(this, this.runLeft);
        this.vel[0] = -speed;
      } else {
        Util.switchSprite(this, this.runRight);
        this.vel[0] = speed;
      }
    } else {
      this.vel[0] = 0;
      if (playerX < enemyX) Util.switchSprite(this, this.idleLeft);
      else Util.switchSprite(this, this.idleRight);
    }

    if (dist < this.chaseRange) {
      if (
        !this.inJump &&
        playerY < enemyY - 75 + (this.game.player.dHeight - this.dHeight)
      ) {
        const jumpHeight = 27;
        this.vel[1] = -jumpHeight;
        this.inJump = true;
      }
      this.shoot();
    }

    this.game.enemies.forEach((enemy) => {
      if (enemy !== this && Util.rectCollision(this, enemy)) {
        if (
          this.dir === enemy.dir &&
          enemy.dir === "left" &&
          enemy.pos[0] < this.pos[0]
        ) {
          this.vel[0] = 0;
        } else if (
          this.dir === enemy.dir &&
          enemy.dir === "right" &&
          enemy.pos[0] > this.pos[0]
        ) {
          this.vel[0] = 0;
        }
      }
    });

    super.update(delta);
  }
}

export default Enemy;
