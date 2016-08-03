/**
 * Created by bob.dankert on 8/2/2016.
 */
/*
 The following iterative sequence is defined for the set of positive integers:

 n → n/2 (n is even)
 n → 3n + 1 (n is odd)

 Using the rule above and starting with 13, we generate the following sequence:

 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

 Which starting number, under one million, produces the longest chain?

 NOTE: Once the chain starts the terms are allowed to go above one million.
 */
solutions.problem_14 = function () {
  var limit = 1000000;
  var max_sequence_count = 0;
  var max_sequence_index = 0;
  for (var index = 1; index < limit; index++) {
    var test_count = scratch.problem_14.count_sequence_terms(index);
    if (test_count > max_sequence_count) {
      max_sequence_count = test_count;
      max_sequence_index = index;
    }
  }

  scratch.problem_14 = {};
  return max_sequence_index;
};

scratch.problem_14 = {};
// implementing a basic value cache decreases processing time by around 5-6 fold
scratch.problem_14.number_cache = {};
scratch.problem_14.count_sequence_terms = function(value) {
  var count = 1;
  var test = value;

  if (scratch.problem_14.number_cache.hasOwnProperty(test))
    return scratch.problem_14.number_cache[test];

  while (test > 1) {
    if (test % 2 == 0)
      test = test / 2;
    else
      test = (3*test) + 1;

    if (scratch.problem_14.number_cache.hasOwnProperty(test)) {
      scratch.problem_14.number_cache[value] = count + scratch.problem_14.number_cache[test];

      return count + scratch.problem_14.number_cache[test];
    }

    count++;
  }

  scratch.problem_14.number_cache[value] = count;
  return count;
};
