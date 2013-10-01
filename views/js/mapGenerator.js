var map;
var marker;
function initialize() {
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
		disableDefaultUI: true,
		center: new google.maps.LatLng(-5.837605, -35.203034),
		zoom: 15,
		minZoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(map_canvas, map_options);

	//set map center to the user location and show its marker
	navigator.geolocation.getCurrentPosition(function(position) {
  		initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  		myPosition = initialLocation;
  		map.setCenter(myPosition);
  		marker = new google.maps.Marker({
			position: myPosition,
    		map: map,
    		icon: 'img/userRedPin.png',
    		title: 'Minha posição'
  		});
		}, function() {}
	);

}
google.maps.event.addDomListener(window, 'load', initialize);