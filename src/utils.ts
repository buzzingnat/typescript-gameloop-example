export function requireImage(source: string) {
    const image = new Image();
    image.src = source;
    return image;
}
