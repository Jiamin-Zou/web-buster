const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {
    static GRAVITY = 0.8;

    constructor (args) {
        this.img = args.img;
        this.width = args.width;
        this.height = args.height;
        this.pos = args.pos;
        this.vel = args.vel || [0, 0];
        this.speed = args.speed || 5;
        this.health = args.health;
        this.game = args.game;
        this.frameX = 0;
        this.frameY = 0
        this.dWidth = this.width * 2;
        this.dHeight = this.height * 2;
        this.moving = false;
    }

    draw(ctx) {
        const [dX, dY] = this.pos;
        const sX = this.frameX * this.width;
        const sY = this. frameY * this.height;

        ctx.drawImage(this.img, sX, sY, this.width, this.height, dX, dY, this.dWidth, this.dHeight)
    }

    update(ctx) {
        this.draw(ctx);
        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1]
        if (this.pos[1] + this.dHeight + this.vel[1] < this.game.screenHeight) {
            this.vel[1] +=MovingObject.GRAVITY;
        } else {
            this.vel[1] = 0
        }
        this.move()
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