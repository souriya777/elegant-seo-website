import svelteTag from 'svelte-tag';

import ButtonMenu from '@/components/ButtonMenu.svelte';
import Drawer from '@/components/Drawer.svelte';
import Scrim from '@/components/Scrim.svelte';

export function initSvelteElements(shadow = false) {
  svelteTag({ tagname: 'button-menu', component: ButtonMenu, shadow });
  svelteTag({ tagname: 'my-drawer', component: Drawer, shadow });
  svelteTag({ tagname: 'my-scrim', component: Scrim, shadow });
}
