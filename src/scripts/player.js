import MovingObject from "./moving_object.js";
import Projectile from "./projectile.js";
import * as PlayerSprites from "./playerSpriteInfo.js";
import { switchSprite } from "./util.js";

class Player extends MovingObject {
  static START_POS = [100, 600 - 80 - 38 * 2]; // [100, 444];
  static MOVE_BOUND_LEFT = 100;
  static MOVE_BOUND_RIGHT = 500;
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

    this.despawn = PlayerSprites.despawn;

    this.pressedKey = {
      left: false,
      right: false,
      shoot: false,
    };
  }

  update(delta) {
    if (this.pressedKey.left) {
      this.dir = "left";
      switchSprite(this, this.runLeft);
    } else if (this.pressedKey.right) {
      this.dir = "right";
      switchSprite(this, this.runRight);
    }
    const spd = this.speed;
    const [x, y] = this.pos;

    if (this.pressedKey.right && x < Player.MOVE_BOUND_RIGHT) {
      this.vel[0] = spd;
    } else if (
      (this.pressedKey.left &&
        this.game.scrollOffset === 0 &&
        this.pos[0] > 0) ||
      (this.pressedKey.left && x > Player.MOVE_BOUND_LEFT)
    ) {
      this.vel[0] = -spd;
    } else {
      this.vel[0] = 0;
      const bgPos = this.game.backgrounds[0].pos[0]
      // if (this.pressedKey.right && this.game.scrollOffset < 5300) {
      if (this.pressedKey.right && bgPos > -6500) {
        this.game.scrollOffset += 1;
        this.game.Scroll(this.dir, delta);
      } else if (this.pressedKey.left && this.game.scrollOffset > 0) {
        this.game.scrollOffset -= 1;
        this.game.Scroll(this.dir, delta);
      }
    }

    super.update(delta);
  }

  drawDespawn(ctx) {
    const [dX, dY] = this.pos;
    if (this.img.frameCnt === this.img.frames[this.frameX]) {
      this.frameX = (this.frameX + 1) % this.img.frames.length;
      this.img.frameCnt = 0;
    }
    this.img.frameCnt++;
    const sX = this.frameX * this.despawn.width;
    const sY = 0;
    ctx.drawImage(
      this.despawn.src,
      sX,
      sY,
      this.despawn.width,
      this.despawn.height,
      dX,
      dY,
      this.despawn.dWidth,
      this.despawn.dHeight
    );
  }

  shoot() {
    const now = Date.now();
    const check = now - this.shootBasetime;
    // 0.18 second cool
    if (check / 180 >= 1) {
      this.shootBasetime = now;
      this.shootCooldown = false;
    }

    if (!this.shootCooldown) {
      const args = { game: this.game };
      if (this.dir === "left") {
        this.img = this.runLeft;
        args.dir = this.dir;
      } else if (this.dir === "right") {
        this.img = this.runRight;
        args.dir = this.dir;
      }
      new Projectile(args, this);
      this.game.shootSFX.currentTime = 0;
      this.game.shootSFX.play();

      this.shootCooldown = true;
    }
  }
}

export default Player;
