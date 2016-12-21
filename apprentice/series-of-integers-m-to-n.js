/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SERIES OF INTEGERS FROM M TO N
  https://www.codewars.com/kata/series-of-integers-from-m-to-n/train/javascript

  Write a function generateIntegers/generate_integers that accepts two arguments m/$m and n/$n and generates an array containing the integers from m to n inclusive.

  For example, generateIntegers(2, 5)/generate_integers(2, 5) should return [2, 3, 4, 5].

  m/$m and n/$n can be any integers greater than or equal to 0.

  n/$n will always be greater than or equal to m/$m.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function solution(number){
  var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hund = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thou = ['', 'M', 'MM', 'MMM'];
  var otht = [ones, tens, hund, thou];

  rNum = number.toString().split('').reverse().map(function(c, i) {
    return otht[i][+c];
  });

  return rNum.reverse().join('');
}
