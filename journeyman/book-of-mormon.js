/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  THE BOOK OF MORMON
  https://www.codewars.com/kata/the-book-of-mormon/train/javascript

  Description:

  The Mormons are trying to find new followers and in order to do that they embark on missions.

  Each time they go on a mission, every Mormons converts a fixed number of people (reach) into followers. This continues and every freshly converted Mormon as well as every original Mormon go on another mission and convert the same fixed number of people each. The process continues until they reach a predefined target number of followers (input into the model).

  Converted Mormons are unique so that there's no duplication amongst them.

  Create a function Mormons(startingNumber, reach, target) that calculates how many missions Mormons need to embark on, in order to reach their target. While each correct solution will pass, for more fun try to make a recursive function.

  All model inputs are valid positive integers.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var startNum = 10;
var reachNum = 5;
var targetNum = 1000;

Mormons(startNum, reachNum, targetNum);

function Mormons(startingNumber, reach, target) {
  var missions = 0;

  function calledToServe(membership, reach, target) {
    if (startingNumber >= target) return missions;
    else {
      missions++;
      startingNumber += (startingNumber * reach);
      return calledToServe(startingNumber, reach, target);
    }
  }
  calledToServe(startingNumber, reach, target);

  return missions;
}
