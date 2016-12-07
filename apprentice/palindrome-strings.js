/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  PALINDROME STRINGS
  https://www.codewars.com/kata/palindrome-strings/train/javascript

  A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.

  true == is_palindrome("anna")
  false == is_palindrome("walter")
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Solution #1 (filter):
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function isPalindrome(s) {
  var simplified = s.toString().toLowerCase().split('');
  simplified = simplified.filter(function(val) {
    return /[a-z]/.test(val);
  });

  return !!s && simplified.join('') === simplified.reverse().join('');
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Solution #2 (pure RegEx):
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function isPalindrome(s) {
  var simplified = s.toString().toLowerCase().replace(/[^a-z]/g, '');
  return !!s && simplified === simplified.split('').reverse().join('');
}
