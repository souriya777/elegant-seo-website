"use strict";

export function addEventListener(selector, callback) {
  const BUTTON = document.querySelector(`${selector}`);

  if (BUTTON == null) {
    console.log(`[souriya 😎]: no element ${selector}`);
    return;
  }

  BUTTON.addEventListener('click', () => { callback(); });
  BUTTON.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      callback();
    }
  });
}

/**
 * Because of architecture, templating languate to svelte <custom-element>,
 * we manually bind "keyboard" events to svelte Component
 */
export function bindNativeElementToSvelteElement(nativeId, svelteId) {
  const SVELTE_BUTTON_MENU = document.querySelector(`#${svelteId}`);

  if (SVELTE_BUTTON_MENU == null) {
    console.log(`[souriya 😎]: no element #${svelteId}`);
    return;
  }

  addEventListener(`#${nativeId}`, () => SVELTE_BUTTON_MENU.click());
}