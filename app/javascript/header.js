$(function(){

  var body = $('body');

  $('.nav-switch').on('click',function(){
    body.addClass('nav_open');
  });
  $('.nav-bg, .nav-close').on('click',function() {
    body.removeClass('nav_open');
  });
  
});