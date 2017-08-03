/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    CONVERT STRING TO CAMEL CASE
    https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

    Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

    Examples:

    // returns "theStealthWarrior"
    toCamelCase("the-stealth-warrior") 

    // returns "TheStealthWarrior"
    toCamelCase("The_Stealth_Warrior")
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function toCamelCase(str){
  var result = ""
  for (var i=0; i<str.length; i++) {
    if ( (str.charAt(i) == '-') || (str.charAt(i) == '_') ) {
      i++
      result += str.toUpperCase().charAt(i)
    } else {
      result += str.charAt(i)
    }
  }
  return result
}  