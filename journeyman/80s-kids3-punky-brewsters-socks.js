/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  80s KIDS #3: PUNKY BREWSTER'S SOCKS
  https://www.codewars.com/kata/80-s-kids-number-3-punky-brewsters-socks/train/javascript

  Punky loves wearing different colored socks, but Henry can't stand it.

  Given an array of different colored socks, return a pair depending on who was picking them out.

  Example:

  getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
  Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

  If there is no possible combination of socks, return an empty array.

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

function getSocks(name, socks) {
  if (name === 'Punky') {
    socks = socks.filter(function(c, i) {
      return c !== socks[i + 1];
    });
    return socks.length >= 2 ? [socks[0], socks[1]] : [];
  }
  if (name === 'Henry') {
    socks = socks.filter(function(c, i) {
      return socks.indexOf(c) !== socks.lastIndexOf(c);
    });
    return socks.length >= 2 ? [socks[0], socks[1]] : [];
  }
}
