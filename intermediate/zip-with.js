
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  zipWITH
  https://www.codewars.com/kata/zipwith/train/javascript

  Description:

  Implement zipWith / zip_with

  zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
  The function value is one new array.

  If the arrays are of unequal length, the output will only be as long as the shorter one.
  (Values of the longer array are simply not used.)

  Inputs should not be modified.

  Examples

  zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
  zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

  zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
  zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
  Input validation

  Assume all input is valid.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// sample data:
var max = Math.max;
var pow = Math.pow;
var plus = (a,b) => a+b;
var sampleA0 = [1, 2, 3];
var sampleA1 = [2, 4, 6, 8, 10, 12];

// invoke zipWith
zipWith(pow, sampleA0, sampleA1);

// define zipWith
function zipWith(fn, a0, a1) {
  var shortArray = a0, longArray = a1;

  if (a0.length > a1.length) {
    shortArray = a1;
    longArray = a0;
  }

  return shortArray.map(function(current, index) {
    return fn(current, longArray[index]);
  });
}