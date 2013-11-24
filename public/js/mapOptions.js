var myPosition;
var interval;
var following = true;

function markCurrentPosition() {
	navigator.geolocation.getCurrentPosition(function(position) {
		myPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	}, function() {});
	marker.setOptions({position: myPosition});
}

function targetMe() {
	markCurrentPosition();
	map.setCenter(myPosition);
}

function followMe() {
	targetMe();
	map.setZoom(17);
	map.setOptions({draggable: false});

	interval = setInterval(function(){
		if(following){
			targetMe();
		}
		else{
			clearInterval(interval);
		}
	}, 1000);
}

function enableMapDrag(){
	map.setOptions({draggable: true});
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