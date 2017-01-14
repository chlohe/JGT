function doGet(e) {
  
  var language = e.parameters.language;
  var query = e.parameters.query;
  var test = e.parameters.test;

  //Test or DVL query?
  if (test != undefined){
    var level = e.parameters.level; //GCSE? AS?
    var questions = e.parameters.questions; //No. Questions
   
    //Process them so that they look nice
    language = language.toString().toLowerCase().trim();
    level = level.toString().toLowerCase().trim();
    questions = parseInt(questions);
       
    
    if (level == undefined){
      return ContentService.createTextOutput("No Level");
    }
    if (questions == undefined){
      return ContentService.createTextOutput("No Questions");
    }
    
    
    result = ((language == "latin") ? generateLatinTest(level, questions) : generateGreekTest(level, questions));
    
  }
  
  else  
  {
    
    //Check if we have stuff  
    if (query == undefined){
      return ContentService.createTextOutput("No Query");
    }
    
    if (language == undefined){
      return ContentService.createTextOutput("No Language");
    }  
    
    //Process them so that they look nice
    language = language.toString().toLowerCase().trim();
    query = query.toString().toLowerCase().trim();
    
    result = ((language == "latin") ? searchLatin(query) : searchGreek(query));
 
  }
  
  return ContentService.createTextOutput(result);
  
}

function searchLatin (query){
  
  var result = "";
  
  //Open up the sheet
  var sheet = openSheet("Latin Vocabulary Sheet")
  var data = sheet.getActiveSheet().getDataRange().getValues();
  
  //Basic linear search
  for (var i = 1; i < data.length; i++){
    
    //Check for forms of the word (eg. a, ab)
    var forms = (data[i][1].toString() + "," + data[i][5].toString()).toLowerCase().split(",");
    
    for (var j = 0; j < forms.length; j++){
    
      if (forms[j].trim() == query){
      
        result += " " + JSON.stringify(data[i]);
        break; 
        
      }  

    }
    
  }
  
  //Return results
  if (result == ""){
    result = "No Results";
  } 
  
  return result;
  
}



function searchGreek (query){
  
  var result = "";
  
  //Open up the sheet
  var sheet = openSheet("Greek Vocabulary Sheet");
  var data = sheet.getActiveSheet().getDataRange().getValues();
  
  //Basic linear search
  for (var i = 1; i < data.length; i++){
    
    //Check for forms of the word (eg. a, ab)
    var forms = (data[i][1].toString() + "," + data[i][5].toString()).toLowerCase().split(",");
    
    for (var j = 0; j < forms.length; j++){
    
      if (forms[j].trim() == query){
      
        result += " " + JSON.stringify(data[i]);
        break; 
        
      }  

    }
    
  }
  
  //Return results
  if (result == ""){
    result = "No Results";
  } 
  
  return result;
  
}
