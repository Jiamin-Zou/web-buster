import * as Util from "./util.js"

export const leftShot = {
    frameCnt: 0,
    frames: Array(6).fill(6),
    src: Util.loadSprite("src/assets/images/sprites/player-shoot-left-4.png")
}
export const rightShot = {
    frameCnt: 0,
    frames: Array(6).fill(6),
    src: Util.loadSprite("src/assets/images/sprites/player-shoot-right-4.png")
}