$(document).ready(function(){		
  		$("a.next").click(function() {
      		$("html, body").animate({
         	scrollTop: $($(this).attr("href")).offset().top + "px"
      	}, {
         duration: 900,
         easing: "swing"
      });
      return false;
   		});

    });