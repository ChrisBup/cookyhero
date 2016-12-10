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
