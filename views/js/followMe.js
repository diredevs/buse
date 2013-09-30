var interval;
var following;

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