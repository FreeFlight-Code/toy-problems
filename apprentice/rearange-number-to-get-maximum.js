/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  REARANGE NUMBER TO GET ITS MAXIMUM
  https://www.codewars.com/kata/rearange-number-to-get-its-maximum/train/javascript

  Description:

  Create function that takes one positive three digit integer and rearanges its digits to get maximum possible number. Assume that argument is integer. Return null if argument is not valid.

  maxRedigit(123); // returns 321
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var maxRedigit = function(num) {
  if (num.toString().length !== 3 || typeof num !== 'number') return null;
  else return Number(num.toString().split('').sort().reverse().join(''));
};
