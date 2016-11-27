/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  THE OFFICE III - BROKEN PHOTOCOPIER
  https://www.codewars.com/kata/the-office-iii-broken-photocopier/train/javascript

  The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

  Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

  Given a string of binary, return the version the photocopier gives you as a string.

  The Office I - Outed
  The Office II - Boredeom Score
  The Office IV - Find a Meeting Room
  The Office V - Find a Chair
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var bin = '100010';

broken(bin);

function broken(x){
  return x.replace(/1/g, '2').replace(/0/g, '1').replace(/2/g, '0');
}
