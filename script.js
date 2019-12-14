
// ドロワー
$('.header__main-menu-trigger').on('click',function(){
  if($('body').hasClass('open')){
    $('body').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $('body').addClass('open');
    $('.overlay').addClass('open');
  }
});

$('.header__main--nav-about-title-p').on('click',function(){
  if($('body').hasClass('open')){
    $('body').removeClass('open');
    $('.overlay').removeClass('open');
  }
});
$('.overlay').on('click',function(){
  if($('body').hasClass('open')){
    $('body').removeClass('open');
    $('.overlay').removeClass('open');
  }
});
$('.header__main--nav-about-close').on('click',function(){
  if($('body').hasClass('open')){
    $('body').removeClass('open');
    $('.overlay').removeClass('open');
  }
});

// ドロワー


// モーダル
$(function(){
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  }); 
});
// スライダー
var swiper = new Swiper('.swiper1 .swiper-container', {
  
  loop: true,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
});

var swiper = new Swiper('.swiper2 .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  spaceBetween: 40,
  initialSlide: 1,
  loop: true,
  autoplay: {
  delay: 3000,
  disableOnInteraction: true,
  }
});

$(function(){
  $('.article__tab--title-li').click(function(){
      var index = $('.article__tab--title-li').index(this);
      $('.article__tab--title-li').removeClass('active');
      $(this).addClass('active');
      $('.article__tab--about-text').removeClass('show').eq(index).addClass('show');
  });
});