/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  80s KIDS #4: LEGENDS OF THE HIDDEN TEMPLE

  https://www.codewars.com/kata/80-s-kids-number-4-legends-of-the-hidden-temple/train/javascript

  You've made it through the moat and up the steps of knowledge. You've won the temples games and now you're hunting for treasure in the final temple run. There's good news and bad news. You've found the treasure but you've triggered a nasty trap. You'll surely perish in the temple chamber.

  With your last movements, you've decided to draw an "X" marks the spot for the next archeologist.

  Given an odd number, n, draw an X for the next crew. Follow the example below.

  markSpot(5) ->

  X       X
    X   X
      X
    X   X
  X       X

  For a clearer understanding of the output, let '.' represent a space and \n the newline.
  X.......X\n
  ..X...X\n
  ....X\n
  ..X...X\n
  X.......X\n

  markSpot(3) ->

  X   X
    X
  X   X
  If n = 1 return 'X\n' and if you're given an even number or invalid input, return '?'.

  The output should be a string with no spaces after the final X on each line, but a \n to indicate a new line.

  Check out my other 80's Kids Katas:
  80's Kids #1: How Many Licks Does It Take
  80's Kids #2: Help Alf Find His Spaceship
  80's Kids #3: Punky Brewster's Socks
  80's Kids #4: Legends of the Hidden Temple
  80's Kids #5: You Can't Do That on Television
  80's Kids #6: Rock 'Em, Sock 'Em Robots
  80's Kids #7: She's a Small Wonder
  80's Kids #8: The Secret World of Alex Mack
  80's Kids #9: Down in Fraggle Rock
  80's Kids #10: Captain Planet
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function markSpot(n) {
  if (n > 0 && n % 2 === 1) {
    var counter = 0;
    var bigX = '';
    var leadDots = n;

    while (leadDots > 0) {
      counter++;
      var rowLength = counter + (3 * (counter - 1));
      var row = Array(rowLength).fill(' ').join('');
      row = row.replace(/^\s/, 'X').replace(/\s$/, 'X') + '\n';
      leadDots = n - (counter * 2 - 1);
      row = Array(leadDots).fill(' ').join('') + row;
      bigX = counter === 1 ? row : row + bigX + row;
    }
    return bigX;
  }

  else return '?';
}
