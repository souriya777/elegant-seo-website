import { scroll, noScroll } from './souriya-utils'

const panel = {
  open,
  close
};

(function () {
  window.addEventListener('load', () => {
    console.log('[souriya 😎]: panel.js');

    const PANEL = document.querySelector('.panel');

    panel.open = () => {
      PANEL.dataset.shown = "true";
      noScroll();
    };
    panel.close = () => {
      PANEL.dataset.shown = "false";
      scroll();
    };
  });
})();

export default panel;