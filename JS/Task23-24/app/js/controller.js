define(
   'controller',
   ['model', 'view', 'jquery'],
   function() {

      function Controller(model, view) {
         let self = this;

         function init() {
            view.elements.addBtn.on('click', addItem);
            view.elements.editBtn.on('click', editBtn);
            view.elements.toDoMenu.on('click', '.toDo__removeItem', removeItem);
            view.elements.toDoMenu.on('click', '.toDo__edit', editItem);

            $('.toDo__item').hover(showControlls, hideControlls);
         }

         function addItem() {
            let newItem = view.elements.input.val();

            if ( model.addItem(newItem) ) {
               view.renderList(model.data);
               refreshToDo();
            }
         }

         function removeItem() {
            let item = $(this).siblings('.toDo__text').text();

            if ( model.removeItem(item) ) {
               view.renderList(model.data);
               refreshToDo();
            }
         }

         function showControlls() {
            $(this).children('.toDo__removeItem').css('display', 'inline-block');
            $(this).children('.toDo__edit').css('display', 'inline-block');
         }

         function hideControlls() {
            $(this).children('.toDo__removeItem').css('display', 'none');
            $(this).children('.toDo__edit').css('display', 'none');
         }

         function editItem() {
            view.elements.addBtn.css('display', 'none');
            view.elements.editBtn.css('display', 'inline-block');
            $('.toDo__item').trigger('mouseleave'); // budlokod
            $('.toDo__item').off();

            $(this).parent().addClass('editing');
            view.elements.input.val( $(this).siblings('.toDo__text').text() );
         }

         function editBtn() {
            let data = view.elements.input.val();

            if (model.editItem(data)) {
               view.renderList(model.data);

               view.elements.addBtn.css('display', 'inline-block');
               view.elements.editBtn.css('display', 'none');

               view.elements.toDoMenu.children('.editing').removeClass('editing');
               refreshToDo();
            }
         }

         function refreshToDo() {
            $('.toDo__item').hover(showControlls, hideControlls);
            view.elements.input.val('');
         }
         init();
      }

      return {
         obj(model, view) {
            return new Controller(model, view);
         }
      }
   }
);
