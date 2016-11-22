/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  COUNT THE SMILEY FACES!
  https://www.codewars.com/kata/count-the-smiley-faces/train/javascript

  Description:
  Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

  Rules for a smiling face:
  -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
  -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
  -Every smiling face must have a smiling mouth that should be marked with either ) or D.
  Valid smiley face examples:
  :) :D ;-D :~)
  Invalid smiley faces:
  ;( :> :} :]

  Example cases:

  countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
  countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
  countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

  Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array)

  Happy coding!
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var sample = [';D', ':-(', ':-)', ';~)'];

countSmileys(sample);

function countSmileys(arr) {
  arr = arr.map(function(c, i) {
    return c = c.replace(/[:;][-~]?[D)]/, 'smile');
  }).filter(function(c, a) {
    return c === 'smile';
  });

  return arr.length;
}
