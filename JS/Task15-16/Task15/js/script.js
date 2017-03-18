$(function() {
    $('.search').on('keydown', function(e) {
        if (e.keyCode == 13) {
            googleSearch();
        }
    });

    $('.search_btn').on('click', googleSearch);

    $('.google').on('click', function() {
        location.reload();
    });

    function googleSearch() {
        let query = $('.search_field').val();
        searching(query);
        pageSearch();
    }

    function pageSearch() {
        $('.wrapper')
            .removeClass('wrapper')
            .addClass('wrapper-search');
        $('.google').css('width', '100px');
        $('.search').css('display', 'block');
        $('.search_field').addClass('search_field-search');
        $('.search_btn').css('display', 'none');
        $('.results').css('display', 'block');
    }

    function searching(query) {
        $.ajax({
            url:`https://pixabay.com/api/?key=4845683-933d895de826e8c128c7c84b3&q=${query}&callback=?`,
            method: 'POST',
            dataType: 'jsonp',
            success: function (data) {
                if ( $('.results').children().length > 0) {
                    $('.results').children().remove();
                }

                for (let i = 0; i < data.hits.length; i++) {
                    $('.results').append(`<img src="${data.hits[i].webformatURL}">`);
                }
            }
        });
    }
});
