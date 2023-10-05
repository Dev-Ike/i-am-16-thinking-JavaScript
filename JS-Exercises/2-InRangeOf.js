function arrayFromRange (min, max) {
  for (let n = min; n <= max; n++)
  output.push(n);
  return output;
}

const output = []; // This is an empty array

console.log(arrayFromRange(1, 100)); // This will console.log the function