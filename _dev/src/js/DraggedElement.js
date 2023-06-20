"use strict";

import { throttle, debounce } from '@/js/souriya-utils';

/**
 * Add Drag possibilities (prev/next) on an HTML ELEMENTS
 */
class DraggedElement {
  htmlElement;
  callbackPrev;
  callbackNext;
  startX;
  cursorIsDown = false;
  scrollLeft;

  constructor(htmlElement, callbackPrev, callbackNext) {
    this.htmlElement = htmlElement;
    this.callbackPrev = callbackPrev;
    this.callbackNext = callbackNext;

    this.htmlElement.addEventListener('mousedown', this.dragStart.bind(this));
    this.htmlElement.addEventListener('touchstart', this.dragStart.bind(this));
    this.htmlElement.addEventListener('mousemove', this.dragMove.bind(this));
    this.htmlElement.addEventListener('touchmove', this.dragMove.bind(this));
    this.htmlElement.addEventListener('mouseup', this.dragEnd.bind(this));
    this.htmlElement.addEventListener('touchend', this.dragEnd.bind(this));
    console.log('[souriya 😎]: DraggedElement.js 🌘🌘🌘🚀🚀🚀💎💎💎');
  }

  dragStart(e) {
    this.cursorIsDown = true;
    this.startX = e.pageX || e.touches[0].pageX - this.htmlElement.offsetLeft;
    this.scrollLeft = this.htmlElement.scrollLeft;
  }
  
  dragEnd() {
    this.cursorIsDown = false;
  }

  dragMove(e) {
    if (!this.cursorIsDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - this.htmlElement.offsetLeft;

    const moveTo = () => {
      const dist = (x - this.startX);

      if (dist > 0) {
        this.callbackPrev();
      } else {
        this.callbackNext();
      }
    }

    throttle(moveTo);
  }
}

export default DraggedElement;