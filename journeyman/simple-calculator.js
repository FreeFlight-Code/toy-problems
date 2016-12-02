/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SIMPLE CALCULATOR
  https://www.codewars.com/kata/simple-calculator/train/javascript

  You are required to create a simple calculator that returns the result of addition ,subtraction , multiplication and
  division of two numbers . example

  calculator(1,2,"+"); //=> result will be 3
  if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

  example

  calculator(1,2,"&"); //=> result will be "unknown value"
  calculator(1,"k","*"); //=> result will be "unknown value"

  Good luck
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function calculator(a, b, sign){
  var doMath = {
    '+': function(a, b) {return a + b},
    '-': function(a, b) {return a - b},
    '*': function(a, b) {return a * b},
    '/': function(a, b) {return a / b}
  };
  return !doMath[sign] || isNaN(a) || isNaN(b) ? 'unknown value' : doMath[sign](a, b);
}
