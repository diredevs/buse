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
		$scope.busRefresher();
	}

	$scope.markersRefresher = function() {
		for(var i = 0; i < markers.length; i++){
			markers[i].setMap(null);
		}

		markers.length = $scope.buses.length;

		for(var i=0; i < $scope.buses.length;i++){
			var newImg = $scope.getIcon(i);
			var newMarker = new google.maps.Marker({
				position: {lat : $scope.buses[i].lat,
					lng : $scope.buses[i].lng},
	    		map: map,
	    		icon: newImg,
	    		title: $scope.buses[i].text
	  		});
	  		markers[i] = newMarker;
		}
	}

	$scope.busRefresher = function() {
		var date = new Date();
		var hour = date.getHours();
		var minutes = date.getMinutes();

		interval = setInterval(function(){

			if(markers.length != $scope.buses.length){
				$scope.markersRefresher();
			}

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
				for(var i = 0; i < $scope.buses.length; i++){
    				markers[i].setTitle("atualizado as "+hour+':'+minutes);
				}

			}
		}, 300);
	}

	$scope.sendPosition = function() {
		var person=prompt("Please enter your name","Nome");
		getCurrentPosition();

		var interval  = setInterval(function(){
			getCurrentPosition();
		
			$scope.formData.text = person;
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

	setTimeout(function() {
    	$scope.loadBuses();
	}, 2000);

	var ref = setInterval(function(){
		$http.get('/api/buses')
				.success(function(data) {
					$scope.buses = data;
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
			}, 4000);
}