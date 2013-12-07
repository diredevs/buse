var circularUfrn = angular.module('circularUfrn', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all buses and show them
	$http.get('/api/buses')
		.success(function(data) {
			$scope.buses = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.getIcon = function (pos) {
		var resp;
		if($scope.buses[pos].text == "cadeirante")
	    	resp = "./public/img/busBlueMarker.gif"
	    else
	    	resp = "./public/img/busMarker.gif"
	    return resp;
	}

	$scope.loadBuses = function(){
		//get the buses position and set markers
		$http.get('/api/buses')
			.success(function(data) {
				$scope.buses = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});

		markers = initializeMarkers();
		for(var i=0; i < $scope.buses.length;i++){
			var img = $scope.getIcon(i);
			var marker = new google.maps.Marker({
				position: {
					lat : $scope.buses[i].lat,
					lng : $scope.buses[i].lng
				},
	    		map: map,
	    		icon: img,
	    		title: $scope.buses[i].text
	  		});
	  		markers.push(marker);
		}
	}
	//mudar atualizacao pra ser do model onibus

	initializeMarkers = function() {
		for(var i = 0; i < markers.length; i++){
        	markers[i].setMap(null);
        }
		return [];	
	}

	$scope.sendPosition = function() {
		var person=prompt("Please enter your name","Nome");
		getCurrentPosition();

		var interval  = setInterval(function(){
			getCurrentPosition();
		
			$scope.formData.text = person;
			$scope.formData.lat = myPosition.lat();
			$scope.formData.lng = myPosition.lng();

			$http.put('/api/buses/' + person, $scope.formData)
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}, 4000);
	}

	setInterval(function() {
    	$scope.loadBuses();
    	//$scope.busRefresher();
	}, 2000);

}