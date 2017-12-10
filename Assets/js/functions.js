$(function() {

  $("#land-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-page").offset().top},
        'slow');
    });

    $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    console.log($(window).scrollTop())
  if ($(window).scrollTop() > 690) {
    $('#nav_bar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 691) {
    $('#nav_bar').removeClass('navbar-fixed');
  }
});





      $("#first").click(function() {
        $('html,body').animate({
            scrollTop: $("#about-page").offset().top},
            'slow');
        });


        $("#third").click(function() {
          $('html,body').animate({
              scrollTop: $("#our-work").offset().top},
              'slow');
          });

        $("#last").click(function() {
          $('html,body').animate({
              scrollTop: $("#contact").offset().top},
              'slow');
          });




    //$('.showcase').slick({
      //infinite: true,
      //slidesToShow: 3,
      //slidesToScroll: 3,
      //autoplay: true,
      //arrows: false,
      //draggable: false
    //});

    $('.showcase').slick({
  autoplay: true,
  draggable: false,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});
