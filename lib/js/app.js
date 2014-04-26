(function ($) {
	var DD = {
		'config' : {
			
			
		},
		'init' : function () {
			$(".further-detail").hover( function() {
				$(this).children(".micro").toggle();
			});
			
			var ar = DD.archive();
			ar.setup();

		    //$(document).scroll(function() {
			//	ar.navigate();
		    //});
			
		    $(".archive li").on( "click mouseover mouseout", function() {
				var arSpecial = DD.archive($(this));
				
				if (event.type === "click") {
					arSpecial.past();
				} 
				
				//else if (event.type === "mouseover") {
				//	 arSpecial.showMonth();
				//} else if (event.type === "mouseout") {
				//	arSpecial.hideMonth();
				//}
			});
		},
		'archive' : function (element) {
		    var windowTest = $(window).width();
		    var boxWidth = $(".archive__wrap").outerWidth();
		    var arcWidth = windowTest - boxWidth;
		    var $archive = $(".archive");
			var numEntries = $archive.find("li").length;
			
	        var top = $(document).scrollTop();
			var page = $(window).height();
			var doc = $("body").outerHeight();
	        var $month = $(".archive li");
	        var headerHeight = $("header").height() / 2;
			var bottom = top+page;
			
		
			
			function archiveWidth() {
				if (windowTest < 650) {
					$archive.remove();
					return;
				} else {
					$archive.width(windowTest);
					$archive.find("li").width((windowTest/numEntries));
				}
			}
			
			function pastFader() {
			    $archive.find("a").each(function() {
			        var index = $(this).index();
		
			        var colorWrap = "rgba(0,0,0,";
			        var paren = ")";
			        var testOpacity = 1 - (index * .1);
			        var test = colorWrap + testOpacity + paren;
        
			        $(this).find("div").css("color", test);
			    });
			}
			
			function currentArrow() {
				 $(".archive li.active").find(".past__arrow").show();
			}
			
			function chooseMonth() {
		        var cinderella = element;
		        var stepsisters = element.siblings("li");
			
		        cinderella.addClass("active");
				cinderella.find("div").toggleClass("active");
				cinderella.find(".past__arrow").show();
		        stepsisters.removeClass("active");
				stepsisters.find(".past__date").removeClass("active");
				stepsisters.find(".past__arrow").hide();				
			}
			
			function fadeArchive() {
				// TO DO: finish/throttle this
    			
				console.log("is this on")
				
				if (top < headerHeight || bottom >= doc) {
					$month.find(".past__date").fadeIn();
				} else {
					$month.find(".past__date").fadeOut();    
				}
				
				//$(".archive li").hover( function() {
				//	return;
				//}, function() {
				//	return;
				//})   
			}
			
			function showMonth() {
		        if ($(document).scrollTop() > 380)  {
		            element.find(".past__date").fadeIn();
		        }
			}
			
			function hideMonth() {
		        if ($(document).scrollTop() > 380) {
		            element.find(".past__date").fadeOut();
		    	}
			}

			return {
				'setup' : function () {
					archiveWidth();
					pastFader();
					currentArrow();
				},
				'past' : function () {
					chooseMonth();
				},
				'navigate' : function () {
					fadeArchive();
				},
				'showMonth' : function () {
					showMonth();
				},
				'hideMonth' : function () {
					hideMonth();
				}
			}
		}
	}
	
	$(document).ready(function() {
		DD.init();
	});
	
}(jQuery));





