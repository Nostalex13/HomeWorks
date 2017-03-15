'use strict';

window.onload = function() {

    let html = document.querySelector('#test').innerHTML;
    let content = JSON.parse(localStorage.getItem('testQuestions'));
    let answers = JSON.parse(localStorage.getItem('testAnswers'));

    document.querySelector('.testMenu').innerHTML = tmpl(html, { content: content });

    let checkboxes = document.querySelectorAll('[type=checkbox]');
    let submenus = document.querySelectorAll('.submenu');

    try {
        document.querySelector('.check').addEventListener('click', checkBtnClick);
    } catch (e) {
        console.log('some error here:', e);
    }

    /*          only one checked checkbox             */

    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', function() {

            let sub = this.parentNode;

            while (!sub.classList.contains('submenu')) {
                sub = sub.parentNode;
            }

            let subItems = sub.querySelectorAll('[type=checkbox]');

            for(let k = 0; k < subItems.length; k++) {
                subItems[k].checked = false;
            }

            this.checked = true;
        });
    }

    function checkBtnClick() {
        if ( answeredCount() ) {
            let checkedAnswers = [];
            let correctness = [];

            for(let i = 0; i < submenus.length; i++) {
                let subItems = submenus[i].querySelectorAll('[type=checkbox]');

                for(let k = 0; k < subItems.length; k++) {
                    if(subItems[k].checked == true) {
                        checkedAnswers[i] = subItems[k].parentNode.innerText;
                        correctness[i] = false;
                        // checkedAnswers.set(subItems[k].parentNode.innerText, 'false');

                        if (subItems[k].parentNode.innerText == answers[i]) {
                            correctness[i] = true;
                            break;
                        }
                    }
                }
            }

            let answersArr= [];

            for (let i = 0; i < checkedAnswers.length; i++) {
                let obj = {
                    answer: checkedAnswers[i],
                    correct: correctness[i]
                };

                answersArr[i] = obj;
            }

            showModal(answersArr);
        }
    }

    function answeredCount() {
        let checkedCount = 0;

        for(let i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked == true) {
                checkedCount++;
            }
        }

        if(checkedCount != submenus.length) {
            alert('Please, answer all questions');
            return false;
        }

        return true;
    }

    /*          MODAL SHIfT          */

    document.querySelector('.closeBtn').addEventListener('click', function() {
        hideModal();
        document.querySelector('.check').setAttribute('disabled', 'true');
        document.querySelector('.check').removeEventListener('click', checkBtnClick);

        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].setAttribute('disabled', 'true');
        }
    });

    document.querySelector('.refreshBtn').addEventListener('click', function() {
        hideModal();
        refreshAll();
    });

    function showModal(answersArr) {
        document.querySelector('.modal').style.display = 'block';
        // let header = document.querySelector('.modal-header');
        // header.style.lineHeight = header.style.height;
        //  console.log(header.style.lineHeight);
        $('.modal-header').css('line-height', $('.modal-header').css('height'));

        let html = document.querySelector('#answers').innerHTML;
        let data = [];
        let correctAnswers = 0;

        for (let i = 0; i < answersArr.length; i++) {
            let classAnsw;

            if(answersArr[i].correct == false) {
                classAnsw = 'answ-false';
            } else {
                if (answersArr[i].correct == true) {
                    correctAnswers++;
                    classAnsw = 'answ-true';
                } else {
                    alert('smth went wrong');
                }
            }

            let obj = {
                question: `${i+1}. ${content[i].quest} : `,
                correct: classAnsw,
                answer: answersArr[i].answer
            };

            data[i] = obj;
        }

        let dataResult = {
            result: correctAnswers
        };

        let compiled = tmpl(html, {
            testItem: data,
            result: dataResult
        });
        document.querySelector('.modal-content').innerHTML = compiled;
    }

    function hideModal() {
        document.querySelector('.modal').style.display = 'none';
    }

    function refreshAll() {
        location.reload();
    }
};
