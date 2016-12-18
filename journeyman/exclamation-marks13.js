/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  EXCLAMATION MARKS SERIES #13
  https://www.codewars.com/kata/exclamation-marks-series-number-13-count-the-number-of-exclamation-marks-and-question-marks-return-the-product/train/javascript

  Description:

  Count the number of exclamation marks and question marks, return the product. The string only contains ! and ?.
  Examples

  product("") === 0
  product("!") === 0
  product("!!") === 0
  product("!??") === 2
  product("!???") === 3
  product("!!!??") === 6
  product("!!!???") === 9
  product("!???!!") === 9
  product("!????!!!?") === 20
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function product(s){
  var q = s.split('').filter(function(c) {return c === '?';}).length;
  return q * (s.length - q);
}
