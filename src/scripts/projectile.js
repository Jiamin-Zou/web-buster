import MovingObject from "./moving_object.js";
import * as Util from "./util.js"

class Projectile extends MovingObject {
    constructor(args, shooter) {
        const leftShot = Util.loadSprite("src/assets/images/sprites/player-shoot-left-4.png");
        const rightShot = Util.loadSprite("src/assets/images/sprites/player-shoot-right-4.png");
        switch (args.dir) {
            case "left":
                args.img = leftShot;
                args.vel = [-6, 0];
                if(shooter.type === "enemy") args.vel = [-3, 0];
                break;
            case "right":
                args.img = rightShot;
                args.vel = [6, 0];
                if(shooter.type === "enemy") args.vel = [3, 0];
                break;

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
        this.shooter = shooter;
        this.maxDist = 300
        if (this.shooter.type === "player") this.maxDist = 415;
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
        if (Math.abs(dX - this.baseX) >= this.maxDist || this.health === 0) {
            this.game.remove(this)
        }

    }
}

export default Projectile;