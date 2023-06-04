"use strict";

import '@/js/store';
import { initSvelteElements } from '@/js/svelte-elements';
import { bindNativeElementToSvelteElement } from '../js/events';

// <custom-element>
initSvelteElements();

// bind native element event to svelte event
bindNativeElementToSvelteElement('nativeButtonMenu', 'svelteButtonMenu');

console.log('[souriya 😎]: theme.js 🌘🌘🌘🚀🚀🚀💎💎💎');