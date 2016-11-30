/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  ABBREVIATE A TWO WORD NAME
  https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

  Description:

  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

  The output should be two letters with a dot separating them.

  It should look like this:

  Sam Harris => S.H

  Patrick Feeney => P.F
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function abbrevName(name){
	return name.split(' ').map(function(c) {
	  return c[0].toUpperCase();
	}).join('.');
}
