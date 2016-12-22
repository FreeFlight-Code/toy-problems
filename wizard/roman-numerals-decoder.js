/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  ROMAN NUMERALS DECODER
  https://www.codewars.com/kata/roman-numerals-decoder/train/javascript

  Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

  Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

  Example:

  solution('XXI'); // should return 21
  C# RomanDecode.Solution("XXI") -- should return 21
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function solution(roman) {
  // Key
  var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hund = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thou = ['', 'M', 'MM', 'MMM'];
  var search = ones.concat(tens).concat(hund).concat(thou);

  // Transform into number
  var numerals = roman.split('').map(function(c, i) {
    var place = Math.floor(search.indexOf(c) / 10);
    var digit = search.indexOf(c) % 10;
    return Math.pow(10, place) * digit;
  });
  // Roman numerals subtract smaller amounts to the left of larger amounts
  numerals = numerals.map(function(c, i, a) {
    return i < a.length - 1 && c < numerals[i + 1] ? c * -1 : c;
  });
  // Add up the values
  return numerals.reduce(function(a, b) {return a + b;})
}
