import lightSlider from 'lightslider';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if(!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.dataset.slider;
    const options = {
      hero: {
        item: 1,
        slideMargin: 0
      }
    };

    $(slider).lightSlider(options[name]);
  });  
};
