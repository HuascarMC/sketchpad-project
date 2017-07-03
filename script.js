$(document).ready(function grid(boxes)
{
//Declare how many boxes in the grid.
  var boxes = prompt('Choose gridsize');
//Create grid.
  var $row = $('<div class="row"></div>');
  var $col = $('<div class="col"></div>');
  //Resize boxes assigning css.
      for (var i = 0; i < boxes; i++) {
          $row.append($col.clone());
      }
      for (var i = 0; i < boxes; i++) {
          $('#outerbox').append($row.clone());
        $('.col').css({ 'height': +  Math.floor(400/boxes) - 2, 'width': + Math.floor(400/boxes) - 2});
    }
    $('.col').on('hover', function() {
    var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $(this).css('background-color', randomColorChange);
    });


//Add functionality to navbar buttons.
   $("#g").click(function() {
    var boxes = prompt("Out of service");
   });

   $("#r").on('click', function() {
      $('.row').children().css('background-color', 'white');
   });

   $("#c").click(function() {
     prompt("Out of service");
   });
});
