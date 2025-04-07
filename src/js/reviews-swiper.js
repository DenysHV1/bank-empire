import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reviewsSwiper = () => {
  let reviewsSwiper = null;

  const initReviewsSwiper = () => {
    if (window.innerWidth < 1440) {
      if (!reviewsSwiper) {
        reviewsSwiper = new Swiper(".swiper-reviews", {
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          grabCursor: true,
          spaceBetween: 10,
          speed: 800,
          simulateTouch: true,
          touchRatio: 1,
          mousewheel: {
            sensitivity: 0.5,
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          // pagination: {
          //   el: ".swiper-pagination-gallery",
          //   type: "bullets",
          //   clickable: true,
          // },
        });
      }
    } else {
      if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
        reviewsSwiper = null;
      }
    }
  };

  initReviewsSwiper();
  window.addEventListener("resize", initReviewsSwiper);
};

export default reviewsSwiper;