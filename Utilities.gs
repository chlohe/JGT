function openSheet(sheetName) {
  
  var file, files = DriveApp.getFilesByName(sheetName); 
  
  if (files.hasNext ()){
    file = files.next(); 
  } else {
    return "";
  }
  
  return SpreadsheetApp.openById(file.getId());
  
}

function clearLogs (){

  Logger.clear();
  
}