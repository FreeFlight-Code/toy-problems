/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  DUPLICATE

  Input is an array.
  Output should be the same array, duplicated.

  Examples:
    Input: [2, 4, 6, 8]
    Output: [2, 4, 6, 8, 2, 4, 6, 8]

    Input: ['cat', 'alligator', 'unicorn']
    Output: ['cat', 'alligator', 'unicorn', 'cat', 'alligator', 'unicorn']
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function duplicate(array) {
  // newArray is copy (not just alias) of array, allowing original array to remain unchanged
  var newArray = Array(array.length).fill(null).map(function(c, i) {
    return array[i];
  });
  // .map method duplicates the array, pushing values to back of array
  newArray.map(function(current) {
    return newArray.push(current);
  });
  // return the newArray 
  return newArray;
}
