/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();
  str = str.toLowerCase();

  let reversestr = str.split("").reverse().join("");

  if (str == reversestr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
