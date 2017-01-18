$("#submit").click (function(){
  submitAnswer();
});

$("#answer").on('keyup', function (e) {
    //Detect Enter button
    if (e.keyCode == 13) {
        submitAnswer();
    }
});

$("#start-test").click(function(){
    generateTest();
})


var questions;
var currentQuestionCount;
var score;
var takingInput = true;

var cross = '<svg class="checkmark-wrong" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_wrong" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M16 16 36 36 M36 16 16 36" /></svg>';
var tick = '<svg class="checkmark-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_right" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>';

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
            //Show stuff
            $("#settings").addClass("hidden");
            $("#test").removeClass("hidden");
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

    if (answer != ""){

        if (takingInput){

            takingInput = false;
            if (checkAnswer(answer)){
                $("#tick-area").html(tick);
                score++;
            }
            else{
                $("#tick-area").html(cross);
                $("#question").html("<h1>" + questions[currentQuestionCount - 1][4] + "</h1>")
            }
            sleep (2000).then(() => {
                //has the user skipped?
                if (!takingInput){
                    //reset everything
                    $("#tick-area").html("");
                    $("#answer").val("");
                    nextQuestion();
                    takingInput = true;
                }
            });

        }
        else
        {
                $("#tick-area").html("");
                $("#answer").val("");
                nextQuestion();
                takingInput = true;
        }

    }

}

function checkAnswer(answer){

    return (questions[currentQuestionCount - 1][4].toLowerCase().trim().split(",").map(x => x.trim()).includes(answer));

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
