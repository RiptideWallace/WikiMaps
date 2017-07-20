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
      ($("<div>").text(map.name)
        .append($("<div>").text(map.description))
        .append($("<img>").attr("src", map.image_url)))
        .appendTo($("body").find(".maps-container"));
    }
  });;
});
