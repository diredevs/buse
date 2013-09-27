function findMe() {
  
  navigator.geolocation.getCurrentPosition(function(position) {
    initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    map.setCenter(initialLocation);
    map.setZoom(15);
  }, function() {}
  );
  
}