/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  DASHATIZE IT
  https://www.codewars.com/kata/dashatize-it/train/javascript

  Description:

  Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

  Ex:
  dashatize(274) -> '2-7-4'
  dashatize(6815) -> '68-1-5'
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var sample = 274;

function dashatize(num) {
  num = num.toString().split('').map(function(curr, ind) {
    if (curr % 2 === 1) return '-' + curr + '-';
    else return curr;
  }).join('').replace(/\-\-/g, '-').replace(/^\-/g, '').replace(/\-$/g, '');
  return num;
}

dashatize(sample);
