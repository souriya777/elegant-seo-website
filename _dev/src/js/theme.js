"use strict";

import '@/js/store';
import { initSvelteElements } from '@/js/svelte-elements';
import { bindNativeElementToSvelteElement } from '@/js/events';
import { observeBodyScrolled } from '@/js/souriya-utils';

// <custom-element>
initSvelteElements();

// observers
const H1 = document.querySelector('h1');
observeBodyScrolled(H1, 'body--scrolled', 0.9);

// bind native element event to svelte event
bindNativeElementToSvelteElement('nativeButtonMenu', 'svelteButtonMenu');

console.log('[souriya 😎]: theme.js 🌘🌘🌘🚀🚀🚀💎💎💎');