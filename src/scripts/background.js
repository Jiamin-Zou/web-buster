import * as Util from "./util.js"

class Background {
    constructor() {
        this.img = Util.loadSprite("src/assets/images/background/background.png");
        this.pos =[0, 0]
        this.width = 10000;
        this.height = 600;
    }

    draw (ctx){
        const [x, y] = this.pos;
        ctx.drawImage(this.img, x, y, this.width, this.height)
    }
}

export default Background;