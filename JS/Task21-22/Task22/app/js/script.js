window.onload = function() {

   const HTML = document.querySelector('#test').innerHTML;
   const QUESTIONS = JSON.parse(localStorage.getItem('testQuestions'));

   document.querySelector('.testMenu').innerHTML = tmpl(HTML, { content: QUESTIONS.questions });

   const CHECKBOXES = document.querySelectorAll('[type=checkbox]');
   const SUBMENUS = document.querySelectorAll('.submenu');

   try {
      document.querySelector('.check').addEventListener('click', checkBtnClick);
   } catch (e) {
      console.log('some error here:', e);
   }

   /*          only one checked checkbox             */

   for (let item of CHECKBOXES) {
      item.addEventListener('click', function() {

         let sub = this.parentNode;

         while (!sub.classList.contains('submenu')) {
            sub = sub.parentNode;
         }

         let subItems = sub.querySelectorAll('[type=checkbox]');

         for(let subItem of subItems) {
            subItem.checked = false;
         }

         this.checked = true;
      });
   }

   function checkBtnClick() {
      if ( answeredCount() ) {
         let checkedAnswers = [];
         let correctness = [];

         for(let i = 0; i < SUBMENUS.length; i++) {
            let subItems = SUBMENUS[i].querySelectorAll('[type=checkbox]');

            for(let k = 0; k < subItems.length; k++) {
               if(subItems[k].checked == true) {
                  checkedAnswers[i] = subItems[k].parentNode.innerText;
                  correctness[i] = false;

                  if (k == QUESTIONS.questions[i].correct) {
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

      for (let item of CHECKBOXES) {
         if (item.checked == true) {
            checkedCount++
         }
      }

      if(checkedCount != SUBMENUS.length) {
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

      for (let item of CHECKBOXES) {
         item.setAttribute('disabled', 'true');
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
            question: `${i+1}. ${QUESTIONS.questions[i].title} : `,
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
