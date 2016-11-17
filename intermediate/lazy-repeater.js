/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  LAZY REPEATER
  https://www.codewars.com/kata/lazy-repeater/train/javascript

  Description:

  The makeLooper() function takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

  For example:
  var abc = makeLooper('abc');
  abc(); // should return 'a' on this first call
  abc(); // should return 'b' on this second call
  abc(); // should return 'c' on this third call
  abc(); // should return 'a' again on this fourth call
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var sample = 'abcde';

function makeLooper(str) {
  var index = -1; //start at -1 so we don't skip 0 index after we do index++

  function inner() {
    index++;
    if (index >= str.length) index = index % str.length; //loop back to start
    return str[index];
  }
  return inner;

}

var abc = makeLooper(sample);
abc();
abc();
abc();
abc();
abc();
abc();
