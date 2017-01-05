/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  REVERSE VOWELS IN A STRING
  https://www.codewars.com/kata/reverse-vowels-in-a-string/train/javascript

  In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

  reverseVowels("Hello!"); // "Holle!"
  reverseVowels("Tomatoes"); // "Temotaos"
  reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function reverseVowels(str) {
  var vowels = str.split('').filter(function(c) {
    return /[aeiouAEIOU]/.test(c);
  }).reverse();

  return str.split('').map(function(c, i) {
    if (/[aeiouAEIOU]/.test(c)) {
      return vowels.splice(0, 1);
    }
    else return c;
  }).join('');
}
