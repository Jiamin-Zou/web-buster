import MovingObject from "./moving_object.js";
import * as ProjectileSprites from "./projectileSpriteInfo.js";

class Projectile extends MovingObject {
  constructor(args, shooter) {
    let spd = shooter.speed + 0.5;
    if (shooter.type === "enemy") spd = shooter.speed - 0.5;
    switch (args.dir) {
      case "left":
        args.img = ProjectileSprites.leftShot;
        spd *= -1;
        break;
      case "right":
        args.img = ProjectileSprites.rightShot;
        break;
    }
    args.vel = [spd, 0];
    args.pos = [0, 0];
    args.width = 16;
    args.height = 16;
    args.type = "projectile";
    // need to pass in pos args
    super(args);
    this.shooter = shooter;
    this.travelDist = 0;
    this.maxDist = 300;
    if (this.shooter.type === "player") this.maxDist = 415;
    this.pos = this.startPos();
    this.baseX = this.pos.slice()[0];
    this.game.projectiles.push(this);
  }

  startPos() {
    const [x, y] = this.shooter.pos;
    const w = this.shooter.dWidth;
    const h = this.shooter.dHeight;
    // fire from center of shooter pos[y]
    const fY = y + h / 2 - this.dWidth / 2;
    let fX;
    if (this.dir === "left") {
      fX = x - this.dWidth + 4;
    } else if (this.dir === "right") {
      fX = x + w - 4;
    }

    return [fX, fY];
  }

  update(delta) {
    super.update(delta);
    const velocityScale = delta / (1000 / 60);
    this.travelDist += this.vel[0] * velocityScale;
    if (Math.abs(this.travelDist) >= this.maxDist || this.health === 0) {
      this.game.remove(this);
    }
  }
}

export default Projectile;
