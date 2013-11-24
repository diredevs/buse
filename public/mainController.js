var circularUfrn = angular.module('circularUfrn', []);
/*var bus = [
	//starts bus 1
	{lat	: -5.836431, lng	: -35.197989},
	{lat	: -5.83658,  lng	: -35.19771},
	{lat	: -5.836836, lng	: -35.197516},
	{lat	: -5.836986, lng	: -35.197366},
	{lat	: -5.837156, lng	: -35.197216},
	{lat	: -5.837327, lng	: -35.197066},
	{lat	: -5.83769,  lng	: -35.19683},
	{lat	: -5.837946, lng	: -35.196615},
	{lat	: -5.838096, lng	: -35.196486},
	{lat	: -5.838309, lng	: -35.196379},
	{lat	: -5.838544, lng	: -35.196272},
	{lat	: -5.838821, lng	: -35.196079},
	{lat	: -5.838949, lng	: -35.195972},
	{lat	: -5.839248, lng	: -35.195778},
	{lat	: -5.83944,  lng	: -35.19565},
	{lat	: -5.839675, lng	: -35.195499},
	{lat	: -5.83991,  lng	: -35.195414},
	{lat	: -5.840059, lng	: -35.195328},
	{lat	: -5.840465, lng	: -35.19522},
	{lat	: -5.840785, lng	: -35.195156},
	{lat	: -5.840999, lng	: -35.195135},
	{lat	: -5.841255, lng	: -35.195156},
	{lat	: -5.841426, lng	: -35.195135},
	{lat	: -5.841725, lng	: -35.195113},
	{lat	: -5.842002, lng	: -35.195156},
	{lat	: -5.84228,	 lng	: -35.195156},
	{lat	: -5.8426,	 lng	: -35.19522},
	{lat	: -5.842984, lng	: -35.195414},
	{lat	: -5.843283, lng	: -35.195564},
	{lat	: -5.843496, lng	: -35.195757},
	{lat	: -5.843731, lng	: -35.196143},
	{lat	: -5.843902, lng	: -35.196615},
	{lat	: -5.843966, lng	: -35.197109},
	{lat	: -5.843945, lng	: -35.197602},
	{lat	: -5.843902, lng	: -35.197989},
	{lat	: -5.843816, lng	: -35.198546},
	{lat	: -5.843774, lng	: -35.198933},
	{lat	: -5.843752, lng	: -35.199448},
	{lat	: -5.843731, lng	: -35.199877},
	{lat	: -5.843688, lng	: -35.200306},
	{lat	: -5.843646, lng	: -35.200714},
	{lat	: -5.84356,  lng	: -35.201164},
	{lat	: -5.84356,  lng	: -35.20155},
	{lat	: -5.843411, lng	: -35.202087},
	{lat	: -5.843219, lng	: -35.202538},
	{lat	: -5.842877, lng	: -35.202881},
	{lat	: -5.842344, lng	: -35.20316},
	{lat	: -5.841639, lng	: -35.203546},
	{lat	: -5.840935, lng	: -35.203846},
	{lat	: -5.840337, lng	: -35.204211},
	//starts bus 0
	{lat	: -5.839526, lng	: -35.20464},
	{lat	: -5.838651, lng	: -35.20507},
	{lat	: -5.837904, lng	: -35.205349},
	{lat	: -5.837306, lng	: -35.205456},
	{lat	: -5.837711, lng	: -35.205863},
	{lat	: -5.837839, lng	: -35.205713},
	{lat	: -5.838181, lng	: -35.205456},
	{lat	: -5.838523, lng	: -35.205327},
	{lat	: -5.838928, lng	: -35.20507},
	{lat	: -5.839504, lng	: -35.204769},
	{lat	: -5.839803, lng	: -35.204576},
	{lat	: -5.84023,  lng	: -35.20434},
	{lat	: -5.840743, lng	: -35.204104},
	{lat	: -5.841127, lng	: -35.203954},
	{lat	: -5.841404, lng	: -35.204254},
	{lat	: -5.841596, lng	: -35.204576},
	{lat	: -5.84181, lng		: -35.205027},
	{lat	: -5.842023, lng	: -35.205477},
	{lat	: -5.84228,  lng	: -35.205906},
	{lat	: -5.8426,   lng	: -35.206486},
	{lat	: -5.842899, lng	: -35.206979},
	{lat	: -5.843155, lng	: -35.207473},
	{lat	: -5.843624, lng	: -35.208395},
	{lat	: -5.84371,  lng	: -35.208674},
	{lat	: -5.843155, lng	: -35.208953},
	{lat	: -5.842258, lng	: -35.209447},
	{lat	: -5.841746, lng	: -35.209812},
	{lat	: -5.840999, lng	: -35.210219},
	{lat	: -5.840038, lng	: -35.210477},
	{lat	: -5.839606, lng	: -35.210598},
	{lat	: -5.839238, lng	: -35.210684},
	{lat	: -5.838901, lng	: -35.21078},
	{lat	: -5.838539, lng	: -35.210893},
	{lat	: -5.838133, lng	: -35.211043},
	{lat	: -5.837925, lng	: -35.210973},
	{lat	: -5.837952, lng	: -35.210834},
	{lat	: -5.838138, lng	: -35.210743},
	{lat	: -5.838341, lng	: -35.210592},
	{lat	: -5.838453, lng	: -35.21033},
	{lat	: -5.838405, lng	: -35.210072},
	{lat	: -5.838384, lng	: -35.209756},
	{lat	: -5.83833,  lng	: -35.209428},
	{lat	: -5.838282, lng	: -35.209171},
	{lat	: -5.83824,  lng	: -35.20886},
	{lat	: -5.838181, lng	: -35.208484},
	{lat	: -5.838117, lng	: -35.208055},
	{lat	: -5.838048, lng	: -35.20761},
	{lat	: -5.837994, lng	: -35.207229},
	{lat	: -5.837962, lng	: -35.206955},
	{lat	: -5.837914, lng	: -35.206703},
	{lat	: -5.837877, lng	: -35.206414},
	{lat	: -5.837834, lng	: -35.206086},
	{lat	: -5.837829, lng	: -35.205834},
	{lat	: -5.837898, lng	: -35.205625},
	{lat	: -5.837882, lng	: -35.205432},
	{lat	: -5.837642, lng	: -35.205228},
	{lat	: -5.837493, lng	: -35.204874},
	{lat	: -5.837482, lng	: -35.204466},
	{lat	: -5.83745,  lng	: -35.204101},
	{lat	: -5.837434, lng	: -35.203812},
	{lat	: -5.837429, lng	: -35.20349},
	{lat	: -5.837455, lng	: -35.203238},
	{lat	: -5.83753,  lng	: -35.20312},
	{lat	: -5.837663, lng	: -35.203023},
	{lat	: -5.837882, lng	: -35.202959},
	{lat	: -5.838053, lng	: -35.202905},
	{lat	: -5.838304, lng	: -35.202825},
	{lat	: -5.83848,  lng	: -35.202626},
	{lat	: -5.838549, lng	: -35.20231},
	{lat	: -5.838549, lng	: -35.201966},
	//starts bus 2	
	{lat	: -5.838533, lng	: -35.201521},
	{lat	: -5.838533, lng	: -35.201124},
	{lat	: -5.838576, lng	: -35.200888},
	{lat	: -5.838475, lng	: -35.200813},
	{lat	: -5.83833,  lng	: -35.200899},
	{lat	: -5.83808,  lng	: -35.200899},
	{lat	: -5.83761,  lng	: -35.200969},
	{lat	: -5.837386, lng	: -35.201087},
	{lat	: -5.837204, lng	: -35.201248},
	{lat	: -5.837002, lng	: -35.201468},
	{lat	: -5.836772, lng	: -35.201709},
	{lat	: -5.836505, lng	: -35.201956},
	{lat	: -5.836137, lng	: -35.20232},
	{lat	: -5.835721, lng	: -35.202723},
	{lat	: -5.835411, lng	: -35.202964},
	{lat	: -5.835032, lng	: -35.20313},
	{lat	: -5.83468,  lng	: -35.203141},
	{lat	: -5.834328, lng	: -35.203147},
	{lat	: -5.833885, lng	: -35.203141},
	{lat	: -5.83341,  lng	: -35.20313},
	{lat	: -5.832988, lng	: -35.203109},
	{lat	: -5.832759, lng	: -35.202959},
	{lat	: -5.832882, lng	: -35.202771},
	{lat	: -5.833058, lng	: -35.202524},
	{lat	: -5.833271, lng	: -35.202245},
	{lat	: -5.833474, lng	: -35.201961}
]*/

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
    	$scope.loadRefresher();
    	$scope.busMover();
	}, 2000);
}