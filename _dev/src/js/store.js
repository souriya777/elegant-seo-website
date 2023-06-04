import { writable } from 'svelte/store';

export const drawerOpened = writable(false);

export function closeAll() {
  drawerOpened.set(false);
}

console.log('[souriya 😎]: store.js 🌘🌘🌘🚀🚀🚀💎💎💎');
