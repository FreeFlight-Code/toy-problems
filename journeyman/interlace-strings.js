/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  INTERLACE AN ARBITRARY NUMBER OF STRINGS
  https://www.codewars.com/kata/interlace-an-arbitrary-number-of-strings/train/javascript

  Write a function that takes an arbitrary number of strings and interlaces them (combines them by alternating characters from each string).

  For example combineStrings('abc', '123') should return 'a1b2c3'.

  If the strings are different lengths the function should interlace them until each string runs out, continuing to add characters from the remaining strings.

  For example combineStrings('abcd', '123') should return 'a1b2c3d'.

  The function should take any number of arguments and combine them.

  For example combineStrings('abc', '123', '£$%') should return 'a1£b2$c3%'.

  Note: if only one argument is passed return only that string. If no arguments are passed return an empty string.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

combineStrings(str1, str2, str3);

function combineStrings() {
  var newArr = [];
  var args = Array.from(arguments);
  var lengths = args.map(function(c, i) {
    return c.length;
  });
  var length = Math.max.apply(null, lengths);
  for (var j = 0; j < length; j++) {
    args.forEach(function(c, i) {
      newArr.push(c[j]);
    });
  }
  return newArr.filter(function(c, i) {
    return c !== undefined;
  }).join('');
}
