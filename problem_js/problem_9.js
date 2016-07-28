/**
 * Created by bob.dankert on 7/27/2016.
 */
solutions.problem_9 = function () {
  /*
   A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

   a^2 + b^2 = c^2
   For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

   There exists exactly one Pythagorean triplet for which a + b + c = 1000.
   Find the product abc.
   */

  var a, b;
  var desired_sum = 1000;
  var iterator = Math.ceil(desired_sum / 2);

  for (a = 1; a <= iterator; a++) {
    for (b = 2; b <= iterator; b++) {
      var test = a*a + b*b;
      if (scratch.problem_9.is_perfect_square(test) && (a+b+Math.sqrt(test) == desired_sum)) {
        scratch.problem_9 = {};
        return a * b * Math.sqrt(test);
      }
    }
  }

  // in case no answer is found
  scratch.problem_9 = {};
  return 0;
};

scratch.problem_9 = {};
scratch.problem_9.is_perfect_square = function (value) {
  var sqrt = Math.sqrt(value);
  return (Math.floor(sqrt) == sqrt)
};