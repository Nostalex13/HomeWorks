$(function() {

    var test = {
        questions: [
        {
            title: '1+1=X. X=?',
            answers: ['yes', 'X=2.0', 'X=2'],
            correct: 1,
        },
        {
            title: 'Any question?',
            answers: ['yes', 'Les Paul', '_'],
            correct: 2,
        },
        {
            title: 'Lorem?',
            answers: ['dorem', 'morem', 'yes'],
            correct: 2,
        } ]
    };

    localStorage.setItem('testQuestions', JSON.stringify(test));
});
