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
    const willBeOnPlatform = (y + obj.dHeight + obj.vel[1] >= pY);
    // check if the object's will fall below platform
    return (isAbovePlatform && willBeOnPlatform)

}