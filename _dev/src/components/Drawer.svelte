<script>
  import { scroll, noScroll } from '@/js/souriya-utils';
  import { drawerOpened } from '@/js/store';

  $: if($drawerOpened) {
    noScroll();
  } else {
    scroll()
  }

  function close() {
    drawerOpened.set(false);
  }
</script>

<div class="drawer" data-shown={$drawerOpened}>
  <div class="header">
    <button class="menu-close" on:click={close}>❌</button>
    logo
  </div>

  <div class="content">
    <slot />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sit labore aperiam modi odio doloremque quia ex aliquam, optio recusandae reiciendis, similique nihil laudantium quis qui, placeat sequi ipsum eos.</p>
  </div>
</div>
