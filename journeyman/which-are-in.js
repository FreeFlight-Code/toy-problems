/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  WHICH ARE IN?
  https://www.codewars.com/kata/which-are-in/train/javascript

  Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

  Example 1:

  a1 = ["arp", "live", "strong"]

  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

  returns ["arp", "live", "strong"]

  Example 2:

  a1 = ["tarp", "mice", "bull"]

  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

  returns []

  Notes:

  Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

  Beware: r must be without duplicates.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function inArray(array1, array2) {
  var r = array1.map(function(c, index, arr) {
    var match = false;
    var re = new RegExp(c);
    for (var i = 0; i < array2.length; i++) {
      if (re.test(array2[i])) match = true;
    }
    if (match) return c;
  });

  return r.filter(function(c) {
    return c;
  }).sort();
}
