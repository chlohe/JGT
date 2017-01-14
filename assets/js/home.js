$( document ).ready(function($) {

    $("#latin").addClass("hidden");
    $("#greek").addClass("hidden");
    $("#latin-lit-menu").addClass("hidden");
    $("#greek-lit-menu").addClass("hidden");

    fixFooter();

});

function fixFooter(){
    //Position the social media icons after all this stuff is done
    $("#footer-home").css("opacity","1");
    $("#footer-home").css("position","absolute");
    $("#footer-home").css("bottom","-40");
    $("#footer-home .icons").css("margin","0.5rem");

}
