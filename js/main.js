$(document).ready(function() {
  // remove no-js
  $('.no-js').removeClass('no-js');

  $('#mainNavOpenBtn').on('click', function(e) {
    e.preventDefault();
    $('#mainNav').removeClass('main-nav-closed');
    $('.modal-overlay').css('display', 'block');
  });
  $('#mainNavClosenBtn').on('click', function(e) {
    e.preventDefault();
    $('#mainNav').addClass('main-nav-closed');
    $('.modal-overlay').css('display', 'none');
  });

  $('.modal-overlay').on('click', function() {
    if (!$('#mainNav').hasClass('main-nav-closed')) {
      $('#mainNav').addClass('main-nav-closed');
    }
    $('.modal-overlay').css('display', 'none');
  });

  $(document).ready(function(){
    $('.brands-slider').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 10,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 1,
            arrows: true,
            variableWidth: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: false
          }
        }
      ]
    });
  });
});
