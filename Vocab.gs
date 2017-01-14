function doGet(e) {
  
  var language = e.parameters.language;
  var query = e.parameters.query;
  
  //Check if we have stuff  
  if (query == undefined){
    return ContentService.createTextOutput("No Query");
  }
  
  if (language == undefined){
    return ContentService.createTextOutput("No Language");
  }  
  
  Logger.log(language);
  
  //Process them so that they look nice
  language = language.toString().toLowerCase().trim();
  query = query.toString().toLowerCase().trim();
  
  Logger.log(language);
  
  var result = ((language == "latin") ? searchLatin(query) : searchGreek(query));
  
  return ContentService.createTextOutput(result);
  
}

function searchLatin (query){
  
  var result = "";
  
  //Open up the sheet
  var sheetName = "Latin Vocabulary Sheet";
  var file, files = DriveApp.getFilesByName(sheetName); 
  
  if (files.hasNext ()){
    file = files.next(); 
  } else {
    return "";
  }
  
  var sheet = SpreadsheetApp.openById(file.getId());
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
  var sheetName = "Greek Vocabulary Sheet";
  var file, files = DriveApp.getFilesByName(sheetName); 
  
  if (files.hasNext ()){
    file = files.next(); 
  } else {
    return "";
  }
  
  var sheet = SpreadsheetApp.openById(file.getId());
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
