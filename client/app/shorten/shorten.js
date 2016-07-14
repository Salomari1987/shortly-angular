angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
	$scope.link = {} 
	$scope.addLink = function(){
		Links.addOne($scope.link)
			.then(function(link) {
		})
		.catch(function(err){
			$scope.message = 'Enter a valid URL'
		})		
	}
	
 });
