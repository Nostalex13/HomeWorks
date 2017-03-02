$(function() {

    //          HOVER

    $('.tabs__item').on('click', function(e) {
        $('.tabs__item').each(function() {
            $(this).removeClass('item-selected');
            $(this).addClass('hover');
        });

        $(this).addClass('item-selected');
        $(this).removeClass('hover');
    });

    //          CLICK HANDLER

    function tabEvent(e) {
        $('.tabs__article').each( function() {
            $(this).css('display', 'none');
        });

        $(`[data-tab=${e.data[0]}]`).css('display', 'block');
    }

    let index = 0;

    $('.tabs__item').each( function() {
        $(this).on('click', [index], tabEvent);
        index++;
    });

    $('[data-tab=0]').css('display', 'block');
});
