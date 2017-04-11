'use strict';

window.onload = function () {
   var _iteratorNormalCompletion = true;
   var _didIteratorError = false;
   var _iteratorError = undefined;

   try {

      for (var _iterator = document.querySelectorAll('a')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
         var item = _step.value;

         item.addEventListener('click', function (e) {
            e.preventDefault();
         });
      }

      /*          Slider         */
   } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
   } finally {
      try {
         if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
         }
      } finally {
         if (_didIteratorError) {
            throw _iteratorError;
         }
      }
   }

   var sliders = document.querySelectorAll('.slider');

   for (var i = 0; i < sliders.length; i++) {
      var arrowR = document.createElement('p');
      var arrowL = document.createElement('p');
      arrowR.classList.add('slider__arrowR');
      arrowL.classList.add('slider__arrowL');

      sliders[i].append(arrowL);
      sliders[i].append(arrowR);

      new Slider(sliders[i], i + 1);
   }

   function Slider(sliderObj, folderNum) {
      var self = this;
      this.currentValue = 1;
      this.list = sliderObj.querySelector('ul');
      this.sliderLength = sliderObj.querySelectorAll('ul li').length;
      this.itemWidth = 300;
      this.currentPos = 0;

      calculateWidth();
      initImages();
      leftBtn();
      rightBtn();

      function initImages() {
         var dist = 'dist/images/sliders/slider' + folderNum + '/';

         var items = self.list.querySelectorAll('li');
         for (var _i = 0; _i < items.length; _i++) {
            var imgPath = dist + ('howIt' + folderNum + '.' + (_i + 1) + '.png');
            items[_i].style.backgroundImage = 'url(' + imgPath + ')';
         }
      }

      function calculateWidth() {
         var listWidth = self.sliderLength * self.itemWidth;
         self.list.style.width = listWidth + 'px';
      }

      function leftBtn() {
         var leftArr = sliderObj.querySelector('.slider__arrowL');
         leftArr.addEventListener('click', function () {
            if (self.currentValue == 1) {
               self.currentValue = self.sliderLength;

               self.currentPos -= self.itemWidth * (self.sliderLength - 1);

               self.list.style.left = self.currentPos + 'px';

               return this;
            }

            self.currentPos += self.itemWidth;

            self.list.style.left = self.currentPos + 'px';
            self.currentValue--;
         });
      }

      function rightBtn() {
         var rightArr = sliderObj.querySelector('.slider__arrowR');
         rightArr.addEventListener('click', function () {
            if (self.currentValue == self.sliderLength) {
               self.currentValue = 1;

               self.currentPos += self.itemWidth * (self.sliderLength - 1);

               self.list.style.left = self.currentPos + 'px';

               return this;
            }

            self.currentPos -= self.itemWidth;

            self.list.style.left = self.currentPos + 'px';
            self.currentValue++;
         });
      }
   }

   /*          Images bar & Masonry        */

   (function () {
      var sections = ['Sport and Activity', 'Wellnes and Health', 'Extreme  Sports and Expeditions', 'Games', 'Culture and Edution', 'Les Paul', 'Relaxation', 'Travelling'];
      var inputText = sections[Math.floor(Math.random() * sections.length)]; // рандомный выбор раздела

      // searching('Les');
      searching(inputText);
   })();
   function update(data) {
      if (!ResultsCheck(data)) {
         return false;
      }

      var grid = document.querySelector('.grid');
      var html = document.getElementById('grid').innerHTML;

      var links = data.hits.map(function (item) {
         return item.webformatURL;
      });
      // console.log(data.hits);

      var compiled = tmpl(html, { data: links });
      grid.innerHTML = compiled;

      imagesLoaded(grid, function () {
         var msnry = new Masonry(grid, {
            itemSelector: '.grid__img',
            columnWidth: '.columnWidth',
            gutter: 20,
            percentPosition: true
         });
      });
   }

   function ResultsCheck(data) {

      function addNoResult(grid) {
         var noResults = document.createElement('p');
         noResults.classList.add('noResults');
         noResults.innerText = 'Sorry, no results found';

         grid.appendChild(noResults);

         return true;
      }

      function removeNoResult(grid) {
         if (grid.childNodes.length) {
            var item = grid.lastChild;
            do {
               grid.removeChild(item);
               item = grid.lastChild;
            } while (item);

            return true;
         } else {
            return false;
         }
      }

      function checking(data) {
         var grid = document.querySelector('.grid');
         if (!data.total) {

            if (grid.childNodes.length > 1) {
               removeNoResult(grid);
               addNoResult(grid);
               var msnry = new Masonry(grid, {
                  itemSelector: '.grid__img',
                  columnWidth: '.columnWidth',
                  gutter: 20,
                  percentPosition: true
               });
            } else {
               if (grid.childNodes.length != 1) {
                  addNoResult(grid);
               }
            }

            return false;
         } else {
            removeNoResult(grid);

            return true;
         }
      }
      return checking(data);
   }

   function getXmlHttp() {
      var xmlhttp = void 0;
      try {
         xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
         try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         } catch (E) {
            xmlhttp = false;
         }
      }
      if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
         xmlhttp = new XMLHttpRequest();
      }
      return xmlhttp;
   }

   function searching(query) {
      var xmlhttp = getXmlHttp();
      var perPage = 7; // quantity of results

      xmlhttp.open('POST', 'https://pixabay.com/api/?key=4845683-933d895de826e8c128c7c84b3&per_page=' + perPage + '&q=' + query, true);
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
               update(JSON.parse(xmlhttp.responseText));
            } else {
               console.log('No access bla bla. Slow down please');
            }
         }
      };
      xmlhttp.send(null);
   }

   document.querySelector('.activity-search__btn').addEventListener('click', searchImgHandler);
   document.querySelector('.activity-search__input').addEventListener('keydown', function (e) {
      if (e.keyCode == 13) {
         e.preventDefault();
         searchImgHandler();
      }
   });

   function searchImgHandler() {
      var input = document.querySelector('.activity-search__input');

      if (input.value) {
         searching(input.value);
      }
   }
};