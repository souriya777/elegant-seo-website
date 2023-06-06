"use strict";

import '@/js/store';
import { initSvelteElements } from '@/js/svelte-elements';
import { bindNativeElementToSvelteElement } from '@/js/events';
import { observeElementScrolled } from '@/js/souriya-utils';
import '@/js/slider';

// <custom-element>
initSvelteElements();

// observers
const BODY = document.querySelector('body');
const HEADTOP = document.querySelector('.headtop');
observeElementScrolled(HEADTOP, BODY, 'body--scrolled', 0.9);

// bind native element event to svelte event
bindNativeElementToSvelteElement('nativeButtonMenu', 'svelteButtonMenu');

console.log('[souriya 😎]: theme.js 🌘🌘🌘🚀🚀🚀💎💎💎');