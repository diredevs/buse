var interval;
var following;

function followMe() {
	targetMe();

	interval = setInterval(function(){
		if(following){
			targetMe();
		}
		else{
			clearInterval(interval);
		}
	}, 1000);
}