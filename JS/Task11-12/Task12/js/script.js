$( function() {

    let html = $('#temp').html();

    let content = [
        {
            name: 'Volodymyr Yevtukh',
            imgSrc: 'img/me.jpg',
            university: 'NAU',
            info1: 'Funny',
            info2: 'or not',
            info3: 'probably',
            phone: '052-32=42=12',
            profile: 'http://yandex.ru',
            feedback: 'PAAATEEERNS'
        },
        {
            name: 'Yevtukh Volodymyr',
            imgSrc: 'img/me1.jpg',
            university: 'UAN',
            info1: 'Funny',
            info2: 'or not',
            info3: 'probably',
            phone: '052-32=42=12',
            profile: 'http://google.com',
            feedback: 'PAAATEEERNS'
        }
    ];

    let compiled = tmpl(html, { data: content });
    $('.wrapper').append(compiled);

});
