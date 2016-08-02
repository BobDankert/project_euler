/**
 * Created by bob.dankert on 7/27/2016.
 */
/*
 The prime factors of 13195 are 5, 7, 13 and 29.

 What is the largest prime factor of the number 600851475143 ?
 */
solutions.problem_3 = function () {
  var max_prime_factor = 1;
  var max = 600851475143;
  var test_number = 3;
  while (test_number < max) {
    if (600851475143 % test_number == 0 && scratch.problem_3.isPrime(test_number)) {
      max_prime_factor = test_number;
      max = 600851475143 / test_number;
    }

    // we know it's not even, so skip ahead by 2
    test_number += 2;
  }

  scratch.problem_3 = {};
  return max_prime_factor;
};

scratch.problem_3 = {};
scratch.problem_3.isPrime = function (value) {
  for (var i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};