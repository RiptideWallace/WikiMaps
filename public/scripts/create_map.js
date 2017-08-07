var googleMap;
//The initial map that is shown on load
function initMap() {
  var victoria = {lng: -123.3656, lat: 48.4284};
  googleMap = new google.maps.Map(document.getElementById('map'), {
    center: victoria,
    zoom: 13
  });
}


