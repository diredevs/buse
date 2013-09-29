var myPosition;
function getCurrentPosition() {
	navigator.geolocation.getCurrentPosition(function(position) {
		myPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	}, function() {});

	marker.setOptions({position: myPosition});
}