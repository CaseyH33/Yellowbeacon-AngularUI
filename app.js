var yellowbeacon = angular.module('yellowbeacon', ['ui.router']);

yellowbeacon.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('questions', {
    url: "/questions",
    templateUrl: "partials/questions.html",
    controller: "QuestionsCtrl"
  });

  $stateProvider.state('question', {
    url: "question/:questionId",
    templateUrl: "partials/question.html",
    controller: 'AnswersCtrl'
  });
});
