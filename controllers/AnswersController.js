yellowbeacon.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
  $scope.addAnswer = function() {
    $scope.question.answers.push({ text: $scope.answerText, comments: [], upvotes: 0, downvotes: 0, voteTotal: 0 });
    $scope.answerText = null;
  };

  $scope.addUpvote = function(answer) {
    var index = $scope.question.answers.indexOf(answer);
    $scope.question.answers[index].upvotes  += 1;
    $scope.question.answers[index].voteTotal  += 1;
  };

  $scope.addDownvote = function(answer) {
    var index = $scope.question.answers.indexOf(answer);
    $scope.question.answers[index].downvotes += 1;
    $scope.question.answers[index].voteTotal  -= 1;
  };
  //
  // $scope.voteTotal = function(answer) {
  //   var index = $scope.question.answers.indexOf(answer);
  //   return $scope.question.answers[index].upvotes - $scope.question.answers[index].downvotes;
  // };
});
