function generateLatinTest(level, questions) {
  
  Logger.log("Question Generation Started");
  //Open up the sheet
  var sheet = openSheet("Latin Vocabulary Sheet")
  var data = sheet.getActiveSheet().getDataRange().getValues();
  var questionList = new Array();
  
  for (var i = 0; i < questions; i++){
   
    //Keep looping till we find a question (slow af but I've got a cold - TODO: quickly filter stuff)

    while (true){
      
      var question = data[Math.round(Math.random()*data.length)];
      //No duplicates
      if (questionList.indexOf(question) != -1){
       continue; 
      }
      
      if (level == "gcse" && question[0] == "GCSE"){
        questionList.push(question);
        break;
      }
      else if (level == "as"){
        questionList.push(question);
        break;
      }
    }

    
    
  }
  Logger.log(questionList);
  return JSON.stringify(questionList);
  
}

function generateGreekTest(level, questions) {
  
}
