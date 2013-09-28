function getCurrentPosition() {
	navigator.geolocation.getCurrentPosition(function(position) {
		myPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	}, function() {});

	var marker = new google.maps.Marker({
      position: myPosition,
      map: map,
      title: 'Minha posição'
  	});
}