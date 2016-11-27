◊/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  WHITE OR BLACK?
  https://www.codewars.com/kata/white-or-black/train/javascript

  Description:

  In this kata you have a chess board 8x8. Create a function

  function mineColor(line, number)
  that calculate the color of the field and returns it(white / black)

  Examples:

  mineColor(a, 8) ==> 'white'
  mineColor(b, 1) ==> 'white'
  mineColor(a, 1) ==> 'black'
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function mineColor(line, number) {
  var aceg = ['white', 'black'];
  var bdfh = ['black', 'white'];
  if (['a', 'c', 'e', 'g'].indexOf(line) !== -1) return aceg[number % 2];
  else return bdfh[number % 2];
}
