/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  CASE SWAPPING
  https://www.codewars.com/kata/case-swapping/train/javascript

  Description:

  Given a string, swap the case for each of the letters.

  e.g. CodEwArs --> cODeWaRS
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function swap(str){
  return str.replace(/[A-Za-z]/g, function(x) {
    var capLower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var lowerCap = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return capLower.charAt(lowerCap.indexOf(x));
  });
}
