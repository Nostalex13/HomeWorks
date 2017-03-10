// vovan`s plugin jquery.carolider v1.0
// All rights reserved

(function($){
    let currentValue = 3;
    let sliderLength;

    $.fn.carolider = function(config) {

        // makes your arrows look pretty (who cares)
        let def = {
            arrColor: 'black'
        }

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
            .addClass('arr-disabled')
            .click( function() {
                if(currentValue == 3) {
                    $(this).addClass('arr-disabled');
                    return this;
                }

            $('.carolider ul').css('left', '+=204');
            currentValue--;

            btnCheck();
        });
    }

    function rightBtn() {
        $('.carolider-right-arr span').click( function() {
            if(currentValue == sliderLength) {
                $(this).addClass('arr-disabled');
                return this;
            }

            $('.carolider ul').css('left', '-=204px');
            currentValue++;

            btnCheck();
        });
    }

    function btnCheck() {
        if(currentValue == sliderLength) {
            $('.carolider-right-arr span').addClass('arr-disabled');
            return this;
        } else {
            if(currentValue == 3) {
                $('.carolider-left-arr span').addClass('arr-disabled');
                return this;
            }
        }

        $('.carolider-right-arr span').removeClass('arr-disabled');
        $('.carolider-left-arr span').removeClass('arr-disabled');
    }

})(jQuery);
