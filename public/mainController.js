var circularUfrn = angular.module('circularUfrn', []);
var busPath = [
	{lat	: -5.836431, 	lng : -35.197989},
	{lat	: -5.83658, 	lng : -35.19771},
	{lat	: -5.836836, 	lng : -35.197516},
	{lat	: -5.836986, 	lng : -35.197366},
	{lat	: -5.837156, 	lng : -35.197216},
	{lat	: -5.837327, 	lng : -35.197066},
	{lat	: -5.83769, 	lng : -35.19683},
	{lat	: -5.837946, 	lng : -35.196615},
	{lat	: -5.838096, 	lng : -35.196486},
	{lat	: -5.838309, 	lng : -35.196379},
	{lat	: -5.838544, 	lng : -35.196272}
]

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

	$scope.loadRefresher = function() {
		
		$scope.loadBuses();

		interval = setInterval(function(){	
			//hide the markers and then erase them from the container
			for (var i = 0; i < markers.length; i++) {
    			markers[i].setMap(null);
  			}
  			markers = [];

			if(following){
				console.log("refreshing buses...")
				$scope.loadBuses();
			}
			else{
				console.log("not following");
			}
		}, 1000);
	}

	$scope.busMover = function() {
		var length = busPath.length;
		var iterator = 0;

		var interval2  = setInterval(function(){
			console.log("iterando, pos: "+iterator+' em: '+busPath.length);
			$scope.buses[1].lat = busPath[iterator].lat;
			$scope.buses[1].lng = busPath[iterator].lng;
			iterator = iterator+1;
			iterator = iterator%busPath.length;
		}, 2000);
	}

	setTimeout(function() {
    	$scope.loadRefresher();
    	$scope.busMover();
	}, 2000);
}