/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SIMPLE MULTIPLICATION
  https://www.codewars.com/kata/simple-multiplication/train/javascript

  This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function simpleMultiplication(x) {
	return x % 2 === 0 ? x * 8 : x * 9;
}
