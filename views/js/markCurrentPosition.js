var myPosition;

function markCurrentPosition() {
	navigator.geolocation.getCurrentPosition(function(position) {
		myPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	}, function() {});

	marker.setOptions({position: myPosition});
}