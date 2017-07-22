jQuery(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "/maps"
  }).done((maps) => {
    for(map of maps) {
      ($("<div>").addClass("col-xs-12 col-sm-4")
        .append($("<h2>").text(map.name))
        .append($("<p>").text(map.description))
        .append($("<img>").attr("src", map.image_url).addClass("img-responsive")))
        .appendTo($("body").find(".maps-container"));
    }
  });
});
