/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the string to lowercase to count both uppercase and lowercase vowels
  str = str.toLowerCase();

  // Initialize a counter for vowels
  let count = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // If the character is a vowel, increment the counter
    if ("aeiou".includes(str[i])) {
      count++;
    }
  }

  // Return the count of vowels
  return count;
}

module.exports = countVowels;

