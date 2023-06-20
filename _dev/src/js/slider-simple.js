"use strict";

import { addEventListenerOnElement } from '@/js/events';
import { throttle } from '@/js/souriya-utils';
import DraggedElement from '@/js/DraggedElement';

(() => {
  const BUTTON_PREV = document.querySelector('.slider-simple__prev');
  const BUTTON_NEXT = document.querySelector('.slider-simple__next');
  const SLIDER = document.querySelector('.slider-simple__display');
  const SLIDER_ITEMS = document.querySelector('.slider-simple__display ul');
  const SLIDER_TOTAL = SLIDER_ITEMS?.children?.length;
  
  if (!BUTTON_PREV || !BUTTON_NEXT || !SLIDER || !SLIDER_ITEMS || !SLIDER_TOTAL) {
    console.log('[souriya 😎]: slider-simple.js - DOM elements missing');
    return;
  }
  
  let currentSlide = 0;
  let sliderWidth = SLIDER_ITEMS.clientWidth;

  function slide() {
    SLIDER_ITEMS.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
  }

  function prev() {
    currentSlide = (currentSlide === 0) ? SLIDER_TOTAL - 1 : currentSlide - 1;
    slide();
  }

  function next() {
    currentSlide = (currentSlide === SLIDER_TOTAL - 1) ? 0 : currentSlide + 1;
    slide();
  }

  function recalculateWidth() {
    setTimeout(() => {
      sliderWidth = SLIDER.clientWidth;
      slide();
    }, 1000);
  }
  
  addEventListenerOnElement(BUTTON_PREV, prev);
  addEventListenerOnElement(BUTTON_NEXT, next);

  window.addEventListener('resize', () => throttle(recalculateWidth));

  new DraggedElement(SLIDER_ITEMS, prev, next);

  // hidden in JS, not CSS, for SEO optimizations
  SLIDER.classList.add('active');

  console.log('[souriya 😎]: slider-simple.js 🌘🌘🌘🚀🚀🚀💎💎💎');
})()