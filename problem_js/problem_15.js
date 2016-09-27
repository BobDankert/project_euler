/**
 * Created by bob.dankert on 8/3/2016.
 */
/*
 Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6
 routes to the bottom right corner.

 rrdd
 rdrd
 rddr
 drrd
 drdr
 ddrr

 How many such routes are there through a 20×20 grid?
 */

solutions.problem_15 = function () {
  var square_size = 20;

  // create and fill the array with all 1's
  var path_matrix = [];
  for (var index = 0; index <= square_size; index++)
    path_matrix.push(Array(square_size + 1).fill(1));

  for (var x_pos = square_size-1; x_pos >= 0; x_pos--) {
    for (var y_pos = square_size - 1; y_pos >= 0; y_pos--) {
      if (x_pos == y_pos)
        path_matrix[x_pos][y_pos] = path_matrix[x_pos + 1][y_pos] * 2;
      else
        path_matrix[x_pos][y_pos] = path_matrix[x_pos + 1][y_pos] + path_matrix[x_pos][y_pos + 1];
    }
  }

  scratch.problem_15 = {};
  return path_matrix[0][0];
};

scratch.problem_15 = {};
