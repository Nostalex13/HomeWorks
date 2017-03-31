requirejs.config ({
   paths: {
      'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min'
   },
   shim: {
      'template': {
         exports: 'tmpl',
      }
   }
});

require(
   [
      'model',
      'view',
      'controller',
      'jquery',
      'template'
   ],
   function(model, view, controller, $, template) {
      let modelObj = model.obj();
      let viewObj = view.obj(modelObj);
      let controllerObj = controller.obj(modelObj, viewObj);
   }
);
