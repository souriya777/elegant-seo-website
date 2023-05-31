<script>
  import {onMount} from "svelte";
  import MetaTags from "./_components/MetaTags.svelte";
  import Layout from "./__layout.svelte";
  import PreloadFonts from "./_components/PreloadFonts.svelte";
    import SuperComponent from "./_components/SuperComponent.svelte";

  onMount(() => {
    console.log('page2.page');
  });
</script>

<PreloadFonts />
<MetaTags
  title="Vite Plugin SSR Svelte Project"
  description="Demonstration of using the Vite bundler for Svelte projects."
/>

<Layout>
  <h1>Page 2</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
  </ul>

  <SuperComponent />
</Layout>

<style>
  h1 {
    background-color: aquamarine;
    color: aqua;
  }
</style>
