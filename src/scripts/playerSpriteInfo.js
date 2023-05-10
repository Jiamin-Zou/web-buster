import * as Util from "./util.js"

const idleRight = {
    frameCnt: 0,
    frames: Array(6).fill(6),
    src: Util.loadSprite("src/assets/images/sprites/player-idle-right.png")
} 
const idleLeft = {
    frameCnt: 0,
    frames: Array(6).fill(6),
    src: Util.loadSprite("src/assets/images/sprites/player-idle-left.png")
}
const runRight = {
    frameCnt: 0,
    frames: Array(6).fill(4),
    src: Util.loadSprite("src/assets/images/sprites/player-run-shoot-right.png")
}

const runLeft = {
    frameCnt: 0,
    frames: Array(6).fill(4),
    src: Util.loadSprite("src/assets/images/sprites/player-run-shoot-left.png")
}

const hurtLeft = {
    frameCnt: 0,
    frames: Array(6).fill(3),
    src: Util.loadSprite("src/assets/images/sprites/player-hurt-left.png")
}

const hurtRight = {
    frameCnt: 0,
    frames: Array(6).fill(3),
    src: Util.loadSprite("src/assets/images/sprites/player-hurt-right.png")
}

const despawn = {

}
