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

  $("img.lazy").unveil(200, function() {
    $(this).load(function() {
      this.style.opacity = 1;
    });
  });

  $('.checkbox').click(function() {
    $( this ).toggleClass( "checked" );
  });

  }); //getJSON

}); //function

function toggle_visibility(e, id) {
  e = e || window.event; // Cross browser support
  var elem = document.getElementById(id);
  if ( $(elem).is( ":hidden" ) ) {
    $(elem).slideDown( "fast" );
  } else {
    $(elem).slideUp( "fast" );
  }
  e.preventDefault();
}

function change_icon(e, id)  {
  e = e || window.event; // Cross browser support
  var elem = document.getElementById(id);
  var src = $(elem).attr('src');
  if ( src == "img/list-icon.svg" ) {
    $(elem).attr('src',"img/x-icon.svg");
  } else {
    $(elem).attr('src',"img/list-icon.svg");
  }
  e.preventDefault();
}

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$('.form-jump').on('click', function(){
  $(".success-wrapper").slideUp();
  $('#recipe-custom-container').toggleClass('go-right-in');
  $('#recipe-link-container').toggleClass('go-right-out');
  $(this).toggleClass("form-jump-currently-custom");
  $(this).toggleClass("form-jump-currently-link");
  if ($(this).hasClass("form-jump-currently-custom")) {
    $(this).fadeOut(function() {
      $(this).text("← Or Submit a Link")
    }).fadeIn();
  } else if ($(this).hasClass("form-jump-currently-link")) {
    $(this).fadeOut(function() {
      $(this).text("Or Submit Your Own Recipe →")
    }).fadeIn();
  } else {
    console.log("uh-oh")
  }
})
