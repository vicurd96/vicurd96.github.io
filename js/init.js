$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    var skillsId = setInterval(function() {
      if(!($("#skills").get(0).M_Carousel.pressed) && !($("#skills").get(0).M_Carousel.dragged)){
        $('#skills').carousel('next');
      }
    }, 7000);

    $("#skills").on('click',function() {
      clearInterval(skillsId);
      setTimeout(function() {
        setInterval(function() {
          if(!($("#skills").get(0).M_Carousel.pressed) && !($("#skills").get(0).M_Carousel.dragged)){
            $('#skills').carousel('next');
          }
        }, 7000);
      }, 10000);
    });

    var achievementsId = setInterval(function() {
      if(!($("#achievements").get(0).M_Carousel.pressed) && !($("#achievements").get(0).M_Carousel.dragged)){
        $('#achievements').carousel('next');
      }
    }, 5000);

    $("#achievements").on('click',function() {
      clearInterval(achievementsId);
      setTimeout(function() {
        setInterval(function() {
          if(!($("#achievements").get(0).M_Carousel.pressed) && !($("#achievements").get(0).M_Carousel.dragged)){
            $('#achievements').carousel('next');
          }
        }, 5000);
      }, 10000);
    });

    $('.fixed-action-btn').floatingActionButton({
      hoverEnable:false
    });
});
