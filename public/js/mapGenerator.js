var map;
var marker;
function initialize() {
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
		disableDefaultUI: true,
		center: new google.maps.LatLng(-5.837605, -35.203034),
		zoom: 16,
		minZoom: 15,
		maxZoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(map_canvas, map_options);

	// Bounds for UFRN
	var strictBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(-5.840785,-35.203804),		//southwest
		new google.maps.LatLng(-5.836772,-35.198761)	//northeast
	);

	// Listen for the center_changed event
	google.maps.event.addListener(map, 'center_changed', function() {
		if (strictBounds.contains(map.getCenter())) return;

		// out of bounds - Move the map back within the bounds

		var c = map.getCenter(),
		x = c.lng(),
		y = c.lat(),
		maxX = strictBounds.getNorthEast().lng(),
		maxY = strictBounds.getNorthEast().lat(),
		minX = strictBounds.getSouthWest().lng(),
		minY = strictBounds.getSouthWest().lat();

		if (x < minX) x = minX;
		if (x > maxX) x = maxX;
		if (y < minY) y = minY;
		if (y > maxY) y = maxY;

		map.setCenter(new google.maps.LatLng(y, x));
	});


	//set map center to the user location and show its marker
	/*navigator.geolocation.getCurrentPosition(function(position) {
  		initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  		myPosition = initialLocation;
  		//map.setCenter(myPosition);
  		marker = new google.maps.Marker({
			position: myPosition,
    		map: map,
    		//icon: 'img/userRedPin.png',
    		title: 'Minha posição'
  		});
		}, function() {}
	);*/

}
google.maps.event.addDomListener(window, 'load', initialize);