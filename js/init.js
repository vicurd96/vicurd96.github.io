function carouselInterval (instance,time){
  return setInterval(function(){
    if(!instance.pressed && !skills.dragged)
      instance.next();
  },time);
}

function resetInterval (interval,instance,time,wait = 10000){
  clearInterval(interval);
  setTimeout(function(){
    interval = carouselInterval(instance,time);
  },wait);
};

document.addEventListener("DOMContentLoaded", function() {
  const 
    /* INICIALIZACIONES */
    carousel          = document.querySelectorAll('.carousel'),
    sidenav           = document.querySelectorAll('.sidenav'),
    tooltip           = document.querySelectorAll('.tooltipped'),
    button            = document.querySelectorAll('.fixed-action-btn'),
    /* INSTANCIAS */
    sidenavInstances  = M.Sidenav.init(sidenav),
    tooltipInstances  = M.Tooltip.init(tooltip),
    buttonInstances   = M.FloatingActionButton.init(button),
    carouselInstances = M.Carousel.init(carousel, { fullWidth: true, indicators: true }),
    /* CONSTANTES */
    skills            = carouselInstances[0],
    achievements      = carouselInstances[1],
    portfolio         = carouselInstances[2];

  const
    achievementsId    = document.getElementById('achievements'),
    skillsId          = document.getElementById('skills'),
    portfolioId       = document.getElementById('portfolio');
  
  var skillsIn = carouselInterval(skills,7000);
  var achievementsIn = carouselInterval(achievements,5000);
  var portfolioIn = carouselInterval(portfolio,7000);

  document.addEventListener('click', function(event){
    if(event.target.matches('#achievements')){
      resetInterval(achievementsIn,achievements,5000);
    } else if(event.target.matches('#skills')){
      resetInterval(skillsIn,skills,7000);
    } else if(event.target.matches('#portfolio')){
      resetInterval(portfolioIn,skills,7000);
    } else {
      return;
    }

  }, false);

  achievementsId.addEventListener('mouseenter', function(event){
      clearInterval(achievementsIn);
  }, false);

  skillsId.addEventListener('mouseenter', function(event){
    clearInterval(skillsIn);
  }, false);

  portfolioId.addEventListener('mouseenter', function(event){
    clearInterval(portfolioIn);
  }, false);

  achievementsId.addEventListener('mouseleave', function(event){
    achievementsIn = carouselInterval(achievements,5000);
  }, false);

  skillsId.addEventListener('mouseleave', function(event){
    skillsIn = carouselInterval(skills,7000);
  }, false);

  portfolioId.addEventListener('mouseleave', function(event){
    portfolioIn = carouselInterval(portfolio,7000);
  }, false);
});
