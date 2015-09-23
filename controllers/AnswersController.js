yellowbeacon.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
  $scope.addAnswer = function() {
    $scope.question.answers.push({ text: $scope.answerText, comments: [], upvotes: $scope.upvoteCount, downvotes: $scope.downvoteCount });
    $scope.answerText = null;
  };
});
