$(() => {

  var mapId = $("#map-id").val();
  $.ajax({
    method: "GET",
    url: "/api/maps/" + mapId,
  }).done((maps) => {
    for(map of maps) {
      ($("#map-title").text(map.name)
        .append($("<div>").text(map.description))
        ).appendTo($("body"));
    }
  }).fail((error) => {
    console.log(error)
    $("#map").empty().text(error.responseText);
  })
});
