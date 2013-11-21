var circularUfrn = angular.module('circularUfrn', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all buses and show them
	$http.get('/api/buses')
		.success(function(data) {
			$scope.buses = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createBus = function() {
		$http.post('/api/buses', $scope.formData)
			.success(function(data) {
				$('input').val('');
				$scope.buses = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a bus after checking it
	$scope.deleteBus = function(id) {
		$http.delete('/api/buses/' + id)
			.success(function(data) {
				$scope.buses = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}