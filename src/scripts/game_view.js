class GameView {
    static LEFT_KEY = ["ArrowLeft", "a"];
    static RIGHT_KEY = ["ArrowRight", "d"];
    static UP_KEY = ["ArrowUp", "w"]
    static DOWN_KEY = ["ArrowDown","s"]
    static SHOOT_KEY = [" "];

    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.bindKeyHandlers()
        this.animate = this.animate.bind(this)
    }

    start() {
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.game.draw(this.ctx);
    }

    bindKeyHandlers() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        document.addEventListener("keyup", this.handleKeyUp.bind(this))
    }

    handleKeyDown(e) {
        const key = e.key;
        const player = this.game.player;
        console.log("keydown:-" + key +"-")
        if (GameView.LEFT_KEY.includes(key)) {
            player.vel[0] -= player.speed;
        } else if ( GameView.RIGHT_KEY.includes(key)) {
            player.vel[0] += player.speed;
        } else if ( GameView.UP_KEY.includes(key)) {
            player.vel[1] -= player.speed;
        } else if ( GameView.DOWN_KEY.includes(key)) {
            player.vel[1] += player.speed;
        } else if ( GameView.SHOOT_KEY.includes(key)) {
            //player.shoot()
        }
    }

    handleKeyUp(e) {
        const key = e.key;
        const player = this.game.player;
        console.log("keyup:-" + key +"-")
        if (GameView.LEFT_KEY.includes(key)) {
            player.vel[0] -= player.speed;
        } else if ( GameView.RIGHT_KEY.includes(key)) {
            player.vel[0] += player.speed;
        } else if ( GameView.UP_KEY.includes(key)) {
            player.vel[1] -= player.speed;
        } else if ( GameView.DOWN_KEY.includes(key)) {
            player.vel[1] += player.speed;
        } else if ( GameView.SHOOT_KEY.includes(key)) {
            //player.shoot()
        }
    }

}

export default GameView;