angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
	$scope.link = {};
	$scope.regex = '^(http|https)://.*'
	$scope.addLink = function(){ // this will equal the data that the factiory function addOne bring it to
		Links.addOne($scope.link)
			.then(function(resp) {
				$location.path('/links')
		})
		.catch(function(err){
			console.log(err)
		})		
	}
 });
