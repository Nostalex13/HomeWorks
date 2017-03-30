define(
   'view',
   ['model', 'jquery', 'template'],
   function(Model) {

      function View(model) {
         let self = this;

         function init() {
            let item = $('#test').html();

            $('.toDo__menu').append(item);
            self.elements = {
               input: $('.toDo__input'),
               addBtn: $('.toDo__addBtn'),
               editBtn: $('.toDo__editBtn'),
               toDoMenu: $('.toDo__menu')
            }
            self.renderList(model.data);
         }

         self.renderList = function(data) {
            let list = tmpl( $('#test').html(), { data: data });
            self.elements.toDoMenu.html(list);
         };

         init();
      }

      return {
         obj(model) {
            return new View(model);
         }
      }
   }
);
