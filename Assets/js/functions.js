$(function() {

  $("#land-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-page").offset().top},
        'slow');
    });


    $('.showcase').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true
    });

});
