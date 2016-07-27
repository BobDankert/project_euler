/**
 * Created by bob.dankert on 7/27/2016.
 */
solutions.problem_6 = function () {
  /*
   The sum of the squares of the first ten natural numbers is,

   1^2 + 2^2 + ... + 10^2 = 385
   The square of the sum of the first ten natural numbers is,

   (1 + 2 + ... + 10)^2 = 55^2 = 3025
   Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

   Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
   */

  var sum_square = 0;
  var square_sum = 0;
  var limit = 100;

  for (var index = 0; index <= limit; index++) {
    sum_square += Math.pow(index, 2);
    square_sum += index;
  }

  square_sum = Math.pow(square_sum, 2);

  return square_sum - sum_square;
};