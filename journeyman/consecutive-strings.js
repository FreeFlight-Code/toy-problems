/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  CONSECUTIVE STRINGS
  https://www.codewars.com/kata/consecutive-strings/train/javascript

  You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

  Example:

  longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

  n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return '';

    function stringEmUp(index) {
      var stringOfStrings = '';
      for (var j = 0; j < k; j++) {
        stringOfStrings += strarr[index + j];
      }
      return stringOfStrings;
    }

    var finalString = '';
    for (var i = 0; i <= strarr.length - k; i++) {
      if ((stringEmUp(i)).length > finalString.length) {
        finalString = stringEmUp(i);
      }
    }
    return finalString;
}
