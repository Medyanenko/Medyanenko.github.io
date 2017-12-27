$(document).ready(function() { 
						   
	var slides = $(".header__slider-slides").children(".slides__slide"); 
	var width = $(".header__slider-slides").width(); 
	var i = slides.length; 
	var offset = i * width; 
	var cheki = i-1;
	
	$(".header__slider-slides").css('width',offset); 
	
	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".header__slider-navigation").append("<div class='navigation__item navigation__item_current'></div>");
		}
		else {
			$(".header__slider-navigation").append("<div class='navigation__item'></div>");
		}
	}
	
	var dots = $(".header__slider-navigation").children(".navigation__item");
	offset = 0; 
	i = 0; 
	
	$('.navigation__item').click(function(){
		$(".navigation__item_current").removeClass("navigation__item_current");								  
		$(this).addClass("navigation__item_current");
		i = $(this).index();
		offset = i * width;
		$(".header__slider-slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
	});

});