$(document).ready(function() {
  $('.header-btn').click(function() {
    $('.menu__header').slideToggle(500);
    $(".btn-switch").toggleClass('active');
    $(".header-btn").toggleClass('active');
  });
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.menu__header').removeAttr('style');
		 }
	});
});