$( ".further-detail" ).hover( function() {
	$(this).children(".micro").toggle();
});


/*
$(document).ready(function() {
    var windowTest = $(window).width();
    var boxWidth = $(".archive__wrap").outerWidth();
	
	console.log(boxWidth);
	
    var arcWidth = windowTest - boxWidth;
	
    var $archive = $(".archive");
    $archive.width(windowTest);
    
    var numEntries = $archive.find("li").length;
    
    $archive.find("li").width((windowTest/numEntries));
    
    $archive.find("li").each(function() {
        var index = $(this).index();
        
        var colorWrap = "rgba(0,0,0,";
        var paren = ")";
        var testOpacity = index * .1;
        var test = colorWrap + testOpacity + paren;
        
        $(this).find("div").css("color", test);
    });
    $(".archive li.active").find(".past__arrow").show();
    
    $(".archive li").click( function() {
        var cinderella = $(this);
        var stepsisters = $(this).siblings("li");
        
		console.log($(this).attr("class").substring(6));
		
        cinderella.toggleClass("active");
        cinderella.find("div").toggleClass("active");
        cinderella.find(".past__arrow").show();
        stepsisters.removeClass("active");
        stepsisters.find(".past__date").removeClass("active");
        stepsisters.find(".past__arrow").hide();
		
		
		$(".container").load("archive/nov-2013.html", function() {
			
			console.log("yay");
		});
		//window.location.href = "archive";
    });
	
});


    $(document).scroll(function() {
        var top = $(document).scrollTop();
		
		var doc = $("body").outerHeight();
		
		console.log($(window).height())
		
		var bottom = $(document).scrollTop();
		
		console.log($(window).height() + doc)
		
		
        var $archive = $(".archive li");
        var headerHeight = $("header").height() / 2;
        
        if (top > headerHeight) {
            $archive.find(".past__date").fadeOut();                        
            return;
        }
        else if (top < headerHeight || top) {
            
             $archive.find(".past__date").fadeIn();
            
             $(".archive li").hover( function() {
                 return;
             }, function() {
                 return;
             });
            
             return;
        }        
    });
	
    $(".archive li").hover( function() {
        if ($(document).scrollTop() > 380) {
            $(this).find(".past__date").fadeIn();
        }
    }, function() {
        if ($(document).scrollTop() > 380) {
            $(this).find(".past__date").fadeOut();
        }
    });*/