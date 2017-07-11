$(document).ready(function() {
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  cities.forEach(function(city) {
    var text = "<option>" + city + "</option>";
    $('#city-type').append(text);
  });

  var updatePic = function(event) {
    var city = $(event.target).val().toLowerCase();
    $('body').css('background', 'url(images/' + city + '.jpg)');
    if (city === "syd") {
     $('body').css('background-image', 'url(images/sydney.jpg)');
   } else if (city === "atx") {
     $('body').css('background-image', 'url(images/austin.jpg)');
     }
  }

  $('#city-type').change(updatePic);
})
