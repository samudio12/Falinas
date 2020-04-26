import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import { tns } from 'tiny-slider/src/tiny-slider.js';

import 'tiny-slider/dist/tiny-slider.css';
import '../scss/index.scss';

$('#main-menu > button').click(() => {
  if (
    document.querySelector(
      '#main-menu [aria-expanded="true"].navbar-toggler'
    ) == null
  ) {
    console.log('open');
    $('#main-menu').addClass('collapsed');
  } else {
    console.log('close');
    $('#main-menu').removeClass('collapsed');
  }
});

let carouselBaseConfig = {
  slideBy: 'page',
  autoplay: false,
  gutter: 48,
  mouseDrag: true,
  responsive: {
    640: {
      //edgePadding: 20,
      //gutter: 20,
      items: 2,
    },
    700: {
      //gutter: 30
      items: 4,
    },
    900: {
      items: 6,
    },
  },
};

tns({ ...carouselBaseConfig, container: '.hot-carousel' });
tns({ ...carouselBaseConfig, container: '.recommendations-carousel' });
tns({ ...carouselBaseConfig, container: '.top-carousel' });
