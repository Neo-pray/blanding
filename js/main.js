//뱃지부분영역
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) { 
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // ScrollTo 추가 영역
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0 
    });
  } else {
    //badgeEl.style.display = 'block';
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // ScrollTo 추가영역
    // 버튼숨기기
    gsap.to(toTopEl, .2, {
      x: 100 
    }); 
  }
}, 300));
// ScrollTo 영역
toTopEl.addEventListener('click', function() {
  // 로직 작성 영역
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(window, .7, { 
    scrollTo: 0 
  });
});
//fade-in영역
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, 
    opacity: 1
  });  
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true 
});

//프로모션 이미지 슬라이드 부분
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, 
  spaceBetween: 10, 
  centeredSlides: true, 
  loop: true, 
  autoplay: {
    delay: 5000 //5초간 딜레이
  },
  //좌우버튼영역구조
  pagination: { //pagination이라는 옵션을 추가해주고 객체데이터를 할당해줍니다.
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전 슬라이드 보는 버튼
    nextEl: '.promotion .swiper-next' // 다음 슬라이드 보는 버튼
  }
});
// AWARDS (어워즈) 영역 구문 
new Swiper('.awards .swiper-container', { 
  autoplay: true, //오토플레이를 통해서 트루를 입력 해서 자동재생이 될 수 있도록 만들어 줍니다
  loop: true, //loop를 사용하여 반복재생도 true로 만들어줍니다.
  spaceBetween: 30, //스페이스비트윈을 통해 사이사이의 여백을 30픽셀로 만들어줍니다.
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

// 요소슬라이드 - 슬라이드 토글 영역
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion'); 

let isHidePromotion  = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){ 
    promotionEl.classList.add('hide'); 
  } else {
    promotionEl.classList.remove('hide');
  }
});

// youtube Icon
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) { 
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
    y: 20,
    repeat: -1, 
    yoyo: true, 
    ease: Power1.easeInOut,
    delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// 자바 ScrollMagic(스크롤매직)부분의 라이브러리 영역
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) { 
//키워드 생성자함수.메소드()
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, 
      triggerHook: .8, 
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller()) 
});

