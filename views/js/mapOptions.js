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