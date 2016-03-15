(function($) {
    'use strict';
    //Document Fade In Function

    $(window).load(function() {});

    //Isotope Grid Relayouts

    $(window).load(function() {
        setTimeout(function() {
            $('.main-grid-wrap').isotope('layout');
        }, 700);
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
        var slideshowSpeed = 700;

        if ($(window).width() < 1000) {
            slideshowSpeed = 200;
        }

        $(".homepage-slideshow").cycle({
            fx: 'scrollHorz',
            speed: slideshowSpeed,
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
    });

    //Hey there, what you doing here? Nosey parker.
})(jQuery);