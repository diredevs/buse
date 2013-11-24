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
		$scope.busRefresher();
	}

	$scope.busRefresher = function() {
		var iterator = 0;
		interval = setInterval(function(){
			if(following){
				console.log("refreshing buses...")
					
    			markers[iterator].setPosition({
    				lat: $scope.buses[iterator].lat,
    				lng: $scope.buses[iterator].lng
    			});
    			markers[iterator].setTitle($scope.buses[iterator].text);

    			iterator = iterator+1;
				iterator = iterator%$scope.buses.length;
			}
			else{
				console.log("not following");
			}
		}, 1000);
	}

	$scope.busMover = function() {
		var length = busPath0.length;
		var iterator = 0;

		var interval2  = setInterval(function(){
			console.log("iterando, pos: "+iterator+' em: '+busPath0.length);

			$scope.buses[0].lat = busPath0[iterator].lat;
			$scope.buses[0].lng = busPath0[iterator].lng;

			$scope.buses[1].lat = busPath1[iterator].lat;
			$scope.buses[1].lng = busPath1[iterator].lng;

			$scope.buses[2].lat = busPath2[iterator].lat;
			$scope.buses[2].lng = busPath2[iterator].lng;

			iterator = iterator+1;
			iterator = iterator%busPath0.length;
		}, 2000);
	}

	setTimeout(function() {
    	$scope.loadBuses();
    	$scope.busMover();
	}, 2000);
}