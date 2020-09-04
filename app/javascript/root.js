$(window).on('load resize',function(){
  adOffset = $('.About-contents').offset().top;
  winH = $(window).height();
});
$(function() {

  var topBtn = $('#jump-top');
  topBtn.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > adOffset - winH ) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  $('#jump-about').on('click',function(){
    var about = $('.About-header__title').offset().top-150;
    $('body,html').animate({scrollTop:about});
    return false;
  });

  $('#jump-howto').on('click',function(){
    var about = $('.How-to__header--title').offset().top-150;
    $('body,html').animate({scrollTop:about});
    return false;
  });

  $('#jump-top').on('click',function(){
    $('body,html').animate({scrollTop:0},100);
    return false;
  });
});