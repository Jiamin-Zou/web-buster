export function loadSprite(src) {
    const img = new Image();
    img.src = src;
    return img;
};

export function dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
}

// dims width x height
// player: original(32 x 38) * 2 = 64 x 76
// enemy: original(32 x 32) * 2 = 64 x 64
// background: 10,000 x 600
// canvas: 800 x 600
// floor: 500 x 80
// platform

export function isOnPlatform(obj, platform) {
    const [x, y] = obj.pos;
    const [pX, pY] = platform.pos;
    const isAbovePlatform = (y + obj.dHeight <= pY);
    // check is the object is above the platform
    const touchingPlatTop = (y + obj.dHeight + obj.vel[1] >= pY);
    // check if the object's will fall below platform
    const inLeftBound = x + obj.dWidth - 10 >= pX;
    // Check if rightside of obj is still > platform leftside
    const inRightBound = x + 10 <= pX + platform.dWidth;
    // check if leftside of obj is < platform rightside

    return (isAbovePlatform && touchingPlatTop && inLeftBound && inRightBound)
};

export function projectileCollison(projectile, obj) {

    const shooter = projectile.shooter;
    const [pX, pY] = projectile.pos;
    const [oX, oY] = obj.pos;
    const hit = (
        oX + obj.dWidth - 15 >= pX &&
        pX + projectile.dWidth >= oX + 15 &&
        oY + obj.dHeight - 7 >= pY &&
        pY + projectile.dHeight >= oY + 7
    );

    return (obj.type !== shooter.type && hit);
}

export function rectCollision(obj1, obj2) {
    const [o1x, o1y] = obj1.pos;
    const [o2x, o2y] = obj2.pos;
    const [o1w, o1h] = [obj1.dWidth, obj1.dHeight];
    const [o2w, o2h] = [obj2.dWidth, obj2.dHeight];

    return (
        o2x + o2w - 15 >= o1x &&
        o1x + o1w >= o2x + 15 &&
        o2y + o2h - 7 >= o1y &&
        o1y + o1h >= o2y + 7
    )
}

export const PLATFORMS_POS = [

// pos restriction x:(0 ~ (10000 - 250)), y:((0 + 76) ~ (600 - 80 -40 - 76))
    [ 300, 300],
    [ 650, 400],
    [ 713, 269],
    [1200, 380],
    [1470, 300],
    [2300, 400],
    [2450, 295],
    [3040, 315],
    [3200, 420],
    [3385, 235],
    [4500, 345],
    [5788, 249],
    [5975, 398],
    [6197, 302],
    [6628, 316],
    [6812, 394],
    [7132, 261],
    [8000, 365],
    [8430, 396],
    [8583, 306],
    [8856, 397],
    [8992, 233],
    [9500, 400],
    [9600, 300],
    [9700, 200]
];
// base y: 600 - 80 - 64 = 456 min
// enemy: original(32 x 32) * 2 = 64 x 64
export const ENEMY_POS = [
    [ 500, 456],
    [ 735, 200],
    [ 798, 456],
    [1289, 304],
    [1950, 456],
    [2400, 335],
    [2676, 456],
    [3197, 250],
    [3283, 355],
    [3756, 456],
    [3912, 456],
    [4591, 280],
    [6034, 333],
    [6266, 237],
    [7262, 197],
    [7395, 456],
    [8012, 456],
    [8100, 300],
    [9560, 335],
    [9660, 235],
    [9760, 456]
];

// dims are all 576 * 324
// pos[y] must be  > 276 (600-324)
export const BG_1_POS = [
    [  85, 202],
    [ 310, 242],
    [ 945, 216],
    [1357, 235],
    [1604, 219],
    [2015, 223],
    [2490, 215],
    [2937, 203],
    [3268, 236],
    [3545, 213],
    [4130, 254],
    [4921, 215],
    [5631, 236],
    [6065, 206],
    [6724, 229],
    [7254, 211],
    [7615, 223],
    [7925, 205],
    [8315, 209],
    [8950, 232],
    [9613, 216],
    [9524, 201]
]

export const BG_2_POS = [
    [ 267, 236],
    [ 782, 216],
    [1320, 216],
    [1900, 236],
    [2467, 222],
    [3912, 245],
    [3580, 276],
    [5314, 216],
    [6347, 229],
    [6684, 234],
    [7157, 215],
    [8238, 203],
    [7841, 241],
    [8617, 229],
    [9064, 204],
    [9768, 201]
]
// bg3 > 200
export const BG_3_POS = [
    [ -50, 225],
    [ 568, 200],
    [1148, 243],
    [2137, 209],
    [1800, 216],
    [2418, 206],
    [3485, 221],
    [2792, 261],
    [3154, 217],
    [3906, 228],
    [4583, 206],
    [5314, 234],
    [5662, 211],
    [6410, 206],
    [7194, 247],
    [8346, 217],
    [7917, 222],
    [9234, 256]
]