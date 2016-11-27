/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  VOWEL COUNT
  https://www.codewars.com/kata/vowel-count/train/javascript

  Description:

  Return the number (count) of vowels in the given string.

  We will consider a, e, i, o, and u as vowels for this Kata.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function getCount(str) {
  var vowelsCount = 0;

  var	arr = str.split('');
  var vowels = arr.filter(function(c, i, a) {
  	return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
  });

  vowelsCount = vowels.length;

  return vowelsCount;
}
