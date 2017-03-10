$( function() {

    let html = $('#temp').html();

    let content = [
        {
            gos: 'shed',
            huios: 'asd'
        },
        {
            gos: 'ebanuca',
            huios: 'chozagovno'
        }
    ];

    let compiled = tmpl(html, { ymnoeNazvanie: content });
    $('.wrapper').append(compiled);

});
