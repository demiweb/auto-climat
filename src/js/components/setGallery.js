// import { $DOC, $WIN, ACTIVE } from '../constants';
// import { debounce } from 'throttle-debounce';

import lightGallery from 'lightgallery';
import 'lg-zoom';
import 'lg-fullscreen';
import 'lg-autoplay';
import 'lg-share';
import 'lg-thumbnail';
import 'lg-video';

import lightSlider from 'lightslider';


export default function setGallery() {
  const $gallery = $('.js-gallery');

  const myGallery = $gallery.lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 3,
    thumbMargin: 30,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: 'left',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          thumbMargin: 15,
        }
      },
      {
        breakpoint: 992,
        settings: {
          thumbMargin: 30,
        }
      },
      {
        breakpoint: 768,
        settings: {
          thumbMargin: 15,
        }
      },
      {
        breakpoint: 576,
        settings: {
          thumbMargin: 5,
        }
      }
    ],
    onSliderLoad: (el) => {
      el.lightGallery({
        selector: '.js-gallery .lslide',
        exThumbImage: 'data-exthumbimage'
      });
    }   
  }); 
};
