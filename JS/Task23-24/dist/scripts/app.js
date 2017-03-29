requirejs.config ({
   paths: {
      'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min'
   }
});
// Kakayato huina

require(
   [
      'model',
      'view',
      'controller',
      'jquery',
      'template'
   ],
   function(model, view, controller, $) { // modules as parameters
      model.check();
      view.check();
      controller.check();
      $ && console.log('Jquery plugged');
   }

);
