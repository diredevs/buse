var interval;
var following = true;

function getCurrentPosition() {
	var myPosition;
	navigator.geolocation.getCurrentPosition(function(position) {
		myPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	}, function() {});
	return myPosition;
}

function zoomIn(){
	var curZoom = map.zoom;
	curZoom = curZoom + 1;
	map.setOptions({zoom: curZoom});
}

function zoomOut(){
	var curZoom = map.zoom;
	curZoom = curZoom - 1;
	map.setOptions({zoom: curZoom});
}