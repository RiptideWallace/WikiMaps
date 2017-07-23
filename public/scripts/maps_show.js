jQuery(document).ready(function(){
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
