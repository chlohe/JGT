generateTest();


var questions;

function generateTest(){

 $.get(
        "https://script.google.com/macros/s/AKfycbxpxvgz_h46k1zDmlGghANjL4uLiGUXCYrz2p_2nKXb-s8SFZM/exec",
        {test: "Yes",
         level: "GCSE",
         language : "Latin",
         questions : 10},
        function(data) {
            console.log(JSON.parse(data));
        });
        

}

function nextQuestion() {

    //$("#Question")

}