const I_FRAME = 3000; // 3 second iFrame

class MovingObject {
    static GRAVITY = 0.5;

    constructor (args) {
        this.img = args.img;
        this.idleLeft = args.idleLeft;
        this.idleRight = args.idleRight;
        this.runLeft = args.runLeft || this.idleLeft;
        this.runRight = args.runRight || this.idleRight;
        this.hurtLeft =  args.hurtLeft || this.img;
        this.hurtRight = args.hurtRight || this.img;
        this.width = args.width;
        this.height = args.height;
        this.pos = args.pos;
        this.vel = args.vel || [0, 0];
        this.speed = args.speed || 5;
        this.health = args.health || 1;
        this.frames = args.frames
        this.game = args.game;
        this.type = args.type;
        this.dir = args.dir;

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
        this.frameX = ++this.frameX % this.frames;
        const sX = this.frameX * this.width;
        const sY = 0 * this.height;
        
        ctx.drawImage(this.img, sX, sY, this.width, this.height, dX, dY, this.dWidth, this.dHeight)
        // if (this.type === "projectile") debugger;
    }

    update() {
        if (this.health === 0 && this.type !== "player") this.remove();
        if (this.type === "enemy") this.shoot();


        this.checkiFrame()

        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1]
        if (this.pos[1] + this.dHeight + this.vel[1] < this.game.screenHeight && this.type !== "projectile") {
            this.vel[1] += MovingObject.GRAVITY;
        } else {
            this.vel[1] = 0
        }
        this.updateMovement()
    }

    checkiFrame() {
        const now = Date.now();
        const check = now - this.hurtBasetime;
        if(this.isHurt && check / I_FRAME >= 1) {
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

    updateMovement() {
        // to be implemented in childClass
    }

    shoot() {
        // to be implemented in childClass
    }

    remove() {
        this.game.remove(this);
    }

    // move(timeDelta) {
    //     const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
    //     offsetX = this.vel[0] * velocityScale,
    //     offsetY = this.vel[1] * velocityScale;

    //     this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    //     if (this.game.isOutOfBounds(this.pos)) {
    //         this.remove();
    //     }
    // }
}

export default MovingObject;