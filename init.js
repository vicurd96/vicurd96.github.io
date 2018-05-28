$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton({
      hoverEnable:false
    });
    $(function() {
      $(window).scroll(function() {
          if($(this).scrollTop() != 0) {
              $('#backto').fadeIn();
          } else {
              $('#backto').fadeOut();
          }
      });

      $("#backto").click(function(event){
        event.preventDefault();
        $("body").animate({"scrollTop": "0px"}, 1000);
      });
    });
});
