(function($) {

    //Document Fade In Function

    $(window).load(function() {});

    //Isotope Grid Relayouts

    $(window).load(function() {
        setTimeout(function() {
            $('.main-grid-wrap').isotope('layout');
        }, 700);
    });

    //Animsition Page Transitions Functions

    $(window).load(function() {

        $('.animsition').animsition({

            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1300,
            outDuration: 800,
            linkElement: '.animsition-link',
            // e.g. linkElement   :   'a:not([target='_blank']):not([href^=#])'
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            unSupportCss: ['animation-duration',
                '-webkit-animation-duration',
                '-o-animation-duration'
            ],
            //'unSupportCss' option allows you to disable the 'animsition' in case the css property in the array is not supported by your browser. 
            //The default setting is to disable the 'animsition' in a browser that does not support 'animation-duration'.

            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body'
        });

    });
   
	//Fading Section Functions

	$(window).load(function () {
      
        $('.out-of-view').inViewport(
            function(){$(this).addClass("am-in-view");},
            function(){$(this).removeClass("none");}
        );
        
    });

	//Homepage Slideshow Cycle & Caption Font Size Function
	
	$(window).load(function(){
		$("h1").fitText(1.6, { minFontSize: '30px', maxFontSize: '40px' });
	});

	//Homepage Slideshow Cycle Function

    $(window).load(function () {
	    			    
		if ($(window).width() < 1000) {
			
		$(".homepage-slideshow").cycle({
		    fx: 'scrollHorz',
		    speed: 200,
		    timeout: 12000,
		    next: '.slideshow-nav#right',
		    prev: '.slideshow-nav#left',
		    slideResize: false,
		    before: function(){
            	$(this).parent().find('.current').removeClass('current');
			},
		    after: function(){
			    $(this).addClass('current');
		    }
		});
		
		}
		else {
			
		$(".homepage-slideshow").cycle({
		    fx: 'scrollHorz',
		    speed: 700,
		    timeout: 12000,
		    next: '.slideshow-nav#right',
		    prev: '.slideshow-nav#left',
		    slideResize: false,
		    before: function(){
            	$(this).parent().find('.current').removeClass('current');
			},
		    after: function(){
			    $(this).addClass('current');
		    }
		});
		
		}
	        
    });

    //Hey there, what you doing here? Nosey parker.

})(jQuery);