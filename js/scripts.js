

// When clicking the "Click here to get started!" button, this hides the initial intro page and takes you to the quiz.
$(document).ready(function() {
  $("form#intro").submit(function(event) {
    event.preventDefault();
    $(".intro").hide();
    $(".quiz").fadeIn();
  });
// If you want to go back to the quiz page, the "Try again" button hides the result and brings up the quiz again.
  $("form#tryagain").submit(function(event) {
    event.preventDefault();
    $(".quiz").fadeIn();
    $("#C, #Ruby, #python, ").hide();
  });
// Each question has three answers with an independent point value of 1-3 for each of the answers.
// After, we add the amounts, hide the quiz, then display the character based on the result.
// A "Try again" button is added to redo the quiz and hide the result, see notes on ln 13.
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    let answer1 = parseInt($("input:radio[name=question1]:checked").val());
    let answer2 = parseInt($("input:radio[name=question2]:checked").val());
    let answer3 = parseInt($("input:radio[name=question3]:checked").val());
    let answer4 = parseInt($("input:radio[name=question4]:checked").val());
    let answer1 = parseInt($("input:radio[name=question5]:checked").val());
    let result = add(answer1, answer2, answer3, answer4, answer5);

    if (result <= 5) {
      $("#C").show();
    } else if (result > 3 && result <= 10) {
      $("#Ruby").show();
    } else if (result > 10) {
      $("#Python").show();
    }
    $(".quiz").hide();
    $(document).ready(function() {
      
const age = parseInt(prompt("Are you old enough to code? Are you over 7?"));
    if (age >= 7) {
    $('#the-language').show();
    } else {
    $('#not-old').show();
    }
    });


  });
});