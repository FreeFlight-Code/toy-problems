/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  ALL STAR CODE CHALLENGE #1
  https://www.codewars.com/kata/all-star-code-challenge-number-1/train/javascript

  This Kata is intended as a small challenge for my students

  All Star Code Challenge #1

  Write a function, called sumPPG, that takes two NBA player objects and sums their PPG

  Examples:

  var iverson = { team: '76ers', ppg: 11.2 };
  var jordan =  { team: 'bulls', ppg: 20.2 };
  sumPPG(iverson, jordan); // => 31.4
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function expandedForm(num) {
  return num.toString().split('').map(function(c, i) {
    return +c * (Math.pow(10, num.toString().length - 1 - i));
  }).filter(function(c) {return c}).join(' + ');
}
