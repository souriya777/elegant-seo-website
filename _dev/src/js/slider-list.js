"use strict";

// import { addEventListenerOnElement } from '@/js/events';
// import { throttle } from '@/js/souriya-utils';
// import DraggedElement from '@/js/DraggedElement';

(() => {
  const MIN_WIDTH_TIP = 120;
  const SLIDER_ITEMS = document.querySelector('.slider-list__display ul');
  const SLIDER_WIDTH = SLIDER_ITEMS?.offsetWidth;

  if (!SLIDER_ITEMS || !SLIDER_WIDTH) {
    console.log('[souriya 😎]: slider-list.js - DOM elements missing');
    return;
  }

  // RESPONSIVE
  const item_width = SLIDER_ITEMS.children?.[0]?.offsetWidth;
  const isTipTooShort = SLIDER_WIDTH % item_width < MIN_WIDTH_TIP;
  console.log('SLIDER_WIDTH', SLIDER_WIDTH, item_width, SLIDER_WIDTH % item_width, isTipTooShort);

  if (isTipTooShort) {
    const newSize = item_width - (MIN_WIDTH_TIP - (SLIDER_WIDTH % item_width));
    console.log('newSize', newSize);
    // resize all image
    [...SLIDER_ITEMS.children].forEach(item => {
      // console.log(item)
      item.style.width = `${newSize}px`;
    })
  }

  console.log('[souriya 😎]: slider-list.js 🌘🌘🌘🚀🚀🚀💎💎💎');
})()