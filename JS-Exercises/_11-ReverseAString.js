function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
    return reversedStr;
}; // JavaScript function that reverse a string from left to right

console.log(reverseString("Hello World")); // This will console.log the function