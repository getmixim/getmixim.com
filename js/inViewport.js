/*! inViewport 0.0.1
 *  jQuery plugin by Moob
 *  modified by joerick to activate only in the middle 1/3 of the page
 * ========================
 *  (requires jQuery)
 */
(function ($) {
    'use strict';
    var detection_box_start_y = 0;
    var detection_box_end_y = 0;

    function getViewportDimensions() {
        var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        detection_box_start_y = viewportHeight * 1/3;
        detection_box_end_y = viewportHeight * 2/3;
    }
    getViewportDimensions();
    //on resize/scroll
    $(window).on('resize orientationChanged', function(){
        getViewportDimensions();
    });

    $.fn.inViewport = function (whenInView, whenNotInView) {
        return this.each(function () {
            var el = $(this),
                inviewalreadycalled = false,
                notinviewalreadycalled = false;
            //on resize/scroll
            $(window).on('resize orientationChanged scroll', function(){
                checkInView();
            });
            function checkInView(){
                var rect = el[0].getBoundingClientRect();
                if(rect.top < detection_box_end_y && rect.bottom > detection_box_start_y) {
                    if(!inviewalreadycalled){
                        whenInView.call(el);
                        inviewalreadycalled = true;
                        notinviewalreadycalled = false;
                    }
                } else {
                    if(!notinviewalreadycalled){
                        whenNotInView.call(el);
                        notinviewalreadycalled = true;
                        inviewalreadycalled = false;
                    }
                }
            }
            //initial check
            checkInView();
        });
    };
}(jQuery));
