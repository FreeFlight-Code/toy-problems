/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  PERSISTENT BUGGER
  https://www.codewars.com/kata/persistent-bugger

  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  For example:
   persistence(39) === 3 because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
   persistence(999) === 4 because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
   persistence(4) === 0 because 4 is already a one-digit number
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// var n = 39;

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
// persistence(n);
