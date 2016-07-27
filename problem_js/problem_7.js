/**
 * Created by bob.dankert on 7/27/2016.
 */
solutions.problem_7 = function () {
  /*
   By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

   What is the 10 001st prime number?
   */

  var count = 0;
  var index = 1;

  while (count < 10001) {
    index++;
    if (scratch.problem_7.isPrime(index)) {
      count++;
    }
  }

  scratch.problem_7 = {};
  return index;
};

scratch.problem_7 = {};
scratch.problem_7.isPrime = function (value) {
  for (var i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};