define(
   'model',
   ['jquery'],
   function() {
      function Model() {
         let self = this;

         self.data = 0;

         function init() {
            self.data = JSON.parse(localStorage.getItem('toDoList'));

            if (!self.data) {
               self.data = [];
            }
         }

         self.addItem = function(item) {
            if (item.length === 0 ) {
               return false;
            }

            if (self.data.indexOf(item) != -1) {
               alert('The task is already in the list');
               return false;
            }

            self.data.push(item);
            refreshLocal();

            return self.data;
         };

         self.removeItem = function(item) {
            let index = self.data.indexOf(item);

            if ( index === -1) {
               return false;
            }

            self.data.splice(index, 1);
            refreshLocal();

            return self.data;
         };

         self.editItem = function(newItem) {
            if (self.data.indexOf(newItem) != -1) {
               alert('The task is already in the list');
               return false;
            }
            let oldItem = $('.editing').children('.toDo__text').text();
            let index = self.data.indexOf(oldItem);

            self.data[index] = newItem;
            refreshLocal();

            return self.data;
         }

         function refreshLocal() {
            localStorage.setItem('toDoList', JSON.stringify(self.data));
         }
         init();
      }

      return {
         obj() {
            return new Model();
         }
      }
   }
);
