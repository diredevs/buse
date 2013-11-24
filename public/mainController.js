var circularUfrn = angular.module('circularUfrn', []);

function mainController($scope, $http) {
	//$scope.formData = {};

	// when landing on the page, get all buses and show them
	$http.get('/api/buses')
		.success(function(data) {
			$scope.buses = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.loadBuses = function(){
  		//get the buses position and set markers
		for(var i=0; i < $scope.buses.length;i++){
			var marker = new google.maps.Marker({
				position: {lat : $scope.buses[i].lat,
					lng : $scope.buses[i].lng},
	    		map: map,
	    		icon: './public/img/busMarker.gif',
	    		title: $scope.buses[i].text
	  		});
	  		markers.push(marker);
		}
	}

	$scope.loadRefresher = function(){
		//hide the markers and then erase them from the container
		for (var i = 0; i < markers.length; i++) {
    		markers[i].setMap(null);
  		}
  		markers = [];
  		console.log(following);
		$scope.loadBuses();

		interval = setInterval(function(){	
			if(following){
				console.log("refreshing buses...")
				$scope.loadBuses();
			}
			else{
				console.log("not following");
			}
		}, 1000);
	}

	setTimeout(function() {
    	$scope.loadRefresher();
	}, 2000);
}