// Variable to hold request
var request;

// Bind to the submit event of our form
$("#recipe-link-form").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwwXSdqvAiz9Slx0BN6rbTSzZ2uJR80A9lEF1mQBq0lfwT-CKM/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        document.getElementById("recipe-link-form").reset()
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".success-wrapper").hide().html("<h2 class='success'>Thanks for submitting!<br><br><img class='success-pic' src='http://a.fod4.com/misc/Slide%20Like%20a%20Boss.gif' alt='slip n slide' /></h2>").slideDown("slow");
        // Log a message to the console
        console.log("Hooray, recipe link submitted!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "Uh-oh, the following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});

// Bind to the submit event of our form
$("#recipe-custom-form").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzQXEWwCu8J0HUtWrDB0rNV6ZvR5WTFYA6FjsvVPfIhOBHvFLrH/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        document.getElementById("recipe-custom-form").reset()
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".success-wrapper").hide().html("<h2 class='success'>Thanks for submitting!<br><br><img class='success-pic' src='http://a.fod4.com/misc/Slide%20Like%20a%20Boss.gif' alt='slip n slide' /></h2>").slideDown("slow");
        // Log a message to the console
        console.log("Hooray, custom recipe submitted!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "Uh-oh, the following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});
