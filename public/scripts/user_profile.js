jQuery(document).ready(function(){
  var userProfileId = $("#user-profile-id").val();

  $.ajax({
    method: "GET",
    url: "/users/" + userProfileId + "/maps",
  }).done((maps) => {
    for(map of maps) {
      ($("<div>").addClass("col-xs-12 col-sm-4")
        .append($("<h2>").text(map.name))
        .append($("<p>").text(map.description))
        .append($("<img>").attr("src", map.image_url).addClass("img-responsive")))
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
    for(map of maps) {
      ($("<div>").addClass("col-xs-12 col-sm-4")
        .append($("<h2>").text(map.name))
        .append($("<p>").text(map.description))
        .append($("<img>").attr("src", map.image_url).addClass("img-responsive")))
        .appendTo($("body").find(".fav-maps-container"));
    }
  }).fail((error) => {
    console.log(error)
    // $(".userMaps").empty().text(error.responseText);
  });

});

