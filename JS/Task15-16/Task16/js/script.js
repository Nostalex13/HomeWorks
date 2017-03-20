'use strict';

$(function() {
    showModal();
    rangeValue();

    function Test() {
        this._question = '';
        this._answers = [];
        this._correct = 0;

        this.question = function(quest) {
            if (!arguments.length) {
                return this._question;
            }

            this._question = quest;
        };

        this.answers = function(answers) {
            if (!arguments.length) {
                return this._answers;
            }

            this._answers = answers;
        };

        this.correct = function(correct) {
            if (!arguments.length) {
                return this._correct;
            }

            this._correct = correct;
        };

        this.check = function() {
            console.log('1..2..check');
        };
    }

    function TestRadio() {
        Test.apply(this, arguments);

        this.wat = function() {
            console.log('TestRadio');
        }

        let oldCheck = this.check;
        this.check = function(args) {
            oldCheck.call(this);
            console.log('Radio check');
        }
    }

    function TestCheckbox() {
        Test.apply(this, arguments);

        this.wat = function() {
            console.log('TestCheckbox');
        }

        let oldCheck = this.check;
        this.check = function(asd) {
            oldCheck.call(this);
            console.log(`Test check`);
        }
    }

    // let testTemp = new TestCheckbox();
    // testTemp.check();

    /*          MODAL           */

    $('.closeBtn').on('click', function() {
        hideModal();
    });

    $('.showBtn').on('click', function() {
        if ( JSON.parse(localStorage.getItem('Quest')) == null) {
            alert('Local Storage is empty');
        } else {
            showMain();
            hideModal();
        }
    });

    $('[type="range"]').on('change', rangeValue);

    $('.postBtn').on('click', function(e) {

        for (let i = 0; i < $('[type="text"]').length; i++) {
            if ( !$('[type="text"]').eq(i).val().length ) {
                return;
            }
        }

        // $('.correctAnswer [type="text"]').each(function() {
        //     chkValue = $(this).val();
        // });
        let chkValue = $('.correctAnswer [type="text"]').val();

        if ( !(chkValue <= +$('[type="range"]').val()) || !(chkValue > 0) ) {
            e.preventDefault();

            return;
        }

        let testObj = new TestCheckbox();
        testObj.question( $('.question [type="text"]').val() );
        let answersObj = [];

        for (let i = 0; i < $('.answers_list [type="text"]').length; i++) {
            answersObj[i] = $('.answers_list [type="text"]').eq(i).val();
        }

        testObj.answers(answersObj);
        testObj.correct( $('.correctAnswer [type="text"]').val()-1 );

        let storageData = JSON.parse(localStorage.getItem('Quest'));

        // Checking for storage entry data existence
        if (storageData == null) {
            storageData = [testObj];
            localStorage.setItem('Quest', JSON.stringify(storageData));
        } else {
            storageData[storageData.length] = testObj;
            localStorage.setItem('Quest', JSON.stringify(storageData));
        }

        // Clear out storage entry
        // localStorage.setItem('Quest', JSON.stringify(null));

        e.preventDefault();
        hideModal();
        showMain();
    });

    $('.correctAnswer [type="text"]').on('keyup', keyUpCheck);

    /*          Correct answer handler          */

    function keyUpCheck() {
        let obj = $('.answers_list span');
        let value = $('.correctAnswer [type="text"]').val();

        obj.removeClass('highlighted-text');
        obj.siblings('[type="text"]').removeClass('highlighted-input');

        if ( +value <= +$('[type="range"]').val() && +value > 0 ) {
            obj.eq(value-1).addClass('highlighted-text');
            obj.eq(value-1).siblings('[type="text"]').addClass('highlighted-input');

            checkError(true);
        } else {
            if (value != '') {
                $('.correctAnswer [type="text"]').addClass('errorValue');
                checkError(false);

                return;
            }
        }

        $('.correctAnswer [type="text"]').removeClass('errorValue');
    }

    function checkError(flag) {
        let correctAnsw = $('.correctAnswer');

        if (flag == true) {
            correctAnsw.children('.errorMessage').slideUp(300);

            setTimeout(function() {
                $('.errorMessage').remove();
            }, '300');

        } else {
            if (flag == false) {
                if ( !correctAnsw.children('.errorMessage').length ) {
                    correctAnsw.append('<span class="errorMessage"> Invalid value </span>');
                    correctAnsw.children('.errorMessage').slideDown(300);
                }
            }
        }
    }

    function showModal() {
        $('.modal-header').css('line-height', $('.modal-header').css('height'));
    }

    function hideModal() {
        $('.modal').css('display', 'none');
    }

    /*          Range handler           */

    function rangeValue() {
        let rangeObj = $('[type="range"]');
        let val = rangeObj.val();

        $('.rangeVal').text(val);

        if ( $('.answers_list').children().length > val ) {
            let currentList = $('.answers_list').children();

            for (let i = currentList.length-1; i > val-1; i--) {
                currentList.eq(i).stop(true, false).slideUp(300);

                setTimeout(function() {
                    currentList.eq(i).remove();
                }, '300');

            }

            keyUpCheck();
        } else {
            let answersObj = $('.answers_list').children();

            for (let i = $('.answers_list').children().length-1; i < val-1; i++) {
                rangeObj.siblings('div').append(`<div><span> Answer #${i+2}: </span><input type="text" required></div>`);
            }

            keyUpCheck();

            $('.answers_list').children().stop(true, false).slideDown(300);
        }
    }

    /*              MAIN WINDOW             */

    function showMain() {
        $('.wrapper').css('display', 'block');

        let html = $('#test').html();

        let objList = JSON.parse(localStorage.getItem('Quest'));
        $('.testMenu').append( tmpl(html, { content: objList }) );
        checkboxesSelect();
    }

    /*          one checked checkbox            */

    function checkboxesSelect() {
        for(let i = 0; i < $('[type="checkbox"]').length; i++) {
            $('[type="checkbox"]').eq(i).on('click', function() {

                let sub = $(this).parent();

                while (!sub.hasClass('submenu')) {
                    sub = sub.parent();
                }

                let subItems = sub.find('[type="checkbox"]');

                for(let k = 0; k < subItems.length; k++) {
                    subItems[k].checked = false;
                }

                this.checked = true;
            });
        }
    }
});
