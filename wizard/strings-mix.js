/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  STRINGS MIX
  https://www.codewars.com/kata/strings-mix/train/javascript

  Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

  s1 = "A aaaa bb c"

  s2 = "& aaa bbb c d"

  s1 has 4 'a', 2 'b', 1 'c'

  s2 has 3 'a', 3 'b', 1 'c', 1 'd'

  So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

  We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

  The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

  In the result, substrings will be in decreasing order of their length and when they have the same length sorted alphabetically (more precisely sorted by codepoint); the different groups will be separated by '/'.

  Hopefully other examples can make this clearer.

  s1 = "my&friend&Paul has heavy hats! &"
  s2 = "my friend John has many many friends &"
  mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

  s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
  s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
  mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

  s1="Are the kids at home? aaaaa fffff"
  s2="Yes they are here! aaaaa fffff"
  mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function mix(s1, s2) {
  var count = [{}, {}];

  Array.from(arguments).forEach(function(arg, i) {
    arg = arg.replace(/[^a-z]/g, '').split('');
    arg.forEach(function(val) {
      count[i][val] = count[i][val] + 1 || 1;
    });
  });

  for (var key in count[0]) {
    if (!count[1][key]) count[1][key] = 0;
  }
  for (var prop in count[1]) {
    if (!count[0][prop]) count[0][prop] = 0;
  }

  var arr = [];

  function stringIt(letter, num) {
    var string = '';
    for (var i = 0; i < num; i++) {
      string += letter;
    }
    return string;
  }

  for (var thing in count[0]) {
    var numPrefix = count[0][thing] > count[1][thing] ? '1' : count[1][thing] > count[0][thing] ? '2' : '=';
    var index = numPrefix === '=' ? 1 : +(numPrefix) - 1;
    arr.push(numPrefix + ':' + stringIt(thing, Number(count[index][thing])));
  }

  arr = arr.filter(function(c) {return c.length > 3;}).sort(function(a, b) {
    if (a.length === b.length) return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0;
    else return b.length - a.length;
  });

  return arr.join('/');
}
