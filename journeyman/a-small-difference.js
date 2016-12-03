/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  A SMALL DIFFERENCE
  https://www.codewars.com/kata/a-small-difference/train/javascript

  Write a function that given two strings determines if they differ by exactly one character.

  The difference may consist of one charater being added, removed or replaced, in which case the function must return true. In all other cases it must return false.

  Examples:

  tower / towe -> true
  tower / towner -> true
  tower / bower -> true
  tower / token -> false
  tower / tower -> false

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function oneCharDifference(s1, s2) {
  if (Math.abs(s1.length - s2.length) > 1) return false;

  var first = s1.length >= s2.length ? s1.split('') : s2.split('');
  var second = s1.length < s2.length ? s1.split('') : s2.split('');

  if (first.length !== second.length) {
    var indexOfDiff = first.map(function(c, i) {
      if (c === second[i]) return i;
    });
    indexOfDiff = indexOfDiff.indexOf(undefined);
    second.splice(indexOfDiff, 0, '?');
  }

  var diff = second.filter(function(c, i, a) {
    return c !== first[i];
  });

  return diff.length === 1;
}
