<script>
  import { drawerOpened, closeAll } from "@/js/store";
</script>

<div
  class="scrim"
  class:active={$drawerOpened}
  on:click={closeAll}
  on:keydown={closeAll}
></div>
