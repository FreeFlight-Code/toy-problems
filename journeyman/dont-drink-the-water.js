/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    DON'T DRINK THE WATER
    https://www.codewars.com/kata/dont-drink-the-water/train/javascript

    Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

    ======================
    |   Density Chart    |
    ======================
    | Honey   | H | 1.36 |
    | Water   | W | 1.00 |
    | Alcohol | A | 0.87 |
    | Oil     | O | 0.80 |
    ----------------------

    [                            [
     ['H', 'H', 'W', 'O'],        ['O','O','O','O']
     ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
     ['H', 'H', 'O', 'O']         ['H','H','H','H']
     ]                           ]
    The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var sample = [['H', 'H', 'W', 'O'], ['W', 'W', 'O', 'W'], ['H', 'H', 'O', 'O']];

function separateLiquids(glass) {
  const liquids = ['O', 'A', 'W', 'H'],
        qrst = ['Q', 'R', 'S', 'T'],
        glassWidth = glass[0].length;
  
  const pourInFlatDish = JSON.parse('[' + JSON.stringify(glass).replace(/[\[\]]/gi, '') + ']');
  const replace = pourInFlatDish.map(l => qrst[liquids.indexOf(l)]);
  const sorted = replace.sort();
  const rereplace = sorted.map(l => liquids[qrst.indexOf(l)]);
  const re = new RegExp('.{' + glassWidth + '}', 'gi');
  const pourBackInGlass = rereplace.join('').match(re);
  
  return pourBackInGlass.map(l => l.split(''));
}


separateLiquids(sample);