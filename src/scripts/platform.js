class platform {
    constructor(args) {
        this.img = args.img;
        this.pos = args.pos;
        this.width = args.width;
        this.height = args.height;
        this.scale = args.scale || 0.5
        this.type = args.type || "platform"
        this.dWidth = this.width * this.scale;
        this.dHeight = this.height * this.scale
    }

    draw(ctx) {
        const [x, y] = this.pos;
        ctx.drawImage(this.img, 0, 0, this.width, this.height, x, y, this.dWidth, this.dHeight)
    }
}

export default platform;