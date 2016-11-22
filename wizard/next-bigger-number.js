/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  NEXT BIGGER NUMBER WITH THE SAME DIGITS
  http://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript

  You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

  nextBigger(12)==21
  nextBigger(513)==531
  nextBigger(2017)==2071
  If no bigger number can be composed using those digits, return -1:

  nextBigger(9)==-1
  nextBigger(111)==-1
  nextBigger(531)==-1
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function nextBigger(num) {
  // The idea is to start at the last digit and look left until the next number is smaller than the one before. This is the smallSwitcher. Looking back to the right of smallSwitcher, out of all the numbers that are bigger than smallSwitcher, the smallests of these is the bigSwitcher. Make smallSwitcher and bigSwitcher switch places. Then reorder all digits to the right of bigSwitcher, from smallest to biggest. That is the basic idea. However, I used .split() and .reverse() because it was easier to manipulate things that way.
  var numArray = num.toString().split('').reverse();
  var smallSwitcher = false;
  var indexOfCutoff = 1;
  while (!smallSwitcher && indexOfCutoff < numArray.length) {
    if (numArray[indexOfCutoff - 1] > numArray[indexOfCutoff]) {
      smallSwitcher = numArray[indexOfCutoff];
    }
    else indexOfCutoff++;
  }
  if (!smallSwitcher) return -1;

  var reorderTheseNums = numArray.filter(function(c, i) {
    return i <= indexOfCutoff;
  });

  var bigSwitcher = reorderTheseNums.filter(function(c, i) {
    return Number(c > smallSwitcher);
  });
  bigSwitcher = Math.min.apply(null, bigSwitcher).toString();
  reorderTheseNums.splice(reorderTheseNums.indexOf(bigSwitcher), 1);
  reorderTheseNums = reorderTheseNums.sort(function(a, b) {
    return b - a;
  });
  reorderTheseNums.push(bigSwitcher);
  reorderTheseNums = reorderTheseNums.map(function(c, i) {
    return numArray[i] = c; // this line alters numArray
  });

  numArray = numArray.reverse();
  if (Number(numArray[0]) === 0) return -1;
  else return Number(numArray.join(''));
}
