/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  MAXED OUT
  https://www.codewars.com/kata/maxed-out/train/javascript

  For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.

  If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

  You can assume that you will receive a valid array of numbers.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function maxedOut(arr) {
  arr = arr.map(function(c) {return Math.pow(c, 3);});
  var total = arr.reduce(function(a, b) {return a + b;});
  return total > Number.MAX_SAFE_INTEGER ? "You've pushed me to the max!" : total;
}
