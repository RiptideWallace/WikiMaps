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
        .append($("<a>").attr("href", "#")
          .append($("<div>").addClass("map-container")
            .append($("<h2>").text(map.name))
            .append($("<p>").text(map.description))
            .append($("<img>").attr("src", map.image_url).addClass("img-responsive center-block"))
            .append($("<h3>").text(function() { return "Likes " + (map.id); })) //where map.id, replace with getLikes(map.id) once working properly
            .append($("<a href='/maps/" + map.id + "/show'><span class='glyphicon glyphicon-heart-empty'></a>"))
          )
        )
      )
      .appendTo($("body").find(".maps-container"));
    }
  }).fail(function(error) {
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
            .append($("<h3>").text(function() { return "Likes " + (map.id); })) //where map.id, replace with getLikes(map.id) once working properly
            .append($("<a href='/maps/" + map.id + "/show'><span class='glyphicon glyphicon-heart-empty'></a>"))
          )
        )
      )
      .appendTo($("body").find(".fav-maps-container"));
    }
  }).fail(function(error) {
    console.log(error)
    // $(".userMaps").empty().text(error.responseText);
  });

});
