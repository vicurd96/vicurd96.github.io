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
    $("#page2").hide();
    $("#next").click(function(){
        $("#page1").hide(500);
        $("#page2").show(1500);
        $("#back").attr("class", "waves-effect");
        $("#next").attr("class", "disabled");
    });
    $("#back").click(function(){
        $("#page2").hide(500);
        $("#page1").show(1500);
        $("#back").attr("class", "disabled");
        $("#next").attr("class", "waves-effect");
    });
});
