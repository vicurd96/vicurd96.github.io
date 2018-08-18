$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    const achievements = $('#achievements');
    const skills = $('#skills');

    let skillsId = setInterval(function() {
      if(!(skills.get(0).M_Carousel.pressed) && !(skills.get(0).M_Carousel.dragged)){
        skills.carousel('next');
      }
    }, 7000);

    let achievementsId = setInterval(function () {
        if (!(achievements.get(0).M_Carousel.pressed) && !(achievements.get(0).M_Carousel.dragged)) {
            achievements.carousel('next');
        }
    }, 5000);

    skills.on('click',function() {
      clearInterval(skillsId);
      setTimeout(function() {
        skillsId = setInterval(function() {
          if(!(skills.get(0).M_Carousel.pressed) && !(skills.get(0).M_Carousel.dragged)){
            skills.carousel('next');
          }
        }, 7000);
      }, 10000);
    });

    achievements.on('click',function() {
      clearInterval(achievementsId);
      setTimeout(function() {
        achievementsId = setInterval(function() {
          if(!(achievements.get(0).M_Carousel.pressed) && !(achievements.get(0).M_Carousel.dragged)){
            achievements.carousel('next');
          }
        }, 5000);
      }, 10000);
    });

    achievements.on('mouseenter', function(){
        clearInterval(achievementsId);
    });

    achievements.on('mouseleave', function(){
        achievementsId = setInterval(function() {
            if(!(achievements.get(0).M_Carousel.pressed) && !(achievements.get(0).M_Carousel.dragged)){
                achievements.carousel('next');
            }
        }, 5000);
    });

    skills.on('mouseenter', () => {
        clearInterval(skillsId);
    });

    skills.on('mouseleave', () => {
        skillsId = setInterval(function() {
            if(!(skills.get(0).M_Carousel.pressed) && !(skills.get(0).M_Carousel.dragged)){
                skills.carousel('next');
            }
        }, 5000);
    });
});
