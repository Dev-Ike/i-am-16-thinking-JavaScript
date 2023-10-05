function colorChecker(color_arr, color) {
    for (let i = 0; i < color_arr.length; i++) {
        return (color_arr[i] === color)
        ? color_arr[i] + " : " + i
        : "Color not found! Pls, try another color name";
    }
}; // JavaScript function that helps to check for colors

const myColor = ["red", "blue", "green", "yellow", "black", "purple", "white", "gray", "cyan", "pink", "orange", "aqua", "celeste", "cerise"]; // myColor array

colorChecker(myColor, "red"); // Calling the colorChecker function with the following parameters

console.log(myColor); // This will console.log the function and return the value and it index