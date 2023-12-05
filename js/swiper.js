"use strict";

/* 학습하고 체험하는 청양 어린이백제체험관
intro slide swiper */
let swiper1 = new Swiper(".introSlideSwiper", {
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* 관람 예약 : 예약 현황
status statusSlide swiper */
let swiper2 = new Swiper(".statusSlide", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  on: {
    resize: function () {
      swiper2.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 769 ? "vertical" : "horizontal";

  return direction;
}

/* 백제문화마을
village slide */
var swiper3 = new Swiper(".slide", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  loopedSlides: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* active된 슬라이드와 같은 인덱스의 location 이미지 변경 */
swiper3.on("slideChange", function () {
  let activeIndex = swiper3.activeIndex;
  $(".locationWrap .location").removeClass("on");
  $(".locationWrap .location").eq(activeIndex).addClass("on");
});
// 지도 클릭 시 스와이퍼 슬라이드 active
$(".locationWrap .location").click(function () {
  var index = $(this).index();
  $(".locationWrap .location").removeClass("on");
  $(this).addClass("on");
  swiper3.slideTo(index);
});
