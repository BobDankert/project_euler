/**
 * Created by bob.dankert on 9/28/2016.
 */
/*
 2 ^ 15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

 What is the sum of the digits of the number 2 ^ 1000?
 */

solutions.problem_16 = function () {
  math.config({
    number: 'BigNumber',  // Default type of number:
                          // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 302         // Number of significant digits for BigNumbers - 302 because the 2^1000 is e302
  });

  var number = math.pow(math.bignumber(2), math.bignumber(1000));
  var result = 0;

  while (number > 0) {
    result = math.add(result, math.mod(number, math.bignumber(10)));
    number = math.floor(math.divide(number, math.bignumber(10)));
  }

  scratch.problem_16 = {};
  return result;
};

scratch.problem_16 = {};
