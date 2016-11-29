/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SQUASH THE BUGS
  https://www.codewars.com/kata/squash-the-bugs/train/javascript

  Description:

  Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

  There will only be one 'longest' word.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function findLongest(str) {
  return str.split(' ').sort(function(a, b) {return b.length - a.length}).splice(0, 1).join().length;
};
