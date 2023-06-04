<script>
  import { drawerOpened } from '@/js/store';

  function open() {
    console.log('open');
    drawerOpened.set(true);
  }
</script>

<span id="buttonMenu" on:click={open} on:keypress={open} on:testa={() => console.log('testa')}>
  <slot />
</span>