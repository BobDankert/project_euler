/**
 * Created by bob.dankert on 7/27/2016.
 */
solutions.problem_5 = function () {
  /*
   2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

   What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
   */

  var index = 10;
  var test_val = 20;
  while (index < 1000000000) {
    var largest_denominator = scratch.problem_5.largest_denominator(index, test_val);
    if (largest_denominator < test_val)
      index += largest_denominator;
    else {
      scratch.problem_5 = {};
      return index;
    }
  }

  scratch.problem_5 = {};
  return 0;
};

scratch.problem_5 = {};
scratch.problem_5.largest_denominator = function (value, loops) {
  for (var index = 1; index <= loops; index++) {
    if (value % index != 0)
      return index - 1;
  }
};
