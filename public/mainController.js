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

	$scope.markersRefresher = function() {
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

	$scope.busRefresher = function() {
		var date = new Date();
		var hour = date.getHours();
		var minutes = date.getMinutes();

		interval = setInterval(function(){
			if(markers.length != $scope.buses.length)
				$scope.markersRefresher();

			if(following){
				console.log("refreshing buses...")
				for(var i = 0; i < $scope.buses.length; i++){
					markers[i].setPosition({
    				lat: $scope.buses[i].lat,
    				lng: $scope.buses[i].lng
    				});
    				markers[i].setTitle($scope.buses[i].text);
				}
				hour = date.getHours();
				minutes = date.getMinutes();
			}
			else{
				//console.log("not following");
				for(var i = 0; i < $scope.buses.length; i++){
    				markers[i].setTitle("atualizado as "+hour+':'+minutes);
				}

			}
		}, 1000);
	}

	//PREVIEW METHOD
	/*$scope.busMover = function() {
		var length = busPath0.length;
		var iterator = 0;

		var interval2  = setInterval(function(){
			//console.log("iterando, pos: "+iterator+' em: '+busPath0.length);

			$scope.buses[0].lat = busPath0[iterator].lat;
			$scope.buses[0].lng = busPath0[iterator].lng;

			$scope.buses[1].lat = busPath1[iterator].lat;
			$scope.buses[1].lng = busPath1[iterator].lng;

			$scope.buses[2].lat = busPath2[iterator].lat;
			$scope.buses[2].lng = busPath2[iterator].lng;

			iterator = iterator+1;
			iterator = iterator%busPath0.length;
		}, 2000);
	}*/

	$scope.sendPosition = function() {
		var person=prompt("Please enter your name","KASINAO");
		getCurrentPosition();

		var interval  = setInterval(function(){
			getCurrentPosition();
		
			$scope.formData.text = person;
			$scope.formData.lat = myPosition.lat();
			$scope.formData.lng = myPosition.lng();
			console.log("lat: "+ $scope.formData.lat);
			console.log("lng: "+ $scope.formData.lng)

			$http.post('/api/buses/' + person, $scope.formData)
				.success(function(data) {
					$scope.buses = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}, 2000);
	}

	setTimeout(function() {
    	$scope.loadBuses();
    	//$scope.busMover();
	}, 2000);
}