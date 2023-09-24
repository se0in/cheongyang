$(document).ready(function () {

  /* 메뉴 스크롤 시 배경 추가 */
  $(window).on('scroll', function () {
    let scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    }
  });


  // 메뉴 웹
  $('header.WebHeader nav').hover(function() {
    $('header').toggleClass('on');
    $('header.WebHeader nav > ul > li > ul').toggleClass('toggleClass');
    $('.menuBg').toggleClass('toggleClass');
  });


  // 메뉴 모바일 햄버거
  $('header.MbHeader .mbMenu .hamburger').click(function () {
    $('header.MbHeader .mbMenu .navShadow').show();
  });
  $('.mbMenu .close').click(function () {
    $('header.MbHeader .mbMenu .navShadow').hide();
  });
  /* 모바일 메뉴 클릭 토글 */
  $('.mbMenu nav > ul > li').click(function () {
    console.log('sss');
    $(this).children('ul').stop().slideDown();
    $(this).siblings().children('ul').stop().slideUp();
    $('.mbMenu nav > ul > li').children('a').removeClass('on')
    $(this).children('a').addClass('on');
  });


  /* 소식을 알립니다. : 탭메뉴 */
  $('.notice .noticeNav ul li').click(function () {
    $('.notice .noticeNav ul li').removeClass('on');
    $(this).addClass('on');
    $('.notice .listWrap').removeClass('on');
    let index = $(this).index();
    $('.notice .listWrap').eq(index).addClass('on'); 0
  });

});