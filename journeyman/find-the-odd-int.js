/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
	FIND THE ODD INT
	https://www.codewars.com/kata/find-the-odd-int/train/javascript

	Given an array, find the int that appears an odd number of times.

	There will always be only one integer that appears an odd number of times.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var sample = [1, 2, 1, 2, -1, 2, 2, 4, 104, 104, 4, 1, 3, 1, 3];

function findOdd(A) {
  var count = 0;

  var min = Math.min.apply(null, A);
  var max = Math.max.apply(null, A);
  console.log(min, max);

  for (var i = min; i <= max; i++) {
    while (A.indexOf(i) !== -1) {
    	A.splice(A.indexOf(i), 1);
    	count++;
    }
    if (count % 2 === 1) return i;
  }
}

findOdd(sample);
