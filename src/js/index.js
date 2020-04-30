import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import { tns } from 'tiny-slider/src/tiny-slider.js';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';
import 'select2/dist/js/select2.min.js';

import 'tiny-slider/dist/tiny-slider.css';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'select2/dist/css/select2.min.css';
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

$(document).ready(function() {
  const $valueSpan = $('.valueSpan2');
  const $value = $('#customRange11');
  $valueSpan.html($value.val());
  $value.on('input change', () => {
    $valueSpan.html($value.val());
  });

  $('#price_range').ionRangeSlider({
    type: 'double',
    skin: 'round',
    grid: true,
    min: 0,
    max: 400,
    from: 0,
    to: 400,
    prefix: '€',
  });

  $('#brand_filter').select2({
    closeOnSelect: false,
    placeholder: 'Select a brand',
    tags: false,
  });
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
