$(document).ready(function() {

  var $root = $('html, body');
  $('a[href^="#"]').click(function (e) {
    // Collapse nav bar on click when toggler present
    $('.navbar-collapse').collapse('hide');
    //smooth scroll on click
    e.preventDefault()
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
  });
});

  /* NAV BAR - Add active class on Scroll Event */
  $(window).scroll(function() { // window's scroll event

  var scrollDistance = $(window).scrollTop() +200;
  //Active class to nav links while scolling
    $('.container-fluid').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
          $('.navbar-nav a.nav-link.active').removeClass('active');
          $('.navbar-nav a').eq(i).addClass('active');
        }
        // Active class to contact section once reached the bottom of page 
        if($(window).scrollTop() + $(window).height() > $(document).height() -200) {
          $('nav a.active').removeClass('active');
          $('#nav-contact').addClass('active');
        }
    });
  });
/***************** Toggle Fade projects by scroll ***************** */
  function fade() {
      $('.project-container').each(function() {
      /* Check the location of each desired element */
      var obj = $(this).offset().top + $(this).outerHeight();
      var wind = $(window).scrollTop() + $(window).innerHeight();
      /* If the object fully visible in the window, fade it in */
        if (obj < wind) {
          if ($(this).css('opacity') == 0) {
             $(this).fadeTo(500, 1); 
          }
        } else {
          if ($(this).css('opacity') == 1) {    
            $(this).fadeTo(500, 0);}
        }
      });
    };
  //Fade in elements during scroll
  $(window).scroll(function() {fade();}); 