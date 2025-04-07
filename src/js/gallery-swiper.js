import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperGallery = () => {
  new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 800,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });

};

export default swiperGallery;