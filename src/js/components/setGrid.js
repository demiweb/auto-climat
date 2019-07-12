import Masonry from 'masonry-layout';

export default function setGrid() {
  const $grids = $('.js-grid');

  if(!$grids.length) return;

  $grids.each((i, grid) => {
    const msnry = new Masonry( grid, {
      itemSelector: '.js-grid-item'
    });
  });
};
