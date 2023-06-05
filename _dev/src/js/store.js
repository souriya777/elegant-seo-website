import { writable } from 'svelte/store';

export const drawerOpened = writable(false);
// FIXME just to "wrap" button "ajouter au panier"
export const basketCount = writable(0);

export function closeAll() {
  drawerOpened.set(false);
}

console.log('[souriya 😎]: store.js 🌘🌘🌘🚀🚀🚀💎💎💎');
