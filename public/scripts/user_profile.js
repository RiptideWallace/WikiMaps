jQuery(document).ready(function(){
  var userProfileId = $("#user-profile-id").val();

  $.ajax({
    method: "GET",
    url: "/users/" + userProfileId + "/maps",
  }).done((maps) => {
    for(map of maps) {
      ($("<div>").addClass("col-xs-12 col-sm-4")
        .append($("<a>").attr("href", "#")
          .append($("<div>").addClass("map-container")
            .append($("<h2>").text(map.name))
            .append($("<p>").text(map.description))
            .append($("<img>").attr("src", map.image_url).addClass("img-responsive center-block"))
          )
        )
      )
      .appendTo($("body").find(".maps-container"));
    }
  }).fail((error) => {
    console.log(error)
    // $(".userMaps").empty().text(error.responseText);
  });

  $.ajax({
    method: "GET",
    url: "/users/" + userProfileId + "/favourites",
  }).done((maps) => {
    if (!maps) {
      ($("<p>").text("None yet!")).appendTo($("body").find("fav-maps-container"));
    }
    for(map of maps) {
      ($("<div>").addClass("col-xs-12 col-sm-4")
        .append($("<a>").attr("href", "#")
          .append($("<div>").addClass("map-container")
            .append($("<h2>").text(map.name))
            .append($("<p>").text(map.description))
            .append($("<img>").attr("src", map.image_url).addClass("img-responsive center-block"))
          )
        )
      )
      .appendTo($("body").find(".fav-maps-container"));
    }
  }).fail((error) => {
    console.log(error)
    // $(".userMaps").empty().text(error.responseText);
  });

});
