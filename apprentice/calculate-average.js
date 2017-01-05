/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  CALCULATE AVERAGE
  https://www.codewars.com/kata/calculate-average/train/javascript

  Write function avg which calaculates average of numbers in given list.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function find_average(array) {
  var args = Array.from(arguments)[0];
  return args.reduce(function(a, b) {return a + b;}) / args.length;
}
