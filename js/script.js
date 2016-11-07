jQuery(function($){
  
  'use strict';
  
  var $window = $(window);
  var isMobile = false;
  
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
  }
  
  /*
   |----------------------------------------------------------------------------
   | Autoclose navbar collapse
   |----------------------------------------------------------------------------
   */
  
  $('#header-navbar-collapse a').on('click', function () {
    $('#header-navbar-collapse').collapse('hide');
  });
  
  /*
   |----------------------------------------------------------------------------
   | Animated scrolling / Scroll Up
   |----------------------------------------------------------------------------
   */
  
  $('a[href^="#"]').on('click', function(event){
    
    var anchor = $(this);
    
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top -79
    }, 1000);
    
    anchor.blur();
    
    event.preventDefault();
    
  });
  
  /*
   |----------------------------------------------------------------------------
   | Parallax / Owl carousel
   |----------------------------------------------------------------------------
   */
  
  /*
  function parallax () {
    if (!isMobile) {
      $('#parallax').parallax('50%', 0.3);
    }
  }
  
  $window.on('load', function () {
    parallax();
  });
  
  parallax();
  
  $('.parallax-quotes').owlCarousel({
    paginationSpeed: 2000,
    singleItem:true,
    lazyLoad : true,
    pagination:false,
    navigation : false,
    autoPlay: true,
  });
  */
  
  /*
   |----------------------------------------------------------------------------
   | Back to top
   |----------------------------------------------------------------------------
   */
  
  $window.on('scroll', function() {
    
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
    
  });
  
});
