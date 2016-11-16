/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  COMPLETE THE PATTERN #5 - EVEN LADDER
  https://www.codewars.com/kata/complete-the-pattern-number-5-even-ladder/train/javascript

  Description:

  Task:

  You have to write a function pattern which creates the following pattern upto n number of rows.

  If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
  If any odd number is passed as argument then the pattern should last upto the largest even number which is smaller than the passed odd number.
  If the argument is 1 then also it should return "".
  Examples:

  pattern(8):

  22
  4444
  666666
  88888888
  pattern(5):

  22
  4444
  Note: There are no spaces in the pattern

  Hint: Use \n in string to jump to next line
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function pattern(n) {
	var output = "";
	if (n < 2) {
		return '';
	}
	output = [];
	for (var k = 1; k <= n; k++) {
		if (k % 2 === 0) {
			for (var i = 1; i <= k; i++) {
				output.push(k);
			}
		}
	}
	for (var m = output.length - 1; m >= 0; m--) {
		if (output[m] !== output[m-1]) {
			output.splice(m, 0, '\n');
		}
	}
	if (output[0] === '\n') {
		output.splice(0, 1);
	}
	output = output.join('');
	output.replace('\n', '');
	return output;
}
