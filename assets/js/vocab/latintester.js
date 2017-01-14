$("#submit").click (function(){
  submitAnswer();
});

$("#answer").on('keyup', function (e) {
    //Detect Enter button
    if (e.keyCode == 13) {
        submitAnswer();
    }
});

generateTest();


var questions;
var currentQuestionCount;
var score;

function generateTest(){

 $.get(
        "https://script.google.com/macros/s/AKfycbxpxvgz_h46k1zDmlGghANjL4uLiGUXCYrz2p_2nKXb-s8SFZM/exec",
        {test: "Yes",
         level: "GCSE",
         language : "Latin",
         questions : 10},
        function(data) {
            questions = JSON.parse(data);
            //console.log(questions);
            currentQuestionCount = 0;
            score = 0;
            nextQuestion();
        });

}

function nextQuestion() {

    if (currentQuestionCount == questions.length){
        $("#question-area").html("<h1> You scored " + score + " out of "+ questions.length + "</h1>")
    }
    else
    {
        $("#question").html(questions[++currentQuestionCount - 1][1]);
    }

}

function submitAnswer (){

    var answer = $("#answer").val().trim().toLowerCase();
    if (checkAnswer(answer)){
        alert ("YAY");
        score++;
    }
    else{
        alert ("NAY");
    }
    $("#answer").val("");
    nextQuestion();
    
}

function checkAnswer(answer){

    return (questions[currentQuestionCount - 1][4].toLowerCase().trim().split(",").map(x => x.trim()).includes(answer));

}