/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  EXCLAMATION MARKS SERIES #2
  https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence

  Description:

  Remove all exclamation marks from the end of sentence.
  Examples

  remove("Hi!") === "Hi"
  remove("Hi!!!") === "Hi"
  remove("!Hi") === "!Hi"
  remove("!Hi!") === "!Hi"
  remove("Hi! Hi!") === "Hi! Hi"
  remove("Hi") === "Hi"
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function remove(s){
  return s.replace(/!+$/g, '');
}
