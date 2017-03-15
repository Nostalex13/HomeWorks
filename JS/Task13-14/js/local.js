$(function() {

    let obj = [
        {
            quest: '1+1=X. X=?',
            answer1: 'yes',
            answer2: 'X=2.0',
            answer3: 'X=2'
        },
        {
            quest: 'Any question?',
            answer1: 'yes',
            answer2: 'Les Paul',
            answer3: '_'
        },
        {
            quest: 'Lorem?',
            answer1: 'dorem',
            answer2: 'morem',
            answer3: 'yes'
        }
    ];

    let answers = [
        'X=2.0',
        '_',
        'yes'
    ];

    localStorage.setItem('testQuestions', JSON.stringify(obj));
    localStorage.setItem('testAnswers', JSON.stringify(answers));
});
