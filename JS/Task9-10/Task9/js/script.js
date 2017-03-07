
$(function() {
    $('.jcarousel ul').width( $('ul li img').width() * $('ul li img').length );

    $('.j-wrapper').on('mouseenter', function() {
        $('.jcarousel-pagination').addClass('jcarousel-pagination-visible');
    });

    $('.j-wrapper').on('mouseleave', function() {
        $('.jcarousel-pagination').removeClass('jcarousel-pagination-visible');
    });

    $('.jcarousel').jcarousel();

    /*          CONTROLS            */

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    /*          PAGINATION          */

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

    /*          *CHECKBOX*              */

    $('[name="ch3"]').prop('disabled', true);

    $(".custom").parent().on('click', function() {
        changeCheck( $(this).children('.custom') );
    });

    $(".custom").each( function() {
        changeCheckStart( $(this) );
    });

    function changeCheck(el) {
        let elem = el;
        let input = elem.children('input');

        if( !input.prop("disabled")) {
            if(!input.attr("checked")) {
                elem.css("background", "url(images/checkbox-checked.png)");
                input.attr("checked", true)
            } else {
                elem.css("background", "url(images/checkbox.png)");
                input.attr("checked", false)
            }
            return true;
        } else {
            elem.css("background", "url(images/checkbox-checked.png)");
            elem.css("opacity", ".6");
        }
    }

    function changeCheckStart(el) {
        let elem = el;
        input = elem.children('input');
        if( input.attr("checked") ) {
            elem.css("background", "../images/checkbox-checked.png");
        }
        return true;
    }

});
