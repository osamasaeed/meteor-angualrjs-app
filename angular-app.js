if (Meteor.isClient) {
   
angular.module('simple-todos',['angular-meteor']);
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope',
    function ($scope) {
	Session.set('name','OSama');
 	$scope.name=Session.get('name');
	Session.set('name','OSamaSaeed');
      $scope.tasks = [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' }
      ];
 
  }]);}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
