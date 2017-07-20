////////////////////////////////////////////////////
//Keep this section for when we re-introduce users//
////////////////////////////////////////////////////

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/maps"
  }).done((maps) => {
    for(map of maps) {
      ($("<div>").addClass("col-xs-12 col-sm-4")
        .append($("<h2>").text(map.name))
        .append($("<p>").text(map.description))
        .append($("<img>").attr("src", map.image_url).addClass("img-responsive")))
        .appendTo($("body").find(".maps-container"));
    }
  });;
});
