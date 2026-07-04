// growth js-------


document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.timeline-buttons-wrapper');
  const scrollAxis = document.querySelector('.timeline-scroll-axis');
  const slides = document.querySelectorAll('.storySwiper .swiper-slide');

  if (!wrapper || !scrollAxis || !slides.length) return;

  let swiper;

  // Create year nodes
  slides.forEach((slide, index) => {
    const year = slide.getAttribute('data-year');
    const node = document.createElement('div');
    node.className = `custom-year-node ${index === 0 ? 'node-active' : ''}`;
    node.innerHTML = `<span>${year || ''}</span>`;

    node.addEventListener('click', () => {
      if (!swiper) return;
      swiper.slideTo(index);
    });

    wrapper.appendChild(node);
  });

  const yearNodes = wrapper.querySelectorAll('.custom-year-node');

  // Init Swiper
  swiper = new Swiper('.storySwiper', {
    loop: false,
    speed: 750,
    allowTouchMove: true,
    grabCursor: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    on: {
      slideChange: function () {
        const activeIndex = this.activeIndex;

        yearNodes.forEach((node, idx) => {
          if (idx === activeIndex) {
            node.classList.add('node-active');

            const axisWidth = scrollAxis.offsetWidth;
            const nodeLeft = node.offsetLeft;
            const nodeWidth = node.offsetWidth;

            scrollAxis.scrollTo({
              left: nodeLeft - (axisWidth / 2) + (nodeWidth / 2),
              behavior: 'smooth'
            });
          } else {
            node.classList.remove('node-active');
          }
        });
      }
    }
  });
});


// 
const swiper = document.querySelector(".founder_swiper");

Object.assign(swiper, {
  breakpoints: {

    // Mobile
    0: {
      slidesPerView: 1.3, // 1 full + half next slide
      spaceBetween: 15,
    },

    // Tablet
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    // Laptop
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    // Desktop
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }
});

swiper.initialize();


// 

const partnerSwiper = new Swiper(".partner_swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    grabCursor: false,

    speed: 500, 
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },

    allowTouchMove: false,

    breakpoints: {
        0: {
            spaceBetween: 15
        },
        768: {
            spaceBetween: 20
        },
        1200: {
            spaceBetween: 30
        }
    }
});

