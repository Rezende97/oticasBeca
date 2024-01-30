(function ($) {
  "use strict";


  // var client_logo = client_logo_slider

  var client_logo = $('.client_logo_slider')
  if (client_logo.length) {
    client_logo.owlCarousel({
      items: 6,
      loop: true,
      responsive: {
        0: {
          items: 3,
          margin: 15,
        },
        600: {
          items: 3,
          margin: 15,
        },
        991: {
          items: 5,
          margin: 15,
        },
        1200: {
          items: 6,
          margin: 15,
        }
      }
    });
  }

  $(document).ready(function () {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
  
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
      $('.img-logo').attr('src', 'img/otica.png');
      $('.img-logo').css({'width': '150px'});
      $('.img-icone').css({'background-color': '#fff', 'border-radius': '60%', 'padding': '3px', 'width': '25px'});
      $('.img-icone-search').css({'background-color': '#fff', 'border-radius': '80%', 'padding': '3px', 'width': '25px'});
    } else {
  
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
      $('.img-logo').attr('src', 'img/logo-otica-b.png');
      $('.img-logo').css({'width': '70px'})
      $('.img-icone').css({'background-color': '#fff', 'border-radius': '0%', 'padding': '0px', 'width': '18px'});
      $('.img-icone-search').css({'background-color': '#fff', 'border-radius': '0%','padding': '0px', 'width': '18px'});
    }
  
  });

  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  var filter_item = $('.filtr-container');
  if (filter_item.length) {
    var filterizd = filter_item.filterizr({
      layout: 'packed',
  
    });
  }





  $('.portfolio-filter ul li').on('click', function () {
    $('.portfolio-filter ul li').removeClass('active');
    $(this).addClass('active');
  });


  var review = $('.review_slider');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: false,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
    });
  }

}(jQuery));