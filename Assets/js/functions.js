$(document).ready(function() {

  $(".landing-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-page").offset().top},
        'slow');
    });

});
