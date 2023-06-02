import { addEventListener } from '@/js/event';
import panel from './panel';

window.addEventListener('load', () => {
  console.log('[souriya 😎]: document ready');

  addEventListener('menu-open', () => panel.open());
  addEventListener('menu-close', () => panel.close());
});
