
$("#go").click(function(){
    $("#result").html("<i class=\"fa fa-spin fa-refresh\" aria-hidden=\"true\"></i>");
    $.get(
        "https://script.google.com/macros/s/AKfycbxpxvgz_h46k1zDmlGghANjL4uLiGUXCYrz2p_2nKXb-s8SFZM/exec",
        {query : $("#query").val()},
        function(data) {
            var word = JSON.parse(data);
            var table = "<table class=\"alt uniform fixed\">";

            if (word[3].toLowerCase().includes ("noun")){
                var forms = word[5].toLowerCase().split(",");

                //Embolden occurances of the query
                forms = forms.map(form => ((form.trim() == $("#query").val().trim()) ? "<b>" + form.trim() + "</b>" : form.trim()));
                
                //Does it exist in the singular?
                if (forms [0] != "n/a"){
                
                    table += "<tr><td><b>Nominative (s)</b></td><td>" + forms [0] + "</td></tr>"; 
                    table += "<tr><td><b>Vocative (s)</b></td><td>" + forms [1] + "</td></tr>"; 
                    table += "<tr><td><b>Accusative (s)</b></td><td>" + forms [2] + "</td></tr>"; 
                    table += "<tr><td><b>Genitive (s)</b></td><td>" + forms [3] + "</td></tr>"; 
                    table += "<tr><td><b>Dative (s)</b></td><td>" + forms [4] + "</td></tr>"; 
                    table += "<tr><td><b>Ablative (s)</b></td><td>" + forms [5] + "</td></tr>"; 
                
                }
                
                //Does it exist in the plural?
                if (forms [6] != "n/a"){
                    
                    table += "<tr><td><b>Nominative (p)</b></td><td>" + forms [6] + "</td></tr>"; 
                    table += "<tr><td><b>Vocative (p)</b></td><td>" + forms [7] + "</td></tr>"; 
                    table += "<tr><td><b>Accusative (p)</b></td><td>" + forms [8] + "</td></tr>"; 
                    table += "<tr><td><b>Genitive (p)</b></td><td>" + forms [9] + "</td></tr>"; 
                    table += "<tr><td><b>Dative (p)</b></td><td>" + forms [10] + "</td></tr>"; 
                    table += "<tr><td><b>Ablative (p)</b></td><td>" + forms [11] + "</td></tr>"; 
                    
                }
            }

            table += "</table>";

            $("#result").html("<h2><b>" + word[1] + "</b> </h2> <p>" + word[3] + "</p><h4>" + word[4] + "</h4><br/>" + table);
            
            

        }
    );
});

