$(function() {

    $('[type=text]').each( function() {

        $(this).on('mouseenter', function() {
            let helpId = $(this).attr('id');

            $(`[data-type=${helpId}]`).animate({ 'opacity': '1' }, 500, function() {
                $(this).css('opacity', '1');
            });
        });

        $(this).on('mouseleave', function() {
            let helpId = $(this).attr('id');

            $(`[data-type=${helpId}]`).animate({ 'opacity': '0' }, 500, function() {
                $(this).css('opacity', '0');

                let index = 0;
                $('.help').each( function() {
                    if( $(this).css('opacity') == 0 ) {
                        index++;
                    }
                });

                if( index == 3 ) {
                    $('#helpBtn').attr('value', 'Show help');
                }
            });
        });
    });

    $('#helpBtn').on('click', function() {

        if ( $(this).attr('value') == 'Show help' ) {

            $('.help').animate({ 'opacity': '1' }, 500, function() {
                $(this).css('opacity', '1');
            });

            $(this).attr('value', 'Hide help');

        } else {

            if ( $(this).attr('value') == 'Hide help' ) {

                $('.help').animate({ 'opacity': '0' }, 500, function() {
                    $(this).css('opacity', '0');
                });

                $(this).attr('value', 'Show help');
            }

        }
    });
});
