// vovan`s plugin jquery.carolider v1.0
// All rights reserved

(function($){
    let currentValue = 3;
    let sliderLength;
    let itemWidth;

    $.fn.carolider = function(config) {

        // makes your arrows look pretty (who cares)
        let def = {
            arrColor: 'black'
        }
        itemWidth = $('.carolider li').outerWidth();

        $.extend(def, config);

        // controls wrappers
        $(this)
            .prepend('<div class="carolider-left-arr"><span>◄</span></div>')
            .append('<div class="carolider-right-arr"><span>►</span></div>');

        sliderLength = $('.carolider li').length;

        leftBtn();
        rightBtn();

        $('.carolider-right-arr span').css('color', def.arrColor);
        $('.carolider-left-arr span').css('color', def.arrColor);

        return this;
    };

    function leftBtn() {
        $('.carolider-left-arr span')
            .click( function() {
                if(currentValue == 3) {
                    let shiftValue = (sliderLength - 3) * itemWidth;  // 3 as quantity of visible imgs
                    currentValue = sliderLength;
                    $('.carolider ul').css('left', `-=${shiftValue}px`);

                    return this;
                }

            $('.carolider ul').css('left', `+=${itemWidth}`);
            currentValue--;
        });
    }

    function rightBtn() {
        $('.carolider-right-arr span').click( function() {
            if(currentValue == sliderLength) {
                let shiftValue = (sliderLength - 3) * itemWidth;
                currentValue = 3;
                $('.carolider ul').css('left', `+=${shiftValue}px`);

                return this;
            }

            $('.carolider ul').css('left', `-=${itemWidth}`);
            currentValue++;
        });
    }

})(jQuery);
