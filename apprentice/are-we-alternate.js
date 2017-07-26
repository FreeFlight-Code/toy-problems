/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    ARE WE ALTERNATE
    https://www.codewars.com/kata/are-we-alternate/train/javascript

    Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

    isAlt("amazon")
    // true
    isAlt("apple")
    // false
    isAlt("banana")
    // true
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function isAlt(str) {
  str = str.replace(/[aeiou]/gi, 'o').replace(/[^aeiou]/gi, 'n');
  return /nn|oo/.test(str) === false;
}