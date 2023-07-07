const IFRAME = 2500; // 2.5 second iframe
const ENEMY_IFRAME = 1000; // 1 second iframe for enemy
class MovingObject {
  static GRAVITY = 0.5;

  constructor(args) {
    this.img = args.img;
    this.idleLeft = args.idleLeft || this.img;
    this.idleRight = args.idleRight || this.img;
    this.runLeft = args.runLeft || this.idleLeft;
    this.runRight = args.runRight || this.idleRight;
    this.hurtLeft = args.hurtLeft || this.idleLeft;
    this.hurtRight = args.hurtRight || this.idleRight;
    this.width = args.width;
    this.height = args.height;
    this.pos = args.pos;
    this.vel = args.vel || [0, 0];
    this.speed = args.speed || 5;
    this.health = args.health || 1; //projectile
    this.game = args.game;
    this.type = args.type;
    if (this.type === "enemy") this.speed = 4;
    this.dir = args.dir;
    this.isAlive = true;
    this.inJump = false;
    this.isHurt = false;
    this.shootCooldown = false;
    this.shootBasetime = Date.now();
    this.hurtBasetime = Date.now();
    this.frameX = 0;
    // scaled 2x
    this.dWidth = this.width * 2;
    this.dHeight = this.height * 2;
  }

  draw(ctx) {
    const [dX, dY] = this.pos;
    if (this.img.frameCnt === this.img.frames[this.frameX]) {
      this.frameX = (this.frameX + 1) % this.img.frames.length;
      this.img.frameCnt = 0;
    }
    this.img.frameCnt++;
    const sX = this.frameX * this.width;
    const sY = 0;

    ctx.drawImage(
      this.img.src,
      sX,
      sY,
      this.width,
      this.height,
      dX,
      dY,
      this.dWidth,
      this.dHeight
    );
  }

  update() {
    if (this.isAlive) {
      if (this.health === 0) this.runDespawn();

      this.checkiFrame();

      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
      if (
        this.pos[1] + this.dHeight + this.vel[1] < this.game.screenHeight &&
        this.type !== "projectile"
      ) {
        this.vel[1] += MovingObject.GRAVITY;
      } else {
        this.vel[1] = 0;
      }

      if (this.pos[0] < 0 && this.type === "player") {
        this.pos[0] = 0;
      } else if (
        this.pos[0] + this.dWidth > this.game.screenWidth &&
        this.type === "player"
      ) {
        this.pos[0] = this.game.screenWidth - this.dWidth;
      }
    }
  }

  checkiFrame() {
    const now = Date.now();
    const check = now - this.hurtBasetime;
    // 2.5 sec iFrame for player
    // 1 sec iFrame for enemy
    let iFrame;
    switch (this.type) {
      case "player":
        iFrame = IFRAME;
        break;
      case "enemy":
        iFrame = ENEMY_IFRAME;
    }
    if (this.isHurt && check / iFrame >= 1) {
      this.hurtBasetime = now;
      this.isHurt = false;
      switch (this.dir) {
        case "left":
          this.img = this.idleLeft;
          break;
        case "right":
          this.img = this.idleRight;
          break;
      }
    }
  }

  runDespawn() {
    // overwritten in enemy && player class
    this.alive = false;
    this.remove();
  }
  shoot() {
    // to be implemented in childClass
  }
  remove() {
    this.game.remove(this);
  }
}

export default MovingObject;
