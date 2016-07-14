angular.module('shortly.links', [])
// 
.controller('LinksController', function ($scope, Links) {
  $scope.data={}
  Links.getAll() //links is array of links
  .then(function(res){ // shows all the returned from the function links on the screeen 
  	$scope.data.links=res
  })
});
