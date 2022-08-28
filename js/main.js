const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

/* const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: false
}); */

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "../node_modules/swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 5,

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
