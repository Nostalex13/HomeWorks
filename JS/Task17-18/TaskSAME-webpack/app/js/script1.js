window.onload = function() {
   if (process.env.NODE_ENV == 'development') {
      console.log('Dev Mode');
   }
   console.log('I`m script1');

   let script2 = require('./script2');
   script2.omg('AM script 2');

};
