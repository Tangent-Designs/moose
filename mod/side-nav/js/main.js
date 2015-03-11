$(document).on("scroll", onScroll);
    
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#cd-vertical-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 350 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#cd-vertical-nav ').removeClass("is-selected");
            $(currLink).addClass("is-selected");
        }
        else{
            $(currLink).removeClass("is-selected");
        }
    });
}

