document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 500;

    let player = new Image();
    player.src="../src/assets/images/sprites/player_walk.png";

    let width = 32;
    let height = 32;
    let frame = 7;
    let frameY = 0;
    let currentFrame = 0;
    let x = 0;
    document.addEventListener("keydown",(e)=> {
        if (['d' , 'a'].indexOf(e.key) >= 0) {
            currentFrame++;
            currentFrame %= frame;
        }

        if (e.key === 'd') {
            frameY = 0;
            if (x+5 <= canvas.width - width*2 ) {x += 5;}
        }
        if (e.key ==='a') {
            frameY = 1;
            if (x-5 >= 0 ) {x -= 5;}
        }
    })

    document.addEventListener("keyup", (e)=> {
        if (e.key === 'd') {
            currentFrame = 0;
        }
        if (e.key ==='a') {
            currentFrame = 0;
        }
    })


    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(player, currentFrame*width, frameY*height, width, height, x, canvas.height-150, width*2, height*2);
        window.setTimeout(() => {requestAnimationFrame(animate)}, 1000/30);
    }
    animate();
})
