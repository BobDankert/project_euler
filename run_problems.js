/**
 * Created by bob.dankert on 7/27/2016.
 */
var solutions = {};
var scratch = {};

$(function () {
  var loaded_problems = [];
  var max_problems = parseInt($('#problem_list').data('maxProblems'));
  for (var index = 1; index <= max_problems; index++)
    $('#problem_list').append($('<li class="problem_solution" data-problem-index="' + index + '">Problem ' + index + '</li>').click(function () {
      var problem_index = $(this).data('problemIndex');
      run_problem(problem_index);
    }));

  /**
   * Run the given problem index
   *
   * @param problem_index
   */
  var run_problem = function (problem_index) {
    $.getScript('problem_js/problem_' + problem_index + '.js', function () {
      var start_time = performance.now();
      var result = solutions['problem_' + problem_index]();
      var end_time = performance.now();

      $('#results_header').text('Solution to problem ' + problem_index);
      $('#results_time').text('Elapsed Time: ' + Math.round((end_time - start_time)*100)/100 + ' (ms)');
      $('#results').text(result);
    });
  }
});