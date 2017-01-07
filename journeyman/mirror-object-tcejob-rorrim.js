/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  MIRROR OBJECT - TECJBO RORRIM
  https://www.codewars.com/kata/mirror-object-tcejbo-rorrim/train/javascript

  Can you mirror the properties on an object?

  Given an object with properties with no value

  abc: -
  arara: -
  xyz: -
  Return a new object that have the properties with its mirrored key!

  abc: cba
  arara: arara
  xyz: zyx
  "You cannot change the original object, because if you did that the reflection would change."
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const mirror = obj => {
  var o = {};
  for (var key in obj) {
    o[key] = key.split('').reverse().join('');
  }
  return o;
};
