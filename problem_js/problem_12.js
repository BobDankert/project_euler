/**
 * Created by bob.dankert on 7/29/2016.
 */

/*
 The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

 Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
 10: 1,2,5,10
 15: 1,3,5,15
 21: 1,3,7,21
 28: 1,2,4,7,14,28
 We can see that 28 is the first triangle number to have over five divisors.

 What is the value of the first triangle number to have over five hundred divisors?
 */

solutions.problem_12 = function () {
  var max_factors = 500;

  for (var index = 1; index < 100000; index++) {
    var tri_number = scratch.problem_12.getTriangleNumber(index);

    if (scratch.problem_12.getDivisorsCount(tri_number) > max_factors) {
      scratch.problem_12 = {};
      return tri_number;
    }

  }

  scratch.problem_12 = {};
  return 0;
};

scratch.problem_12 = {};
/**
 * This calculates the triangle number for the given index, ex. 7th triangle number = 28
 *
 * @param index
 * @returns {number}
 */
scratch.problem_12.getTriangleNumber = function (index) {
  return (index * (index + 1)) / 2;
};

/**
 * This gets the number of divisors for a given number
 *
 * @param value
 * @returns {number}
 */
scratch.problem_12.getDivisorsCount = function (value) {
  var limit = value;
  var number_of_divisors = 0;

  if (value == 1)
    return 1;

  for (var index = 1; index < limit; index++) {
    if (value % index == 0) {
      limit = value / index;
      if (limit != index) {
        number_of_divisors++;
      }
      number_of_divisors++;
    }
  }

  return number_of_divisors;
};