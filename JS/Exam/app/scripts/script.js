window.onload = function() {

   for (let item of document.querySelectorAll('a')) {
      item.addEventListener('click', function(e) {
         e.preventDefault();
      });
   }

   /*          Slider         */

   let sliders = document.querySelectorAll('.slider');

   for (let item of sliders) {
      let arrowR = document.createElement('p')
      let arrowL = document.createElement('p')
      arrowR.classList.add('slider__arrowR');
      arrowL.classList.add('slider__arrowL');

      item.append(arrowL);
      item.append(arrowR);

      new Slider(item);
   }

   function Slider(sliderObj) {
      let self = this;
      this.currentValue = 1;
      this.sliderLength = sliderObj.querySelectorAll('ul li').length;
      this.itemWidth = 300;
      this.currentPos = 0;

      leftBtn();
      rightBtn();

      function leftBtn() {
         let leftArr = sliderObj.querySelector('.slider__arrowL');
         leftArr.addEventListener('click', function() {
            if(self.currentValue == 1) {
               self.currentValue = self.sliderLength;

               let list = sliderObj.querySelector('ul');
               self.currentPos -= self.itemWidth * (self.sliderLength - 1);

               list.style.left = self.currentPos + 'px';

               return this;
            }

            let list = sliderObj.querySelector('ul');
            self.currentPos += self.itemWidth;

            list.style.left = self.currentPos + 'px';
            self.currentValue--;
         });
      }

      function rightBtn() {
         let rightArr = sliderObj.querySelector('.slider__arrowR');
         rightArr.addEventListener('click', function() {
            if(self.currentValue == self.sliderLength) {
               self.currentValue = 1;

               let list = sliderObj.querySelector('ul');
               self.currentPos += self.itemWidth * (self.sliderLength - 1);

               list.style.left = self.currentPos + 'px';

               return this;
            }

            let list = sliderObj.querySelector('ul');
            self.currentPos -= self.itemWidth;

            list.style.left = self.currentPos + 'px';
            self.currentValue++;
         });
      }

   }
   /*       Images block      */

   function update(data) {
      if (!ResultsCheck(data)) {
         return false;
      }

      let grid = document.querySelector('.grid');
      let html = document.getElementById('grid').innerHTML;

      let links = data.hits.map(function(item) {
         return item.webformatURL;
      });
      // console.log(data.hits);

      let compiled = tmpl(html, { data: links });
      grid.innerHTML = compiled;

      imagesLoaded(grid, function() {
         let msnry = new Masonry( grid, {
            itemSelector: '.grid__img',
            columnWidth: 300,
            gutter: 20
         });
      });
   }

   function ResultsCheck(data) {

      function addNoResult(grid) {
         let noResults = document.createElement('p');
         noResults.classList.add('noResults');
         noResults.innerText = 'Sorry, no results found';

         grid.appendChild(noResults);

         return true;
      }

      function removeNoResult(grid) {
         if (grid.childNodes.length) {
            let item = grid.lastChild;
            do {
               grid.removeChild(item);
               item = grid.lastChild;
            }
            while (item);

            return true;
         } else {
            return false;
         }
      }

      function checking(data) {
         let grid = document.querySelector('.grid');
         if (!data.total) {

            if (grid.childNodes.length > 1) {
               removeNoResult(grid);
               addNoResult(grid);
               let msnry = new Masonry( grid, {
                  itemSelector: '.grid__img',
                  columnWidth: 300,
                  gutter: 20
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
      let xmlhttp;
      try {
         xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
         try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         } catch (E) {
            xmlhttp = false;
         }
      }
      if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
         xmlhttp = new XMLHttpRequest();
      }
      return xmlhttp;
   }

   function searching(query) {
      let xmlhttp = getXmlHttp();
      let perPage = 7; // quantity of results

      xmlhttp.open('POST',
      `https://pixabay.com/api/?key=4845683-933d895de826e8c128c7c84b3&per_page=${perPage}&q=${query}`,
      true);
      xmlhttp.onreadystatechange = function() {
         if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) {
               update(JSON.parse(xmlhttp.responseText));
            } else {
               console.log('No access bla bla. Slow down please');
            }
         }
      };
      xmlhttp.send(null);
   }

   document.querySelector('.activity-search__btn').addEventListener('click', searchImgHandler);
   document.querySelector('.activity-search__input').addEventListener('keydown', function(e) {
      if (e.keyCode == 13) {
         e.preventDefault();
         searchImgHandler();
      }
   });

   (function() {
      let sections = ['Sport and Activity', 'Wellnes and Health', 'Extreme  Sports and Expeditions', 'Games', 'Culture and Edution', 'Les Paul', 'Relaxation', 'Travelling'];
      let inputText = sections[Math.floor(Math.random()*sections.length)]; // рандомный выбор раздела

      // searching();
      searching(inputText);
   })();

   function searchImgHandler() {
      let input = document.querySelector('.activity-search__input');

      if (input.value) {
         searching(input.value);
      }
   }
};
