jQuery(function(e)
{
    e(".sidebar").scrollToFixed({})
});
$(document).ready(function(){
    $('.scroll-container a').click( function(e){
      e.preventDefault();
            $('html, body').animate({ scrollTop:
$('.form').offset().top -10 }, 500);
    });
});
