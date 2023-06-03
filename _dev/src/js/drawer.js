"use strict";

import { scroll, noScroll } from '@/js/souriya-utils';

const drawer = {
  open,
  close
};

(function () {
  window.addEventListener('load', () => {
    console.log('[souriya 😎]: drawer.js');

    const DRAWER = document.querySelector('.drawer');

    drawer.open = () => {
      DRAWER.dataset.shown = "true";
      noScroll();
    };
    drawer.close = () => {
      DRAWER.dataset.shown = "false";
      scroll();
    };
  });
})();

export default drawer;