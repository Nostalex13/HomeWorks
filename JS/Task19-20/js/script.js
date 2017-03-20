window.onload = function() {
   let animal = {
      name: 'SObaka',
      woof() {
         console.log('vrot');
      }
   };

   let dog = {
      __proto__: animal,
      woof() {
         super.woof();
      }
   }
   dog.woof();
}
