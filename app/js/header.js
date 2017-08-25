$(function () {

    $('.userTools__item--burgerMenu').on('click', function () {
      $('.navigation--inline').fadeIn(200);
      $(this).hide();
      $('.userTools__item--clearMenu').show();
    });

    $('.userTools__item--clearMenu').on('click', function () {
      $('.navigation--inline').fadeOut(200);
      $(this).hide();
      $('.userTools__item--burgerMenu').show();
    });

    $('.userTools__item--search').on('click', function(e) {
      $('.searhTop').fadeIn(200);
      e.preventDefault();
    });

    $('.searhTop__clear').on('click', function() {
      $('.searhTop').fadeOut(200);
    });

  $(window).resize(function(e){
    if($(window).width() >= 891){
      console.log('больше');
      $('.navigation--inline').css('display', 'flex');
    }else {
      $('.navigation--inline').css('display', 'none');
    }
  });

});