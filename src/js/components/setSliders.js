import lightSlider from 'lightslider';
import setLazy from './setLazy';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if(!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.dataset.slider;
    const $wrap = $(slider).closest('.slider__wrap');
    const $next = $wrap.find('.js-next');
    const $prev = $wrap.find('.js-prev');

    const options = {
      hero: {
        item: 1,
        slideMargin: 0,
        loop: true,
        onSliderLoad: setLazy
      },
      specialists: {
        item: 4,
        slideMargin: 30,
        pager: false,
        controls: false,
        loop: true,
        responsive : [
          {
            breakpoint: 1200,
            settings: {
              item: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              item: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              // item: 1
              item: 2,
              slideMargin: 10,
            }
          },
          {
            breakpoint: 480,
            settings: {
              // item: 1
              item: 1,
              slideMargin: 0,
            }
          }
        ],
        onSliderLoad: setLazy
      }
    };

    const mySlider = $(slider).lightSlider(options[name]);

    $next.on('click', mySlider.goToNextSlide);
    $prev.on('click', mySlider.goToPrevSlide);
  });  
};
