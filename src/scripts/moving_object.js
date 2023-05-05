const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {
    constructor (args) {
        this.image = args.img;
        this.width = args.width;
        this.height = args.height;
        this.frameX = 0;
        this.frameY = 0
        this.pos = args.pos;
        this.vel = args.vel;
        this.speed = args.speed;
        this.health = args.heath;
        this.game = args.game;
        this.moving = false;
    }

    draw(ctx) {
        ctx.drawImage(this.img, 0, 0, this,width, this,height, 0, 700-this.height, this.width, this,height)
    }

    move(timeDelta) {
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale,
        offsetY = this.vel[1] * velocityScale;

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

        if (this.game.isOutOfBounds(this.pos)) {
            this.remove();
        }
    }
}

export default MovingObject;