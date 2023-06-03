"use strict";

const NAME_REGEX = /^[a-zA-Z\u00C0-\u00D6\u00D9-\u00F6\u00F9-\u00FF ,.'-]+$/;

const BIRTHDAY_REGEX = /^(?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12]\d|3[01])$/

const HTML_ELEMENT = document.getElementsByTagName("html")[0];

let debounceTimer;
let throttlePause;

function debounce(callback, time = 300) {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
}

function throttle(callback, time = 300) {
  if (throttlePause) return;

  throttlePause = true;
  callback();

  setTimeout(() => {
    throttlePause = false;
  }, time);
}

function noScroll(classname = "no--scroll") {
  HTML_ELEMENT.classList.add(classname);
}

function scroll(classname = "no--scroll") {
  HTML_ELEMENT.classList.remove(classname);
}

function observeBodyScrolled(element, theClass, threshold) {
  const BODY = document.querySelector('body');
  const OBSERVER = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true) {
      BODY.classList.remove(theClass);
    } else {
      BODY.classList.add(theClass);
    }
  }, { threshold: [threshold] });

  OBSERVER.observe(element);
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export { NAME_REGEX, BIRTHDAY_REGEX, debounce, throttle, scroll, noScroll, decodeHtml, observeBodyScrolled };
