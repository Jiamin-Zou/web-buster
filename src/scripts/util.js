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
    [300, 300],
    [650, 400]
]