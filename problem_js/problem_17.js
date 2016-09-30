/**
 * Created by bob.dankert on 9/28/2016.
 */
/*
 If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

 If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


 NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115
 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British
 usage.
 */

solutions.problem_17 = function () {
  var result = 0;
  var max_number = 1000;

  console.log(scratch.problem_17.get_number_length(9));
  for (var number = 1; number <= max_number; number++) {
    result += scratch.problem_17.get_number_length(number);
  }

  scratch.problem_17 = {};
  return result;
};

scratch.problem_17 = {};
scratch.problem_17.get_number_length = function (number) {
  if (number <= 20)
    return scratch.problem_17.number_length[number];
  else if (number < 100)
    return scratch.problem_17.number_length[number % 10] + scratch.problem_17.number_length[number - (number % 10)];
  else if (number < 1000) {
    var result = scratch.problem_17.number_length[Math.floor(number / 100)]; /* number of hundreds */
    result += scratch.problem_17.number_length[100]; /* hundred */
    result += ((number % 100 == 0) ? 0 : 3); /* and - do not use if the number is divisible by 100 */
    result += scratch.problem_17.get_number_length(number % 100);
    return result;
  }
  else if (number == 1000)
    return scratch.problem_17.number_length[1] + scratch.problem_17.number_length[1000];

  return 0;
};

scratch.problem_17.number_length = {
  0: 0,
  1: 'one'.length,
  2: 'two'.length,
  3: 'three'.length,
  4: 'four'.length,
  5: 'five'.length,
  6: 'six'.length,
  7: 'seven'.length,
  8: 'eight'.length,
  9: 'nine'.length,
  10: 'ten'.length,
  11: 'eleven'.length,
  12: 'twelve'.length,
  13: 'thirteen'.length,
  14: 'fourteen'.length,
  15: 'fifteen'.length,
  16: 'sixteen'.length,
  17: 'seventeen'.length,
  18: 'eighteen'.length,
  19: 'nineteen'.length,
  20: 'twenty'.length,
  30: 'thirty'.length,
  40: 'forty'.length,
  50: 'fifty'.length,
  60: 'sixty'.length,
  70: 'seventy'.length,
  80: 'eighty'.length,
  90: 'ninety'.length,
  100: 'hundred'.length,
  1000: 'thousand'.length
};