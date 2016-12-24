/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SERIES OF INTEGERS FROM 0 TO N
  https://www.codewars.com/kata/series-of-integers-from-0-to-n/train/javascript

  Write a function generateIntegers that accepts a single argument n and generates an array containing the integers from 0 to n inclusive.

  For example, generateIntegers(3) should return [0, 1, 2, 3].

  n can be any integer greater than or equal to 0.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function generateIntegers(n) {
 return Array(n + 1).fill(null).map(function(c, i) {return i;});
}
