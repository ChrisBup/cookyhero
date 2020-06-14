$(function() {
  // getJSON
  $.getJSON('/js/data.json', function(data) {

    // retrieve the template data from the HTML with jQuery
    var template = $('#dish-template').html();

    // compile the template data into a function
    var templateScript = Handlebars.compile(template);

    // pass in data
    var html = templateScript(data);

    // insert the HTML code into the page
    $('.sub-container').html(html);

    $("img.lazy").unveil(200, function() {
      $(this).load(function() {
        this.style.opacity = 1;
      });
    });

    // if image link is broken, display alt text
    $('img.dish-pic').on("error", function() {
      let dishName = $(this).attr("alt");
      $(this).siblings(".no-img").show().find(".no-img-dish-name").text(dishName);
      $(this).hide();
    });

    // check ingredient list item
    $('.checkbox').click(function() {
      $( this ).toggleClass( "checked" );
    });

  });

});

// open ingredient list

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

// change ingredient list icon

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

// header logo scrolls to top

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// recipe submission form

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
