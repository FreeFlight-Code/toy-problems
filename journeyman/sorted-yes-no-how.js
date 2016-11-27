/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SORTED? YES? NO? HOW?
  https://www.codewars.com/kata/sorted-yes-no-how/train/javascript

  Description:

  Implement the method isSortedAndHow, which accepts an array of integers, and returns one of the following:

  'yes, ascending' - if the numbers in the array are sorted in an ascending way
  'yes, descending' - if the numbers in the array are sorted in a descending way
  'no'
  You can assume the array will always be valid, and there will always be one correct answer.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function isSortedAndHow(array) {
  var sorted = 'yes, ascending';
  array.forEach(function(c, i, a) {
    if (i < a.length - 1 && c > a[i + 1]) sorted = '?';
  });
  if (sorted === '?') {
    sorted = 'yes, descending';
    array.forEach(function(curr, ind, arr) {
      if (ind < arr.length - 1 && curr < arr[ind + 1]) sorted = 'no';
    });
  }

  return sorted;
}
