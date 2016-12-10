/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  FIND THE MISSING LETTER
  https://www.codewars.com/kata/find-the-missing-letter/train/javascript

  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
  The array will always contain letters in only one case.

  Example:

  ['a','b','c','d','f'] -> 'e'
  ['O','Q','R','S'] -> 'P'
  Have fun coding it and please don't forget to vote and rank this kata! :-)

  I have also created other katas. Take a look if you enjoyed this kata!
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function findMissingLetter(array) {
  // create alphabet and determine case
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  if (array[0] === array[0].toUpperCase()) abc = abc.toUpperCase();

  // shorten abc array to match array array (but with missing letter, too)
  abc = abc.split('').splice(abc.indexOf(array[0]), array.length + 1);

  // shorten abc array again, removing all letters but the missing letter
  return abc.filter(function(c) {
    return array.indexOf(c) === -1;
  })[0];
}
