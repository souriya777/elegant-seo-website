<script>
  import { menuPanelOpened } from '../../js/store'
    import Component1 from "./Component1.svelte";
    import Component2 from "./Component2.svelte";

</script>

<h1 class:active={$menuPanelOpened}>SuperComponent</h1>
<button on:click={() => menuPanelOpened.set(!$menuPanelOpened)}>switch</button>
<p>menuPanelOpened:{$menuPanelOpened}</p>
<Component1 fromstore={$menuPanelOpened} />
<Component2 />

<style>
  h1 { background-color: deeppink;}
  h1.active { background-color: pink;}
</style>