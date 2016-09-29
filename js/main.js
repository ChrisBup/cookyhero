$(function() {
  $.getJSON('/js/data.json', function(data) {

  // Retrieve the template data from the HTML (jQuery is used here).
  var template = $('#dish-template').html();

  // Compile the template data into a function
  var templateScript = Handlebars.compile(template);

  // pass in data
  var html = templateScript(data);

  // Insert the HTML code into the page
  $('.sub-container').html(html);

  $('.checkbox').click(function() {
    $( this ).toggleClass( "checked" );
  });

  }); //getJSON

}); //function

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if ( $(e).is( ":hidden" ) ) {
    $(e).slideDown( "fast" );
  } else {
    $(e).slideUp( "fast" );
  }
  event.preventDefault();
}

function change_icon(id)  {
  var e = document.getElementById(id);
  var src = $(e).attr('src');
  if ( src == "img/list-icon.svg" ) {
    $(e).attr('src',"img/x-icon.svg");
  } else {
    $(e).attr('src',"img/list-icon.svg");
  }
  event.preventDefault();
}
