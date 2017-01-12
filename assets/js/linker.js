
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


