jQuery(document).ready(function(){
  $('#saveMarkerInfo').on('click', function(event){
      $.ajax({
        type: 'POST',
        data: $('#markerInfo').serialize(),
        url: '/api/markers',
        success: function(data) {
        }
    })
  });
});

