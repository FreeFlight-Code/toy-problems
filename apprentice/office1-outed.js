/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  THE OFFICE 1 - OUTED
  https://www.codewars.com/kata/the-office-i-outed/train/javascript

  Description:

  Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

  In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

  Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

  Happiness rating will be total score / number of people in the room.

  Note that your boss is in the room (boss), their score is worth double its face value (but they are still just one person!).

  The Office II - Boredom Score
  The Office III - Broken Photocopier
  The Office IV - Find a Meeting Room
  The Office V - Find a Chair

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var coworkers = {'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8};
var jefe = 'katie';

outed(coworkers, jefe);

function outed(meet, boss){
  var points = meet[boss];
  var count = 0;
  for (var person in meet) {
    points += meet[person];
    count++;
  }
  return points / count <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
