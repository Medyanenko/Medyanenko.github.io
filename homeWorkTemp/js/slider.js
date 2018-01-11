function Slider(sSelector){
	var s = this;

	s.init(sSelector);
	s.arrowPrev				= s.findObject(".preview__arrow_prev");
	s.arrowNext				= s.findObject(".preview__arrow_next");
	s.image					= s.findObject(".slide__img");
	s.slidesControls	    = s.findObject(".slides-controls__item");
	s.current				= 1;
	s.max 					= s.slidesControls.length;

				
	s.showSlide = function(oBtn, iShift){
		var currentControlBtn;
				
		if(iShift){
			s.current += iShift; 

				if(s.current < 1){
					s.current = s.max;
				}
				else if(s.current > s.max){
					s.current = 1;
				}
			currentControlBtn = s.slidesControls.eq(s.current-1);
		}
		else{
			currentControlBtn = $(oBtn); 
			s.current = s.slidesControls.index(currentControlBtn)+1; 
		}
			var imagePath= "images/slider/" + s.current + ".png";
		s.image.attr("src", imagePath);
		
		s.slidesControls.removeClass("slides-controls__item_current");
		currentControlBtn.addClass("slides-controls__item_current");
	}
		var timeoutId = setInterval(function(){s.showSlide(this, 1);}, 3000);

		s.start = function(){
            timeoutId = setInterval(function(){s.showSlide(this, 1);}, 3000);
        }
        s.stop = function(){
            if(timeoutId) clearTimeout(timeoutId);
        }
    s.slidesControls.click(function(){
				s.showSlide(this, 0);
				});
	s.arrowPrev.click(function(){
				s.showSlide(this, -1);
				});
	s.arrowNext.click(function(){
				s.showSlide(this, 1);
				});
    s.arrowPrev.mouseenter(function(){
         		s.stop();
    			});   
    s.arrowPrev.mouseleave(function(){
        		s.start();  
    			});   
        
    s.arrowNext.mouseenter(function(){
        		s.stop();
    			});    
    s.arrowNext.mouseleave(function(){
        		s.start();
   				});    
          
    s.slidesControls.mouseenter(function(){
        		s.stop();
    			});    
    s.slidesControls.mouseleave(function(){
        		s.start();
    			}); 
	
		
	
}
Slider.prototype = new Component();