"use strict";

import { observeElementScrolled, throttle } from '@/js/souriya-utils';
import { addEventListenerOnElement } from '@/js/events';

(() => {
  window.addEventListener('load', () => {
    //////// HTML ELEMENTS
    const BUTTON_PREV = document.querySelector('.slider__track__prev');
    const BUTTON_NEXT = document.querySelector('.slider__track__next');
    const SLIDER_DISPLAY = document.querySelector('.slider__display');
    const SLIDER_DISPLAY_ITEMS = document.querySelector('.slider__display ul');
    const SLIDER_TRACK_ITEMS = document.querySelector('.slider__track ul');
    const SLIDER_TRACK_FIRST = document.querySelector('.slider__track ul li:first-child');
    const SLIDER_TRACK_LAST = document.querySelector('.slider__track ul li:last-child');
    const SLIDER_TRACK_INDEX = document.querySelectorAll('.slider__track--index');
    const FIRST_IMAGE = document.querySelector('.slider__display ul li:first-child img');

    //////// CONSTANTS & VARIABLES
    const SLIDER_TRACK_OFFSET = 180;
    const THRESHOLD_BUTTON = 0.5;
    let currentSlide = 1;
    let cursorIsDown = false;
    let startX;
    let scrollLeft;

    //////// FUNCTIONS
    function scrollTrackTo(left) {
      SLIDER_TRACK_ITEMS.scrollTo({
        left,
        behavior: 'smooth'
      });
    }

    function dragStart(e) {
      cursorIsDown = true;
      startX = e.pageX || e.touches[0].pageX - SLIDER_DISPLAY.offsetLeft;
      scrollLeft = SLIDER_DISPLAY.scrollLeft;
    }

    function dragEnd() {
      cursorIsDown = false;
    }

    function dragMove(e) {
      if (!cursorIsDown) return;

      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX - SLIDER_DISPLAY.offsetLeft;

      const moveTo = () => {
        const dist = (x - startX);

        if (dist > 0) {
          prevSlide(currentSlide - 1);
        } else {
          nextSlide(currentSlide + 1);
        }
      }

      throttle(moveTo);
    }

    function resizeImg() {
      SLIDER_DISPLAY.style.height = `${FIRST_IMAGE.clientHeight}px`;
    }

    function switchSelectedTrack(index) {
      document.querySelector('.slider__track--index.selected').classList.remove('selected');
      SLIDER_TRACK_INDEX?.[index - 1].classList.add('selected');
    }

    function nextSlide(targetSlide) {
      if (targetSlide > SLIDER_DISPLAY_ITEMS.children.length) {
        prevSlide(SLIDER_DISPLAY_ITEMS, 1);
        return;
      }

      for (let i = currentSlide; i <= targetSlide; i++) {
        const child = SLIDER_DISPLAY_ITEMS.children[i - 1];
        const offset = (i < targetSlide) ? `-50%` : `0`;
        child.style.transform = `translateX(${offset})`;
      }

      switchSelectedTrack(targetSlide);
      currentSlide = targetSlide;
    }

    function prevSlide(targetSlide) {
      if (targetSlide === 0) {
        return;
      }

      for (let i = SLIDER_DISPLAY_ITEMS.children.length; i >= 1; i--) {
        const child = SLIDER_DISPLAY_ITEMS.children[i - 1];
        const offset = (i > targetSlide) ? `100%` : `0`;
        child.style.transform = `translateX(${offset})`;
      }

      switchSelectedTrack(targetSlide);
      currentSlide = targetSlide;
    }

    //////// EVENTS
    if (FIRST_IMAGE) {
      resizeImg();
      window.addEventListener('resize', resizeImg);
    }

    addEventListenerOnElement(BUTTON_PREV, () => {
      scrollTrackTo(`-${SLIDER_TRACK_OFFSET}`);
    });
    addEventListenerOnElement(BUTTON_NEXT, () => {
      scrollTrackTo(SLIDER_TRACK_OFFSET);
    });

    SLIDER_TRACK_INDEX.forEach((btn) => {
      addEventListenerOnElement(btn, () => {
        const index = parseInt(btn.dataset.index);

        if (currentSlide < index) {
          nextSlide(index)
        } else {
          prevSlide(index);
        }
        switchSelectedTrack(index);
      });
    });

    SLIDER_DISPLAY.addEventListener('mousedown', dragStart);
    SLIDER_DISPLAY.addEventListener('touchstart', dragStart);
    SLIDER_DISPLAY.addEventListener('mousemove', dragMove);
    SLIDER_DISPLAY.addEventListener('touchmove', dragMove);
    SLIDER_DISPLAY.addEventListener('mouseup', dragEnd);
    SLIDER_DISPLAY.addEventListener('touchend', dragEnd);

    //////// OBSERVERS
    observeElementScrolled(SLIDER_TRACK_FIRST, BUTTON_PREV, 'visible', THRESHOLD_BUTTON);
    observeElementScrolled(SLIDER_TRACK_LAST, BUTTON_NEXT, 'visible', THRESHOLD_BUTTON);

    console.log('[souriya 😎]: slider.js 🌘🌘🌘🚀🚀🚀💎💎💎');
  });
})()