angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
	$scope.link = {} 
	$scope.addLink = function(){ // this will equal the data that the factiory function addOne bring it to
		Links.addOne($scope.link)
			.then(function(link) {
		})
		.catch(function(err){
			$scope.message = 'Enter a valid URL'
		})		
	}
 });
