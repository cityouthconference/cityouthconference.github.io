var promptPassword;
$(document).ready(function() {
  promptPassword = prompt('Please enter the password to enter this page.');
  
  var url = "https://cityouth-conference.herokuapp.com/questions?password="+promptPassword;
  $.get(url).done(function(res) {
    console.log(res);
    var questions = res.questions;
    buildQuestionsList(questions);
  }).fail(function(res) {
    console.log(res);
    alert('Wrong password!');
  });
});

var buildQuestionsList = function(questions) {
  questions.filter(function(d) {
    return !d.answered;
  }).forEach(function(question) {
    $('#questions')
      .append('<p>'+question.question+'</p>')
      .append('<input class="form-control" type="text" placeholder="Reply" name="'+question.phonenumber+'" data-question="'+question.question+'"/>');
  });
};

var submit = function() {
  var inputs = $('input').filter(function() {
    return $(this).val();
  });
  if (inputs.length == 0) {
    alert('No questions were answered');
    
  } else {
    var dataArr = [];
    inputs.each(function() {
      dataArr.push({
        phonenumber: $(this).attr('name'),
        answer: $(this).val(),
        question: $(this).attr('data-question')
      });
    });
    var url = "https://cityouth-conference.herokuapp.com/answerquestions";
    $.post(url, {answers: dataArr, password: promptPassword})
    .done(function(res) {
      console.log('success!');
      $('#success').append('<p class="bg-success">Success! Message sent!</p>');
    }).fail(function(err) {
      console.log('dang', err);
      $('#fail').append('<p class="bg-danger">Oops, something went wrong: '+err+'</p>');
    })
  }
}