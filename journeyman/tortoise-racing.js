/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  TORTOISE RACING
  https://www.codewars.com/kata/tortoise-racing/train/javascript

  Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A and furthermore has not finished her cabbage.

  When she starts, at last, she can see that A has a 70 feet lead but B speed is 850 feet per hour. How long will it take B to catch A?

  More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

  The result will be an array [h, mn, s] where h, mn, s is the time needed in hours, minutes and seconds (don't worry for fractions of second). If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++.

  Examples:

  race(720, 850, 70) => [0, 32, 18]
  race(80, 91, 37) => [3, 21, 49]
  Note: you can see some other examples in "Your test cases".
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function race(v1, v2, g) {
  if (v1 > v2) return null;

  var hours = g / (v2 - v1);
  var minutes = ((hours - Math.floor(hours)) * 60).toFixed(3);
  var seconds = ((minutes - Math.floor(minutes)) * 60).toFixed(3);

  return [Math.floor(hours), Math.floor(minutes), Math.floor(seconds)];
}


/*
  time = 25f * h / v1
  time = 50f * h / v2
  time = leadDistance * h / (v2 - v1)
*/
