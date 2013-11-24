var emmiter = angular.module('emmiter', []);

function emmiterController($scope, $http) {
	$scope.formData = {};

	// update a bus after checking it
	$scope.updateBus = function() {
		$http.post('/api/buses/'+$scope.formData._id, $scope.formData)
			.success(function(data) {
				$('input').val('');
				$scope.buses = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}