/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  FIND FACTORS OF A NUMBER
  https://www.codewars.com/kata/find-factors-of-a-number/train/javascript

  Description:

  Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

  If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

  For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function factors(x) {
  if (x < 1 || x !== Math.floor(x)) {
  	return -1;
  }
  else {
  	var newArr = [];
  	for (var i = x; i >=1; i--) {
  		if (x % i === 0) {
  			newArr.push(i);
  		}
  	}
  	return newArr;
  }
}
