/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  REPEATED SUBSTRING
  https://www.codewars.com/kata/repeated-substring/train/javascript

  Description:

  For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]

  Example #1:

  for string
  s = "ababab";

  the answer is
  ["ab", 3]

  Example #2:
  for string

  s = "abcde";
  the answer is

  ["abcde", 1]
  because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var sample = 'ababababab';
f(sample);

function f(s) {
  var t = '';
  var tIncrementerArray = s.split('');
  var kDeterminerArray = ['initial value']; // array must begin with some initial length or while loop code will never run
  var k = 0;

  while (kDeterminerArray.length !== 0) {
    // When correct value for t is found, kDeterminerArray will have only empty values. From the number of values, k is determined. Then kDeterminerArray will be filtered down to an empty string, ending the while loop. Then t and k are returned.

    t += tIncrementerArray.splice(0, 1);
    kDeterminerArray = s.split(t);
    k = kDeterminerArray.length - 1;

    kDeterminerArray = kDeterminerArray.filter(function(value) {
      return value !== '';
    });

  }

  return [t, k];
}
