import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import { tns } from 'tiny-slider/src/tiny-slider.js';
import noUiSlider from 'nouislider';

import 'tiny-slider/dist/tiny-slider.css';
import '../scss/index.scss';
import 'nouislider/distribute/nouislider.css';

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

$(document).ready(function() {

  const $valueSpan = $('.valueSpan2');
  const $value = $('#customRange11');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});


$(document).ready(function() {
  $('.mdb-select').materialSelect();
  });


  

let carouselBaseConfig = {
  slideBy: '1',
  controls: false,
  autoplayButtonOutput: false,
  nav: false,
  autoplay: true,
  gutter: 48,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
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
