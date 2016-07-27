/**
 * Created by bob.dankert on 7/27/2016.
 */
solutions.problem_1 = function () {
  /*
   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

   Find the sum of all the multiples of 3 or 5 below 1000.
   */
  var sum = 0;
  for (var index = 0; index < 1000; index++) {
    if (index % 3 == 0 || index % 5 == 0)
      sum += index;
  }

  return sum;
};