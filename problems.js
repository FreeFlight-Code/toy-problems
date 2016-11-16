/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  PERSISTENT BUGGER
  https://www.codewars.com/kata/persistent-bugger

  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  For example:
   persistence(39) === 3 because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
   persistence(999) === 4 because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
   persistence(4) === 0 because 4 is already a one-digit number
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var sample = 39;

function persistence(num) {
	var timesToMultiply = 0;
	if (isNaN(num)) {
		timesToMultiply = num[1];
		num = num[0];
	}
	if (num.toString().length === 1) return timesToMultiply;
	else  {
		num = num.toString().split('');
		num = num.reduce(function(a, b) {
			return a * b;
		});
		timesToMultiply++;
		num  = [num, timesToMultiply];
		// return num;
		return persistence(num);
	}
}

persistence(sample);




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
