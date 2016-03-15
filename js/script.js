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
		    fx: 'scrollLeft',
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
		    fx: 'scrollLeft',
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

	$(window).load(function () {

		var canvas = document.getElementById('dancingDots');
		
		resize = function() {
		    canvas.width = $('body').width();
		}
		$(window).resize(resize);
		resize();
		
		if (canvas.getContext) {
		    var ctx = canvas.getContext('2d');
		    var numDots = 50;
		    var yPositions = [];
		
		    for (var i = 0; i < numDots; i++) {
		        yPositions[i] = 0;
		    }
		
		    function step() {
		        ctx.clearRect(0, 0, canvas.width, canvas.height);
		        ctx.fillStyle = 'white';
		        for (var i = 0; i < numDots; i++) {
		            var r = Math.random() - 0.5;
		            r *= 0.1;
		            yPositions[i] = yPositions[i] * 0.95 + r * 0.1;
		
		            yPositions[i] *= 1;
		
		            var path = new Path2D();
		            var x = i / (numDots - 1) * canvas.width;
		            var y = yPositions[i] * 1000 + canvas.height / 2;
		            var radius = 10;
		            path.arc(x, y, radius, 0, 2 * Math.PI, false);
		
		            ctx.fill(path);
		
		            if (i > 0) {
		                yPositions[i - 1] -= yPositions[i] * 0.5;
		            }
		            if (i < numDots - 1) {
		                yPositions[i + 1] += yPositions[i] * 0.5;
		            }
		        }
		    }
		
		    setInterval(step, 1000 / 30);
		}
	
	});

    //Hey there, what you doing here? Nosey parker.

})(jQuery);