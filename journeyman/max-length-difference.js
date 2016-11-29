/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  MAXIMUM LENGTH DIFFERENCE
  https://www.codewars.com/kata/maximum-length-difference/train/javascript

  Description:

  You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

  Find max(abs(length(x) − length(y)))

  If a1 or a2 are empty return -1 in each language except in Haskell where you will return Nothing.

  Example:

  s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
  s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  mxdiflg(s1, s2) --> 13
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function mxdiflg(a1, a2) {
  var lengthsOf1 = a1.map(function(c, i) {return c.length});
  var lengthsOf2 = a2.map(function(c, i) {return c.length});

  var max1 = Math.max.apply(null, lengthsOf1);
  var min1 = Math.min.apply(null, lengthsOf1);
  var max2 = Math.max.apply(null, lengthsOf2);
  var min2 = Math.min.apply(null, lengthsOf2);

  return a1.length === 0 || a2.length === 0 ? -1 : Math.max(Math.abs(max1 - min2), Math.abs(min1 - max2));
}
