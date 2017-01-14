
$("a").click(function(){

    var target = $(this).data("target-id");
    var current = $(this).data("current-id");

    if (target){

        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        //This will only fade out the current thing
        if (current){

            //Mad transition tings - fade out and in
            $("#"+current).addClass("animated fadeOut").one(animationEnd, function() {
                $("#"+current).addClass("hidden");
                $("#"+current).removeClass("animated fadeOut");
                $("#"+target).removeClass("hidden");
                $("#"+target).addClass("visible");
                $("#"+target).addClass("animated fadeIn visible").one(animationEnd, function() {
                    $("#"+target).removeClass("animated fadeIn visible");
                });
                document.location.hash = (target == "banner") ? "" : target;
            });

            return;

        }

        //Find everything that isn't the target
        current = $('section').filter(function() {
            return ($(this).data('linker') !== undefined && $(this).data("current-id") !== target);
        });
        //This will fade out everything indiscriminately
        current.addClass("animated fadeOut").one(animationEnd, function() {
            current.addClass("hidden");
            current.removeClass("animated fadeOut");
            $("#"+target).removeClass("hidden");
            $("#"+target).addClass("visible");
            $("#"+target).addClass("animated fadeIn visible").one(animationEnd, function() {
                $("#"+target).removeClass("animated fadeIn visible");
            });
            document.location.hash = (target == "banner") ? "" : target;
        }); 
        


    }

});

$( document ).ready(function($) {

    var url = window.location.href;
    var hashIndex = url.indexOf("#");
    var hash = url.substring(hashIndex+1);

    if (hashIndex != -1 && hash.trim() != ""){
        
        var target =  $("#"+hash);

        //Does it exist?
        if (target.html() != undefined){
            var others = $('section').filter(function() {
               return $(this).data('linker') !== undefined;
            });
            others.addClass("hidden");
        }
        target.removeClass("hidden");
        target.find("*").removeClass("hidden");

    }

});





