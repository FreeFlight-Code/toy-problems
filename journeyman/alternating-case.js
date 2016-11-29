/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  ALTERNATING CASE
  https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/train/javascript

  altERnaTIng cAsE <=> ALTerNAtiNG CaSe

  Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

String.prototype.toAlternatingCase = function() {
  return this.replace(/\w/g, function(x) {
    return x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase();
  });
};
