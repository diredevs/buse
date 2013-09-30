
function targetMe() {
	markCurrentPosition();
	map.setCenter(myPosition);
	map.setZoom(17);
	map.setOptions({draggable: false});
}