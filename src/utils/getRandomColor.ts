export function getRandomColor(red: number, green: number, blue: number) {
    // Red component is kept low or zero to ensure the color stays within green and blue spectrum
    const _red = Math.floor(Math.random() * red); // Range: 0-55
    const _green = Math.floor(Math.random() * green); // Range: 0-255
    const _blue = Math.floor(Math.random() * blue); // Range: 0-255


    // Convert the RGB values to a hexadecimal color string
    const color = `#${_red.toString(16).padStart(2, '0')}${_green.toString(16).padStart(2, '0')}${_blue.toString(16).padStart(2, '0')}`;
    
    return color;
}
