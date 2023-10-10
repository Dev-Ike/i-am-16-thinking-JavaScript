function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
} // JavaScript function that finds the longest string in a sentence

console.log(findLongestWordLength("This young boy is a web/software developer")); // This will console.log the function