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

// yellowbeacon.filter('orderObjectBy', function() {
//   return function(input, attribute) {
//     if(!angular.isObject(input)) {
//       return input;
//     }
//
//     var array = [];
//     for(var objectKey in input) {
//       array.push(input[objectKey]);
//     }
//
//     array.sort(function(a, b) {
//       a = parseInt(a[attribute]);
//       b = parseInt(b[attribute]);
//       return a - b;
//     });
//     return array;
//   }
// });
