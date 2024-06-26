$(document).ready(function(){
  var swiper = new Swiper(".swiper-auto", {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    speed: 800,
    spaceBetween : 0,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var specialswiper = new Swiper(".custom-swiper", {
    slidesPerView: 3,
    loop: false,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var navBtn = document.querySelector('.sh-nav__wrap');
  var navModal = document.querySelector('.nav-modal');
  
  navBtn.addEventListener('click', function() {
      navModal.classList.toggle('active');
  });
});