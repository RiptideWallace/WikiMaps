var showMap;
var marker;
var markers = [];
var infoWindow;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0
//The initial map that is shown on load
function initMap() {
  var victoria = {lng: -123.3656, lat: 48.4284};
  showMap = new google.maps.Map(document.getElementById('map'), {
    center: victoria,
    zoom: 13
  });
  //Renders the code for the form as the info window
  infowindow = new google.maps.InfoWindow({
    content: document.getElementById('markerInfo')
  });
  //Adds a marker when a point on the map is clicked
  showMap.addListener('click', function(event) {
    addMarker(event.latLng);
  });
}
// Adds a marker to the map and push to the array.
function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: showMap
  });
  markers.push(marker);
  google.maps.event.addListener(marker, 'click', function() {
    $('#markerLng').val(location.lng);
    $('#markerLat').val(location.lat);
    $('.infoTitle').val("");
    $('.infoOutline').val("");
    $('.infoLink').val("");
    $('#markerInfo').css('display', 'block');
    $('#saveMessage').css('display', 'block');
    infowindow.open(showMap, marker);
  });
  google.maps.event.addListenerOnce(showMap, 'tilesloaded', function(event){
    $.ajax({
      method: "GET",
      url: "/maps/"+ $('#map-id').val() +"/markers",
    }).done((markers) => {
      markers.forEach(function(marker) {
        var position = {
          lat: marker.latitude,
          lng: marker.longitude
        }
        addMarker(position);
  });
    }).fail((error) => {
      console.log(error)
      $("#map").empty().text(error.responseText);
    });
  });
}
// Sets the map on all markers in the array.
function setMapOnAll(setMap) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(setMap);
  }
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}
// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(showMap);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

$('#saveMarkerInfo').on('click', function(event){
  var markerInfo = $('#markerInfo').serialize();
    $.ajax({
      type: 'POST',
      data: $('#markerInfo').serialize(),
      url: '/api/markers',
      success: function(data) {
      }
    })
    $('.infoTitle').val("");
    $('.infoOutline').val("");
    $('.infoLink').val("");
    infowindow.close();
    alert('Location Saved!');
});
          
jQuery(document).ready(function() {
  $.ajax({
    method: "GET",
    url:"/maps/" + $('#map-id').val() + "/markers/",
  }).done((markers) => {
    markers.forEach(function(marker) {
    ($("main")
      .append($("<div class='marker-letter'>").text(marker.identifier))
      .append($("<div class='marker-title'>").text(marker.title))
      .append($("<div class='marker-outline'>").text(marker.outline))
      .appendTo($("main"))
       )
     });
   });
var mapId = $("#map-id").val();
  $.ajax({
    method: "GET",
    url: "/maps/" + mapId,
  }).done((maps) => {
    for(map of maps) {
      ($(".map-details-container").append($("<h2>").addClass("map-title").text(map.name))
        .append($("<p>").addClass("map-greeting-info").text(map.description)))
    }
  }).fail((error) => {
    console.log(error)
    $("#map").empty().text(error.responseText);
  })

  });
});

