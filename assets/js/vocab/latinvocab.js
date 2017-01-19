
$("#go").click(dvlQuery);
$("#query").on('keyup', function (e) {
    //Detect Enter button
    if (e.keyCode == 13) {
        dvlQuery();
    }
});

function dvlQuery(){

    $("#result").html("<i class=\"fa fa-spin fa-refresh\" aria-hidden=\"true\"></i>");
    $.get(
        "https://script.google.com/macros/s/AKfycbxpxvgz_h46k1zDmlGghANjL4uLiGUXCYrz2p_2nKXb-s8SFZM/exec",
        {query : $("#query").val(),
         language : "Latin"},
        function(data) {

            var word = "";
            if (data == "No Results"){
                $("#result").html("<h2> No Results </h2>");
				return;
            }
            
            word = JSON.parse(data);

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

                table += "</table>";
            }

            else if (word[3].toLowerCase().includes("adjective")){

                var forms = word[6].toLowerCase().split(",");
                var compSupDefinitions = word[7].toLowerCase().split(",");
                
                if (forms[1] != undefined){

                    //Embolden occurances of the query
                    forms = forms.map(form => ((form.trim() == $("#query").val().trim()) ? "<b>" + form.trim() + "</b>" : form.trim()));
        
                    table += "<tr><th></th><th> Masc. </th><th> Fem. </th><th> Neut. </th></tr>";
                    table += "<tr><td><b>Nom. (s)</b></td><td>" + forms [0] + "</td><td>" + forms [10] + "</td><td>" + forms [20] + "</td></tr>"; 
                    table += "<tr><td><b>Acc. (s)</b></td><td>" + forms [1] + "</td><td>" + forms [11] + "</td><td>" + forms [21] + "</td></tr>"; 
                    table += "<tr><td><b>Gen. (s)</b></td><td>" + forms [2] + "</td><td>" + forms [12] + "</td><td>" + forms [22] + "</td></tr>"; 
                    table += "<tr><td><b>Dat. (s)</b></td><td>" + forms [3] + "</td><td>" + forms [13] + "</td><td>" + forms [23] + "</td></tr>"; 
                    table += "<tr><td><b>Abl. (s)</b></td><td>" + forms [4] + "</td><td>" + forms [14] + "</td><td>" + forms [24] + "</td></tr>"; 
                    table += "<tr><td><b>Nom. (p)</b></td><td>" + forms [5] + "</td><td>" + forms [15] + "</td><td>" + forms [25] + "</td></tr>"; 
                    table += "<tr><td><b>Acc. (p)</b></td><td>" + forms [6] + "</td><td>" + forms [16] + "</td><td>" + forms [26] + "</td></tr>"; 
                    table += "<tr><td><b>Gen. (p)</b></td><td>" + forms [7] + "</td><td>" + forms [17] + "</td><td>" + forms [27] + "</td></tr>"; 
                    table += "<tr><td><b>Dat. (p)</b></td><td>" + forms [8] + "</td><td>" + forms [18] + "</td><td>" + forms [28] + "</td></tr>"; 
                    table += "<tr><td><b>Abl. (p)</b></td><td>" + forms [9] + "</td><td>" + forms [19] + "</td><td>" + forms [29] + "</td></tr>"; 
                    table += "</table>"

                    if (forms[30] != "n/a"){

                        table +="<br/><h2><b>" + forms[30] + "</b> </h2> <h4>" + compSupDefinitions[0] + "</h4><br/>";
                        table += "<table class=\"alt uniform fixed\">";

                        table += "<tr><th></th><th> Masc. </th><th> Fem. </th><th> Neut. </th></tr>";
                        table += "<tr><td><b>Nom. (s)</b></td><td>" + forms [30] + "</td><td>" + forms [40] + "</td><td>" + forms [50] + "</td></tr>"; 
                        table += "<tr><td><b>Acc. (s)</b></td><td>" + forms [31] + "</td><td>" + forms [41] + "</td><td>" + forms [51] + "</td></tr>"; 
                        table += "<tr><td><b>Gen. (s)</b></td><td>" + forms [32] + "</td><td>" + forms [42] + "</td><td>" + forms [52] + "</td></tr>"; 
                        table += "<tr><td><b>Dat. (s)</b></td><td>" + forms [33] + "</td><td>" + forms [43] + "</td><td>" + forms [53] + "</td></tr>"; 
                        table += "<tr><td><b>Abl. (s)</b></td><td>" + forms [34] + "</td><td>" + forms [44] + "</td><td>" + forms [54] + "</td></tr>"; 
                        table += "<tr><td><b>Nom. (p)</b></td><td>" + forms [35] + "</td><td>" + forms [45] + "</td><td>" + forms [55] + "</td></tr>"; 
                        table += "<tr><td><b>Acc. (p)</b></td><td>" + forms [36] + "</td><td>" + forms [46] + "</td><td>" + forms [56] + "</td></tr>"; 
                        table += "<tr><td><b>Gen. (p)</b></td><td>" + forms [37] + "</td><td>" + forms [47] + "</td><td>" + forms [57] + "</td></tr>"; 
                        table += "<tr><td><b>Dat. (p)</b></td><td>" + forms [38] + "</td><td>" + forms [48] + "</td><td>" + forms [58] + "</td></tr>"; 
                        table += "<tr><td><b>Abl. (p)</b></td><td>" + forms [39] + "</td><td>" + forms [49] + "</td><td>" + forms [59] + "</td></tr>"; 
                        table += "</table>"
                    
                    }

                    if (forms[60 != "n/a"]){

                        table +="<br/><h2><b>" + forms[60] + "</b> </h2> <h4>" + compSupDefinitions[1] + "</h4><br/>";
                        table += "<table class=\"alt uniform fixed\">";

                        table += "<tr><th></th><th> Masc. </th><th> Fem. </th><th> Neut. </th></tr>";
                        table += "<tr><td><b>Nom. (s)</b></td><td>" + forms [60] + "</td><td>" + forms [70] + "</td><td>" + forms [80] + "</td></tr>"; 
                        table += "<tr><td><b>Acc. (s)</b></td><td>" + forms [61] + "</td><td>" + forms [71] + "</td><td>" + forms [81] + "</td></tr>"; 
                        table += "<tr><td><b>Gen. (s)</b></td><td>" + forms [62] + "</td><td>" + forms [72] + "</td><td>" + forms [82] + "</td></tr>"; 
                        table += "<tr><td><b>Dat. (s)</b></td><td>" + forms [63] + "</td><td>" + forms [73] + "</td><td>" + forms [83] + "</td></tr>"; 
                        table += "<tr><td><b>Abl. (s)</b></td><td>" + forms [64] + "</td><td>" + forms [74] + "</td><td>" + forms [84] + "</td></tr>"; 
                        table += "<tr><td><b>Nom. (p)</b></td><td>" + forms [65] + "</td><td>" + forms [75] + "</td><td>" + forms [85] + "</td></tr>"; 
                        table += "<tr><td><b>Acc. (p)</b></td><td>" + forms [66] + "</td><td>" + forms [76] + "</td><td>" + forms [86] + "</td></tr>"; 
                        table += "<tr><td><b>Gen. (p)</b></td><td>" + forms [67] + "</td><td>" + forms [77] + "</td><td>" + forms [87] + "</td></tr>"; 
                        table += "<tr><td><b>Dat. (p)</b></td><td>" + forms [68] + "</td><td>" + forms [78] + "</td><td>" + forms [88] + "</td></tr>"; 
                        table += "<tr><td><b>Abl. (p)</b></td><td>" + forms [69] + "</td><td>" + forms [79] + "</td><td>" + forms [89] + "</td></tr>"; 
                        table += "</table>"

                    }

                }
            
            }
            



            $("#result").html("<h2><b>" + word[1] + "</b> </h2> <p>" + word[3] + "</p><h4>" + word[4] + "</h4><br/>" + table);
            
            

        }
    );

}

