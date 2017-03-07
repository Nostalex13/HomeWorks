$(function() {

    let $wdth = $('.submenu').css('width');
    $('.submenu li').css('width', $('.submenu').css('width'));
    $('.submenu li').css('width', '-=20');

    // $('.dropdown').on('mouseenter', function() {
    //     $(this).children('.submenu').slideDown(200);
    // });
    //
    // $('.dropdown').on('mouseleave', function() {
    //     $(this).children('.submenu').slideUp(200);
    // });

    $('.dropdown').hover(
        function() {
            $(this).children('.submenu').slideDown(200);
        },
        function() {
            $(this).children('.submenu').slideUp(200);
        }
    );

});
