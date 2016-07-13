angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
	$scope.link = {} 
	if(!$scope.link.url){
		$scope.message = 'Enter a URL'
	} else{
		Links.create($scope.link)
		.then(function(link) {
			console.log(link)
			//route to links
		})
		.catch(function(err){
			console.error(err);
			$scope.message = 'Enter a valid URL'
		})	
	}
	
 });
