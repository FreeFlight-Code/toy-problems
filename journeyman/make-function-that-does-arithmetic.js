/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  MAKE A FUNCTION THAT DOES ARITHMETIC!
  https://www.codewars.com/kata/make-a-function-that-does-arithmetic/train/javascript

  Description:

  Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

  The four operators are "add", "subtract", "divide", "multiply".

  All inputs will be integers, and a will always be the first number in the operation, and b always the second.

  A few examples:

  arithmetic(5, 2, "add") should return 7

  arithmetic(5, 2, "subtract") should return 3

  arithmetic(5, 2, "multiply") should return 10

  arithmetic(5, 2, "divide") should return 2.5

  Try to do it without using if statements!
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Solution #1
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function arithmetic(a, b, operator) {
  operator = ['+', '-', '*', '/'][['add', 'subtract', 'multiply', 'divide'].indexOf(operator)];
  return eval(a + operator + b);
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Solution #2
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function arithmetic(a, b, operator) {
  var mathObj = {
    'add': function(x, y) {return x + y;},
    'subtract': function(x, y) {return x - y;},
    'multiply': function(x, y) {return a * b;},
    'divide': function(x, y) {return x / y;}
  };
  return mathObj[operator](a, b);
}
