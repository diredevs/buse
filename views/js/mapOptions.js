var myPosition;
var interval;
var following;

function markCurrentPosition() {
	navigator.geolocation.getCurrentPosition(function(position) {
		myPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	}, function() {});
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