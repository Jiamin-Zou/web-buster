export function loadSprite(src) {
    const img = new Image();
    img.src = src
    return img;
}

export function isOnPlatform(obj, platform) {
    const [x, y] = obj.pos;
    const [pX, pY] = platform.pos;
    const isAbovePlatform = (y + obj.dHeight <= pY);
    // check is the object is above the platform
    const touchingPlatTop = (y + obj.dHeight + obj.vel[1] >= pY);
    // check if the object's will fall below platform
    const inLeftBound = x + obj.dWidth - 10 >= pX
    const inRightBound = x + 10 <= pX + platform.dWidth;
    return (isAbovePlatform && touchingPlatTop && inLeftBound && inRightBound)

}

export const PLATFORMS_POS = [
// dims width x height
// player: original(32 x 38) * 2 = 64 x 76
// background: 10,000 x 600
// canvas: 800 x 600
// floor: 500 x 80
// platform = floor * 0.5 = 250 x 40

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
]