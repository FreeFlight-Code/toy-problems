/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  MUMBLING
  https://www.codewars.com/kata/mumbling/train/javascript

  Description:

  This time no story, no theory. The examples below show you how to write function accum:

  Examples:

  accum("abcd");    // "A-Bb-Ccc-Dddd"
  accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt");    // "C-Ww-Aaa-Tttt"
  The parameter of accum is a string which includes only letters from a..z and A..Z.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function accum(s) {
  var mumble = s.split('');
  mumble = mumble.map(function(c, i, a) {
    var value = c.toUpperCase();
    for (var j = 0; j < i; j++) {
      value += c.toLowerCase();
    }
    return value;
  });

	return mumble.join('-');
}
