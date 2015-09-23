yellowbeacon.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ text: factory.questionText, id: factory.questions, answers: [] });
    factory.text = null;
  };
  return factory;
});
