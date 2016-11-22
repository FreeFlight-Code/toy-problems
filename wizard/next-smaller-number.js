/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  NEXT SMALLER NUMBER WITH THE SAME DIGITS
  https://www.codewars.com/kata/next-smaller-number-with-the-same-digits/train/javascript

  Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

  For example:

  nextSmaller(21) == 12
  nextSmaller(531) == 513
  nextSmaller(2071) == 2017
  Return -1, when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

  nextSmaller(9) == -1
  nextSmaller(111) == -1
  nextSmaller(135) == -1
  nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
  some tests will include very large numbers.
  test data only employs positive integers.

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function nextSmaller(num) {
  // The idea is to start at the last digit and look left until the next number is bigger than the one before. This is the bigSwitcher. Looking back to the right of bigSwitcher, out of all the numbers that are smaller than bigSwitcher, the largest of these is the smallSwitcher. Make bigSwitcher and smallSwitcher switch places. Then reorder all digits to the right of smallSwitcher, from largest to smallest. That is the basic idea. However, I used .split() and .reverse() because it was easier to manipulate things that way.
  var numArray = num.toString().split('').reverse();
  var bigSwitcher = false;
  var indexOfCutoff = 1;
  while (!bigSwitcher && indexOfCutoff < numArray.length) {
    if (numArray[indexOfCutoff - 1] < numArray[indexOfCutoff]) {
      bigSwitcher = numArray[indexOfCutoff];
    }
    else indexOfCutoff++;
  }
  if (!bigSwitcher) return -1;

  var reorderTheseNums = numArray.filter(function(c, i) {
    return i <= indexOfCutoff;
  });

  var smallSwitcher = reorderTheseNums.filter(function(c, i) {
    return Number(c < bigSwitcher);
  });
  smallSwitcher = Math.max.apply(null, smallSwitcher).toString();
  reorderTheseNums.splice(reorderTheseNums.indexOf(smallSwitcher), 1);
  reorderTheseNums = reorderTheseNums.sort(function(a, b) {
    return a - b;
  });
  reorderTheseNums.push(smallSwitcher);
  reorderTheseNums = reorderTheseNums.map(function(c, i) {
    return numArray[i] = c; // this line alters numArray
  });

  numArray = numArray.reverse();
  if (Number(numArray[0]) === 0) return -1;
  else return Number(numArray.join(''));
}
