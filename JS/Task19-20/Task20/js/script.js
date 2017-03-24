$(function() {

   // dataJson

   /*          Skills         */

   let skillsArray = [];

   _.forEach(dataJson, function(obj) {
       skillsArray += _.map(obj.skills, function(item) {
          return item;
       });

       skillsArray += ',';
   });

   skillsArray = skillsArray.split(',');
   skillsArray = _.compact(skillsArray);
   skillsArray = _.uniq(skillsArray);

   skillsArray = _.sortBy(skillsArray, function(item) {
      return item.toLowerCase();
   });

   console.log('Skills array:', skillsArray);

   /*          Names          */

   let sortedByFriends;


   sortedByFriends = _.sortBy(dataJson, function(obj) {
      return obj.friends.length;
   });

   let namesArray = [];

   // console.log('Objects sorted by friends', sortedByFriends);

   _.forEach(sortedByFriends, function(obj) {
      namesArray += obj.name;

      namesArray += ',';
   });

   namesArray = namesArray.split(',');
   namesArray = _.compact(namesArray);

   console.log('Names array:', namesArray);

   /*          Friends        */

   let friendsArray = [];

   _.forEach(dataJson, function(obj) {
      _.forEach(obj.friends, function(item) {
         friendsArray += item.name;

         friendsArray += ',';
      })
   });

   friendsArray = friendsArray.split(',');
   friendsArray = _.compact(friendsArray);
   friendsArray = _.uniq(friendsArray);

   console.log('Friends array:', friendsArray);

});
