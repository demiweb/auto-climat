import { $DOC } from '../constants';

export default function toggleDropdown() {
  const linkClass = 'js-dropdown-link';
  const links = [].slice.call(document.querySelectorAll(`.${linkClass}`));

  if(!links.length) return;

  links.forEach(link => {
    const dropdown = link.parentNode.querySelector('.nav--dropdown');
    console.log(dropdown);
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        console.log(mutation);
      });
    });
    observer.observe(dropdown, { attributes: true, childList: true, characterData: true, subtree: true, attributeOldValue: true, characterDataOldValue: true });
  });  
  

  $DOC.on('click', `.${linkClass}`, e => {
    e.preventDefault();
    e.currentTarget.setAttribute('data-js-class', linkClass);
    $(e.currentTarget).removeClass(linkClass);
  });
};
