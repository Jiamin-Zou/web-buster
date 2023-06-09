import * as Util from "./util.js";

export const idleRight = {
  frameCnt: 0,
  frames: Array(6).fill(6),
  src: Util.loadSprite("src/assets/images/sprites/player-idle-right.png"),
};
export const idleLeft = {
  frameCnt: 0,
  frames: Array(6).fill(6),
  src: Util.loadSprite("src/assets/images/sprites/player-idle-left.png"),
};
export const runRight = {
  frameCnt: 0,
  frames: Array(6).fill(6),
  src: Util.loadSprite("src/assets/images/sprites/player-run-shoot-right.png"),
};

export const runLeft = {
  frameCnt: 0,
  frames: Array(6).fill(6),
  src: Util.loadSprite("src/assets/images/sprites/player-run-shoot-left.png"),
};

export const hurtLeft = {
  frameCnt: 0,
  frames: [4, 3, 2, 2, 3, 4],
  src: Util.loadSprite("src/assets/images/sprites/player-hurt-left.png"),
};

export const hurtRight = {
  frameCnt: 0,
  frames: [4, 3, 2, 2, 3, 4],
  src: Util.loadSprite("src/assets/images/sprites/player-hurt-right.png"),
};

export const despawn = {
  frameCnt: 0,
  frames: [5, 4, 5, 3, 4],
  src: Util.loadSprite("src/assets/images/sprites/player-despawn.png"),
  width: 16,
  height: 16,
  dWidth: 64,
  dHeight: 64,
};
