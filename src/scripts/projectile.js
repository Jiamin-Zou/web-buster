import MovingObject from "./moving_object.js";
import * as Util from "./util.js"

class Projectile extends MovingObject {
    constructor(args, shooter, dir) {
        const leftShot = Util.loadSprite("src/assets/images/sprites/player-shoot-left-4.png");
        const rightShot = Util.loadSprite("src/assets/images/sprites/player-shoot-right-4.png");
        if (dir === "left") {
            args.img = leftShot;
            args.vel = [-7, 0];
        } else if (dir === "right") {
            args.img = rightShot;
            args.vel = [7, 0];
        }

        // debugger
        args.idleLeft = leftShot;
        args.idleRight = rightShot;
        args.pos = [0, 0]
        args.width = 16;
        args.height = 16;
        args.frames = 4;
        args.type = "projectile";
        // need to pass in pos args
        super(args)
        this.dir = dir;
        this.shooter = shooter;
        this.pos = this.startPos()
        this.baseX = this.pos.slice()[0];
        this.game.projectiles.push(this);
    }

    startPos() {
        const [x, y] = this.shooter.pos;
        const w = this.shooter.dWidth;
        const h = this.shooter.dHeight;
        // fire from center of shooter pos[y]
        const fY = y + (h / 2) - (this.dWidth / 2);
        let fX;
        if (this.dir === "left") {
            this.img = this.idleLeft
            fX = x - this.dWidth + 4;
        } else if (this.dir === "right") {
            this.img = this.idleRight
            fX = (x + w) - 4
        }

        return [fX, fY];
        // debugger
    }

    updateMovement(){
        const dX = this.pos[0];
        if (Math.abs(dX - this.baseX) >= 400 || this.health === 0) {
            this.game.remove(this)
        }

    }
}

export default Projectile;