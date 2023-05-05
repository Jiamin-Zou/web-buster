class GameView {
    static MOVES = {
        w: [0, -1], // up
        a: [-1, 0], // left
        d: [1, 0], // right
      };

    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.player = this.game.addPlayer();
    }

    bindKeyHandlers() {
        const player = this.player;

        Object.keys(GameVeiw.MOVES).forEach( (key) => {
            const move = GameView.MOVES(key);
            key(key, () => {player.move(move)})
        })

        key("space",() => {player.shoot()} );
    }

    start() {
        this.bindKeyHandlers();
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        const timeDelta = time - this.lastTime;

        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    }

}

export default GameView;