$(function() {
  
    const headerHeight = $('header').outerHeight();
    
    $('nav a').on('click', function(e) {
      e.preventDefault();
      let target = $(this).attr('href');
      $('html, body').animate( {
        scrollTop: $(target).offset().top - headerHeight
      }, 1000);
      return false;
    })
    
  })