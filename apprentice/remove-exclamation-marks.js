/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  REMOVE EXCLAMATION MARKS
  https://www.codewars.com/kata/remove-exclamation-marks/train/javascript


  Write function removeExclamationMarks which removes all exclamation marks from a given string.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function removeExclamationMarks(s) {
	return s.replace(/!/g, '');
}
