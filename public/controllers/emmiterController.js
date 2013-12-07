var emmiter = angular.module('emmiter', []);

function emmiterController($scope, $http) {
	$scope.formData = {};

	// update a bus after checking it
	$scope.sendPosition = function() {
		var person=prompt("Please enter your name","Nome");
		getCurrentPosition();

		var interval  = setInterval(function(){
			getCurrentPosition();
		
			$scope.formData.nome = person;
			$scope.formData.lat = myPosition.lat();
			$scope.formData.lng = myPosition.lng();

			$http.post('/api/buses/' + person, $scope.formData)
				.success(function(data) {
					$scope.buses = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}, 4000);
	}
}