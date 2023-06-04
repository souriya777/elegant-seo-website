<script>
  import { drawerOpened } from '@/js/store';

  function open() {
    drawerOpened.set(true);
  }
</script>

<span id="svelteButtonMenu" on:click={open} on:keydown={open}>
  <slot />
</span>