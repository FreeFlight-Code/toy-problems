/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
SIMPLE FUN #30: STRINGS CONSTRUCTION
https://www.codewars.com/kata/simple-fun-number-30-strings-construction


Description:

How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.
Example

For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.
Input/Output

[input] string A

String to construct, A contains only lowercase English letters.

Constraints: 3 ≤ A.length ≤ 9.
[input] string B

String containing needed letters, B contains only lowercase English letters.

Constraints: 3 ≤ B.length ≤ 50.
[output] an integer
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var strA = 'abcc';
var strB = 'aabbcccdc';


stringsConstruction(strA, strB);


function stringsConstruction(A, B) {
  var arrA = A.split('');
  var arrB = B.split('');

  function howManyChars(char, arr) {
    return arr.filter(function(x) {return x === char}).length;
  }

  var multiples = arrA.map(function(c) {return howManyChars(c, arrA)});
  var availables = arrA.map(function(c, i) {
    return howManyChars(c, arrB) / multiples[i];
  });

  // smallest integer among availables array represents how many times A is in B
  return Math.floor(Math.min.apply(Math, availables));
}
