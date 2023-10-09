function colorChecker(color_arr, color) {
    for (let i = 0; i < color_arr.length; i++) {
        if (color_arr[i] === color) {
            return color_arr[i] + " : " + i 
        }
    } return "Color not found! Pls, try another color name"
}; // JavaScript function that helps to check for colors

const myColor = ["red", "blue", "green", "yellow", "black", "purple", "white", "gray", "cyan", "pink", "orange", "aqua", "celeste", "cerise"]; // myColor array

colorChecker(myColor, "red"); // Calling the colorChecker function with the specified parameters to check for the color

console.log(myColor); // This will console.log the myColor array