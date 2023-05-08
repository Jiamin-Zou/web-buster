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
        if (GameView.LEFT_KEY.includes(key)) {
            player.pressedKey.left = true;
        } else if ( GameView.RIGHT_KEY.includes(key)) {
            player.pressedKey.right = true;
        } else if ( GameView.UP_KEY.includes(key)) {
            player.pressedKey.up = true;
        } else if ( GameView.DOWN_KEY.includes(key)) {
            // player.pressedKey.down = true;
        } else if ( GameView.SHOOT_KEY.includes(key)) {
            player.pressedKey.shoot = true;
        }
    }

    handleKeyUp(e) {
        const key = e.key;
        const player = this.game.player;
        if (GameView.LEFT_KEY.includes(key)) {
            player.img = player.idleLeft;
            player.pressedKey.left = false;
        } else if ( GameView.RIGHT_KEY.includes(key)) {
            player.img = player.idleRight;
            player.pressedKey.right = false;
        } else if ( GameView.UP_KEY.includes(key)) {
            player.pressedKey.up = false;
        } else if ( GameView.DOWN_KEY.includes(key)) {
            // player.pressedKey.down = false;
        } else if ( GameView.SHOOT_KEY.includes(key)) {
            if (player.img === player.runLeft) {
                player.img = player.idleLeft;
            } else if (player.img === player.runRight) {
                player.img = player.idleRight;
            }
            player.pressedKey.shoot = false;
        }
    }

}

export default GameView;