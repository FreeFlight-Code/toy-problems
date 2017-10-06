/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  DOUBLE CHAR
  https://www.codewars.com/kata/double-char/train/javascript

  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  doubleChar("String") ==> "SSttrriinngg"
  doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
  doubleChar("1234!_ ") ==> "11223344!!__  "
  
  Good Luck!
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Solution #1
function doubleChar(str) {
  return str.split('').map(c => c + c).join('');
}

// Solution #2
function doubleChar(str) {
  return str.replace(/./g, c => c + c);
}

// Solution #3
function doubleChar(str) {
  return str.replace(/./g, '$&$&');
}