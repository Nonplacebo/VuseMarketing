$(function() {

  $("#land-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-page").offset().top},
        'slow');
    });

    $(document).ready(function(){
    $('.your-class').slick({
      autoplay: true
    });
  });

});
