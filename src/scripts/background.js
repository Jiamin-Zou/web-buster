class Background {
    constructor(args) {
        this.img = args.img
        this.pos = args.pos
        this.width = args.width
        this.height = args.height
        this.layer = args.layer || 0
    }

    draw (ctx){
        const [x, y] = this.pos;
        ctx.drawImage(this.img, x, y, this.width, this.height)
    }
}

export default Background;