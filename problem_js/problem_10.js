/**
 * Created by bob.dankert on 7/28/2016.
 */
/*
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
 */

solutions.problem_10 = function () {
  var sum = 0;
  var limit = 2000000;
  for (var index = 1; index <= limit; index++)
    if (scratch.problem_10.isPrime(index))
      sum += index;

  scratch.problem_10 = {};
  return sum;
};

scratch.problem_10 = {};
scratch.problem_10.isPrime = function (value) {
  for (var i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};