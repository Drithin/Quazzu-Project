$(document).ready(function(){
    $('ul.right li').on('click', function(){
        var clicked = $(this);
        $('ul.right li').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
    });
  });
  
  $(document).ready(function(){
    $('ul.sidenav li').on('click', function(){
        var clicked = $(this);
        $('ul.sidenav li').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
    });
  });

  $(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.button-collapse').sideNav();
  });
      
