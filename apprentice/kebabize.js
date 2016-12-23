/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  KEBABIZE
  https://www.codewars.com/kata/kebabize/train/javascript

  Modify the kebabize function so that it converts a camel case string into a kebab case.

  kebabize('camelsHaveThreeHumps') // camels-have-three-humps
  kebabize('camelsHave3Humps') // camels-have-humps
  Notes: - the returned string should only contain lowercase letters
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function kebabize(str) {
  str = str.replace(/[A-Z]/g, function(x) {return '-' + x.toLowerCase();});
  return str.replace(/\d/g, '').replace(/^-/g, '');
}
