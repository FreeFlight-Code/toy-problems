/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  COMPLETE SERIES
  https://www.codewars.com/kata/complete-series/train/javascript

  Description:

  This is what the outputs should be based on the inputs
  inputs        outputs
  [0,1]   ->    [0,1]
  [1,4,6] ->    [0,1,2,3,4,5,6]
  [3,4,5] ->    [0,1,2,3,4,5]
  if the numbers in the array provided are not in order you should order them, but if a value repeats, then you must return an array with only one item, and the value of that item must be 0. like this

  inputs        outputs
  [2,1]     ->  [0,1,2]
  [1,4,4,6] ->  [0]
  Notes: all numbers are positive integers.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function completeSeries(x) {
	var max = Math.max.apply(null, x);
	var filtered = x.filter(function(c, i, a) {
	  return i === a.indexOf(c);
	});
	if (filtered.length !== x.length) return [0];
	else return Array(max + 1).fill(null).map(function(c, i) {
	  return i;
	});
}
