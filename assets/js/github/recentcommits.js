
$.ajax({
  url: "https://api.github.com/repos/peterthehe/JGT/commits?sha=master",
  context: document.body
}).done(function(resp) {

    var result = "";

    for (var i = 0; i < 10; i++){
      
        var date = resp[i].commit.author.date.split ("T")[0];
        var message = resp[i].commit.message;
        result += "<tr><td style=\"white-space: nowrap;\">" + date + "</td><td>" + message + "</td></tr>"
    }

    $("#commits").html(result);

});
