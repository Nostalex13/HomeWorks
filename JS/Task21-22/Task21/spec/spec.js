let test = require('../app/js/app.js');

describe('A suite', function() {
   it('Checks input', function() {
      // prepare
         let result;
      //act
         result = test(2, 2);
      // assert
      expect(result).toBe(4);
   }),
   it('Checking negative', function() {
      // prepare
         let result;
      //act
         result = test(0, -2);
      // assert
      expect(result).toBe(Infinity);
   }),
   it('Checking fraction', function() {
      // prepare
         let result;
      //act
         result = test(5, 1.2);
      // assert
      expect(result).toBe(6.89);
   });
});
