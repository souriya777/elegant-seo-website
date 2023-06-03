"use strict";

import { addEventListener } from '@/js/event';
import drawer from '@/js/drawer';

window.addEventListener('load', () => {
  console.log('[souriya 😎]: document ready');

  addEventListener('menu-open', () => drawer.open());
  addEventListener('menu-close', () => drawer.close());
});
