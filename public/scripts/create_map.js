jQuery(document).ready(function(){
  $('#saveMarkerInfo').on('click', function(event){
    $.ajax({
      type: 'POST',
      data: $('#markerInfo').serialize(),
      url: '/maps/new',
      success: function(data) {
        var markerInfo = $('#markerInfo').serialize();
        console.log(markerInfo)
      }
    });
  });
});
