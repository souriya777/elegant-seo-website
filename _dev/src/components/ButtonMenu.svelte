<script>
  import { drawerOpened } from '@/js/store';

  function open() {
    drawerOpened.set(true);
  }
</script>

<button class="button-icon menu-open" on:click={open}>
  <slot />
</button>