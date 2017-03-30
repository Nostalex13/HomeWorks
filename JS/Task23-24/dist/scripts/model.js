define(
   'model',
   ['jquery'],
   function() {
      function Model(data) {
         let self = this;

         self.data = data;

         self.addItem = function(item) {
            if (item.length === 0 ) {
               return false;
            }

            if (self.data.indexOf(item) >= 0) {
               alert('The task is already in the list');
               return false;
            }

            self.data.push(item);

            return self.data;
         };

         self.removeItem = function(item) {
            let index = self.data.indexOf(item);

            if ( index === -1) {
               return false;
            }

            self.data.splice(index, 1);

            return self.data;
         };

         self.editItem = function(newItem) {
            if (self.data.indexOf(newItem) >= 0) {
               alert('The task is already in the list');
               return false;
            }
            let oldItem = $('.editing').children('.toDo__text').text();
            let index = self.data.indexOf(oldItem);

            self.data[index] = newItem;

            return self.data;
         }
      }

      return {
         obj(data) {
            return new Model(data);
         }
      }
   }
);
