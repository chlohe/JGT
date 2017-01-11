$( document ).ready(function($) {

    $("#latin-menu").addClass("hidden");
    $("#greek-menu").addClass("hidden");
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

$("a").click(function(){

    var target = $(this).data("target-id");
    var current = $(this).data("current-id");

    if (target && current){

        //Mad transition tings - fade out and in

        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $("#"+current).addClass("animated fadeOut").one(animationEnd, function() {
            $("#"+current).addClass("hidden");
            $("#"+current).removeClass("animated fadeOut");
            $("#"+target).removeClass("hidden");
            $("#"+target).addClass("visible");
            $("#"+target).addClass("animated fadeIn visible").one(animationEnd, function() {
                 $("#"+target).removeClass("animated fadeIn visible");
                 fixFooter();
            });
           
        });


    }

});


