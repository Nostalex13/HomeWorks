define(
   'view',
   ['model', 'jquery', 'template'],
   function(Model) {

      let data = {
         name: 'Name'
      };

      let compiled = tmpl( $('#test').html(), { data: data });
      $('.wrapper').append(compiled);

      return {
         check() {
            console.log('View plugged!!1');
         }
      };
   }
);
