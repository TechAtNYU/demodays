(function ($) {
	var DD = {
		'config' : {
			
			
		},
		'init' : function () {
			console.log("working");

			$(".further-detail").hover( function() {
				$(this).children(".micro").toggle();
			});
			
			var ar = DD.archive();
			ar.setup();
			
			
		    $(".archive li").on( "click", function() {
		        var arClick = DD.archive($(this));
				arClick.past();
		    });
			
			
		},
		'archive' : function (element) {
		    var windowTest = $(window).width();
		    var boxWidth = $(".archive__wrap").outerWidth();

		    var arcWidth = windowTest - boxWidth;

		    var $archive = $(".archive");
			var numEntries = $archive.find("li").length;
			
			function archiveWidth() {
				$archive.width(windowTest);
				$archive.find("li").width((windowTest/numEntries));
			}
			
			function pastFader() {
			    $archive.find("li").each(function() {
			        var index = $(this).index();
        
			        var colorWrap = "rgba(0,0,0,";
			        var paren = ")";
			        var testOpacity = index * .1;
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
			
			function changePageToArchive() {
				//$(".container").load("archive/nov-2013.html", function() {
		        //
				//	console.log("yay");
				//});
				//window.location.href = "archive";
			}
			
			
			
			function allTheThings() {
		
			   
	
		

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
				});
			
			
			
			}
			
			
		    
			
			
			
			return {
				'setup' : function () {
					archiveWidth();
					pastFader();
					currentArrow();
					
					allTheThings();
					
				},
				'past' : function () {
					chooseMonth();
				},
				
				'scroll' : function () {
					
				},
				'click' : function () {
					
				},
				'hover' : function () {
					
				}
				
			}
			
			
		    
			
		}
		
	}
	
	$(document).ready(function() {
		DD.init();
	});
	
}(jQuery));





