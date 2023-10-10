function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialize(num - 1);
} // JavaScript function that returns the factorial of a number

console.log(factorialize(7)); // This will console.log the function