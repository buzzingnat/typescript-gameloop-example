export function requireImage(source) {
    const image = new Image();
    image.src = source;
    return image;
}
