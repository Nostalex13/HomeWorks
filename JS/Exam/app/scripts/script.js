window.onload = function() {
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

};
