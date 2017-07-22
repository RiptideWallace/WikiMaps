jQuery(document).ready(function(){

  var userProfileId = $("#user-profile-id").val();
  var getLikes = function(input) {
    $.ajax({
      method: "GET",
      url: "/maps/likes/" + input,
      dataType: 'json',
      success: function(e) {
        debugger;
        return(e);
        debugger;
      }
    });
  }

  $.ajax({
    method: "GET",
    url: "/users/" + userProfileId + "/maps",
  }).done(function(maps) {
    for(map of maps) {
      ($("<div>").addClass("col-xs-12 col-sm-4")
        .append($("<h2>").text(map.name))
        .append($("<p>").text(map.description))
        .append($("<img>").attr("src", map.image_url).addClass("img-responsive"))
        .append($("<h3>").text(function() { return "Likes " + (map.id); }))) //where map.id, replace with getLikes(map.id) once working properly
        .appendTo($("body").find(".maps-container"));
    }
  }).fail(function(error) {
    console.log(error)
    // $(".userMaps").empty().text(error.responseText);
  });

  $.ajax({
    method: "GET",
    url: "/users/" + userProfileId + "/favourites",
  }).done(function(maps) {
    for(map of maps) {
      ($("<div>").addClass("col-xs-12 col-sm-4")
        .append($("<h2>").text(map.name))
        .append($("<p>").text(map.description))
        .append($("<img>").attr("src", map.image_url).addClass("img-responsive"))
        .append($("<h3>").text(function() { return "Likes " + (map.id); }))) //where map.id, replace with getLikes(map.id) once working properly
        .appendTo($("body").find(".fav-maps-container"));
    }
  }).fail(function(error) {
    console.log(error)
    // $(".userMaps").empty().text(error.responseText);
  });

});
