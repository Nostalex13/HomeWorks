$( function() {

    $('.content').each( function() {

        $(this).css('position', 'relative');
        let $currTitle = $(this).attr('title');
        $(this).parent().append(`<div class="tooltip tooltip-hidden"> ${$currTitle} </div>`);

    });

    $('.content').each( function() {

        $(this).on('mouseenter', function() {
            $(this).siblings('.tooltip').removeClass('tooltip-hidden');
            $(this).removeAttr('title');
        });

        $(this).on('mouseleave', function() {
            $(this).siblings('.tooltip').addClass('tooltip-hidden');

            let index = 0;
            $('.tooltip').each( function() {
                if( $(this).css('opacity') == 0 ) {
                    index++;
                }
            });

            if( index == 3 ) {
                $('#helpBtn').attr('value', 'Show help');
            }
        });
    });

    $('#helpBtn').on('click', function() {

        if ( $(this).attr('value') == 'Show help' ) {

            $('.tooltip').removeClass('tooltip-hidden');
            $(this).attr('value', 'Hide help');

        } else {
            if ( $(this).attr('value') == 'Hide help' ) {

                $('.tooltip').addClass('tooltip-hidden');
                $(this).attr('value', 'Show help');

            }
        }
    });

});
