<script>
  import { basketCount } from '@/js/store';

  $: console.log('$basketCount', $basketCount);

  function add() {
    basketCount.set($basketCount + 1);
  }
</script>

<span on:click={add} on:keydown={add}>
  <slot />
</span>