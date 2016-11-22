/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  FIND HEAVY BALL — UBERMASTER
  http://www.codewars.com/kata/find-heavy-ball-level-ubermaster/train/javascript

  Description:

  There are a n balls numbered from 0 to n-1 (0,1,2,3,etc). Most of them have the same weight, but one is heavier. Your task is to find it.

  Your function will receive two arguments - a scales object, and a ball count. The scales object has only one method:

  getWeight(left, right)
  where left and right are arrays of numbers of balls to put on left and right pan respectively.

  If getWeight returns -1 - left pan is heavier

  If getWeight returns 1 - right pan is heavier

  If getWeight returns 0 - both pans weigh the same

  So what makes this the "ubermaster" version of this kata? First, it's not restricted to 8 balls as in the previous versions - your solution has to work for 8-500 balls.

  Second, you can't use the scale any more than mathematically necessary. Here's a chart:

  ball count | uses
  -----------------
         0-9 |    2
       10-27 |    3
       28-81 |    4
      82-243 |    5
     244-500 |    6

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SAMPLE DATA
    • heaviest ball
    • ball_count
    • scales object with getWeight method

  var heaviest = 121;
  var ballCountNum = 222;
  var scalesObj = {
    getWeight: function(leftArray, rightArray) {
      if (leftArray.indexOf(heaviest) !== -1) return -1;
      else if (rightArray.indexOf(heaviest) !== -1) return 1;
      else return 0;
    }
  };

  findBall(scalesObj, ballCountNum);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  OVERLONG SOLUTION
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function findBall(scales, ball_count) {
  var array = Array(ball_count).fill(null).map(function(c, i) {
    return i;
  });

  function threeOrLess(arr) {
    if (arr.length === 1) return arr[0];
    else {
      var left = [arr[0]];
      var right = [arr[1]];
      var w = scales.getWeight(left, right);
      if (w === -1) return left[0];
      else if (w === 1) return right[0];
      else return arr[2];
    }
  }

  function nineOrLess(arr) {
    if (arr.length <= 3) return threeOrLess(arr);
    else {
      var weighThisMany = Math.ceil(arr.length / 3) * 2;
      var left = arr.filter(function(c, i) {
        return i < weighThisMany / 2;
      });
      var right = arr.filter(function(c, i) {
        return (i >= weighThisMany / 2 && i < weighThisMany);
      });
      var unweighed = arr.filter(function(c, i) {
        return i >= weighThisMany;
      });

      var w = scales.getWeight(left, right);
      if (w === -1) return threeOrLess(left);
      else if (w === 1) return threeOrLess(right);
      else return threeOrLess(unweighed);
    }
  }

  function twentySevenOrLess(arr) {
    if (arr.length <= 9) return nineOrLess(arr);
    else {
      var weighThisMany = Math.ceil(arr.length / 3) * 2;
      var left = arr.filter(function(c, i) {
        return i < weighThisMany / 2;
      });
      var right = arr.filter(function(c, i) {
        return (i >= weighThisMany / 2 && i < weighThisMany);
      });
      var unweighed = arr.filter(function(c, i) {
        return i >= weighThisMany;
      });

      var w = scales.getWeight(left, right);
      if (w === -1) return nineOrLess(left);
      else if (w === 1) return nineOrLess(right);
      else return nineOrLess(unweighed);
    }
  }

  function eightyOneOrLess(arr) {
    if (arr.length <= 27) return twentySevenOrLess(arr);
    else {
      var weighThisMany = Math.ceil(arr.length / 3) * 2;
      var left = arr.filter(function(c, i) {
        return i < weighThisMany / 2;
      });
      var right = arr.filter(function(c, i) {
        return (i >= weighThisMany / 2 && i < weighThisMany);
      });
      var unweighed = arr.filter(function(c, i) {
        return i >= weighThisMany;
      });

      var w = scales.getWeight(left, right);
      if (w === -1) return twentySevenOrLess(left);
      else if (w === 1) return twentySevenOrLess(right);
      else return twentySevenOrLess(unweighed);
    }
  }

  function twoHundredFortyThreeOrLess(arr) {
    if (arr.length <= 81) return eightyOneOrLess(arr);
    else {
      var weighThisMany = Math.ceil(arr.length / 3) * 2;
      var left = arr.filter(function(c, i) {
        return i < weighThisMany / 2;
      });
      var right = arr.filter(function(c, i) {
        return (i >= weighThisMany / 2 && i < weighThisMany);
      });
      var unweighed = arr.filter(function(c, i) {
        return i >= weighThisMany;
      });

      var w = scales.getWeight(left, right);
      if (w === -1) return eightyOneOrLess(left);
      else if (w === 1) return eightyOneOrLess(right);
      else return eightyOneOrLess(unweighed);
    }
  }

  function sevenHundredTwentyNineOrLess(arr) {
    if (arr.length <= 243) return twoHundredFortyThreeOrLess(arr);
    else {
      var weighThisMany = Math.ceil(arr.length / 3) * 2;
      var left = arr.filter(function(c, i) {
        return i < weighThisMany / 2;
      });
      var right = arr.filter(function(c, i) {
        return (i >= weighThisMany / 2 && i < weighThisMany);
      });
      var unweighed = arr.filter(function(c, i) {
        return i >= weighThisMany;
      });

      var w = scales.getWeight(left, right);
      if (w === -1) return twoHundredFortyThreeOrLess(left);
      else if (w === 1) return twoHundredFortyThreeOrLess(right);
      else return twoHundredFortyThreeOrLess(unweighed);
    }
  }

  return sevenHundredTwentyNineOrLess(array);

}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SHORTER SOLUTION
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function findBall(scales, ball_count) {
  var array = Array(ball_count).fill(null).map(function(c, i) {
    return i;
  });

  function weighSomeOfThese(arr) {
    if (arr.length === 1) return arr[0];
    else {
      var weighThisMany = Math.ceil(arr.length / 3) * 2;
      var left = arr.filter(function(c, i) {
        return i < weighThisMany / 2;
      });
      var right = arr.filter(function(c, i) {
        return (i >= weighThisMany / 2 && i < weighThisMany);
      });
      var unweighed = arr.filter(function(c, i) {
        return i >= weighThisMany;
      });

      var w = scales.getWeight(left, right);
      if (w === -1) return weighSomeOfThese(left);
      else if (w === 1) return weighSomeOfThese(right);
      else return weighSomeOfThese(unweighed);
    }
  }

  return weighSomeOfThese(array);
}
