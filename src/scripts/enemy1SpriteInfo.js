import * as Util from "./util.js"

export const idleRight = {
    frameCnt: 0,
    frames: Array(4).fill(8),
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Idle_right.png")
} 
export const idleLeft = {
    frameCnt: 0,
    frames: Array(4).fill(8),
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Idle_left.png")
}
export const runRight = {
    frameCnt: 0,
    frames: Array(6).fill(7),
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Run_right.png")
}

export const runLeft = {
    frameCnt: 0,
    frames: Array(6).fill(7),
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Run_left.png")
}

export const hurtLeft = {
    frameCnt: 0,
    frames: [4,5,4,6],
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Hurt_left.png")
}

export const hurtRight = {
    frameCnt: 0,
    frames: [4,5,4,6],
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Hurt_right.png")
}

export const attackLeft = {
    frameCnt: 0,
    frames: [3,2,5,4,4,3],
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Attack_left.png")
}

export const attackRight = {
    frameCnt: 0,
    frames: [3,2,5,4,4,3],
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Attack_right.png")
}

export const despawn = {
    frameCnt: 0,
    frames: Array(8).fill(6),
    src: Util.loadSprite("src/assets/images/sprites/enemy_1_Death.png"),
    width: 32,
    height: 32,
    dWidth: 64,
    dHeight: 64

}
