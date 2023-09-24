// Add interactivity
$(document).ready(function() {
    $(".subscribe-button").click(function(e) {
        e.preventDefault();
        alert("Thank you for subscribing!");
        $(".email-input").val(""); // Clear the input field
    });
});
