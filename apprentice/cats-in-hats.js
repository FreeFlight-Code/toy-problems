/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  CATS IN HATS
  https://www.codewars.com/kata/cats-in-hats/train/javascript

  The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

  The Cat In The Hat is 2,000,000 cat units tall.

  Each cat is 2.5 times bigger than the cat underneath their hat.

  Find the total height of the cats if they are standing on top of one another.

  Counting starts from the Cat In The Hat

  n = the number of cats

  fix to 3 decimal places.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function height(n) {
  var heightOfThisCat = heightOfAllCats = 2000000;

  while(n > 0) {
    heightOfThisCat = 0.4 * heightOfThisCat;
    heightOfAllCats += heightOfThisCat;
    n--;
  }

  return parseFloat(heightOfAllCats).toFixed(3);
}
