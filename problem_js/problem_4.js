/**
 * Created by bob.dankert on 7/27/2016.
 */
solutions.problem_4 = function () {
  /*
   A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

   Find the largest palindrome made from the product of two 3-digit numbers.
   */

  var factor1 = 100;
  var factor2 = 100;
  var largest = 1;

  for (factor1 = 100; factor1 < 1000; factor1++) {
    for (factor2 = factor1; factor2 < 1000; factor2++) {
      var sum = factor1 * factor2;
      if (sum > largest && scratch.problem_4.is_palindromic(sum))
        largest = sum;
    }
  }

  scratch.problem_4 = {};
  return largest;
};

scratch.problem_4 = {};
scratch.problem_4.is_palindromic = function (value) {
  value = value.toString();
  if (value.length % 2 != 0) return false;
  return (value.substr(0, value.length / 2) == value.substr(value.length / 2).split('').reverse().join(''));
};