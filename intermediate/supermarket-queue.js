/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  THE SUPERMARKET QUEUE
  https://www.codewars.com/kata/the-supermarket-queue/train/javascript

  Description:

  There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

  The function has two input variables:

  customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
  n: a positive integer, the number of checkout tills.
  The function should return an integer, the total time required.

  Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free. So, for example:

  queueTime([5,3,4], 1)
  // should return 12
  // because when n=1, the total time is just the sum of the times

  queueTime([10,2,3,3], 2)
  // should return 10
  // because here n=2 and the 2nd, 3rd, and 4th people in the
  // queue finish before the 1st person has finished.
  N.B. You should assume that all the test input will be valid, as specified above.

  P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var sampleArr = [10, 2, 3, 3];
var sampleN = 2;

queueTime(sampleArr, sampleN);

function queueTime(customers, n) {
  var tills = Array(n).fill(0);
  var nextTill;
  console.log('tills', tills);
  console.log('customers', customers);

  var findNextOpenTill = function(tills) { // next open till is value of tills array that is smallest
    var shortestTime = Math.min.apply(null, tills);
    var indexOfNextTill = tills.indexOf(shortestTime);
    return indexOfNextTill;
  };

  while (customers.length !== 0) {
    nextTill = findNextOpenTill(tills); // nextTill is index of tills array with smallest value
    tills[nextTill] += Number(customers.splice(0, 1));
    console.log('tills', tills);
    console.log('customers', customers);
  }

  var totalTime = Math.max.apply(null, tills); // longest queue (largest value in tills array) represents total time
  return totalTime;
}
