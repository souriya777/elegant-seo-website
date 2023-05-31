<script>
  import {onMount} from "svelte";
  import MetaTags from "./_components/MetaTags.svelte";
  import Layout from './__layout.svelte';
    import PreloadFonts from "./_components/PreloadFonts.svelte";

  let state_text = "Prerendered";

  onMount(() => {
    state_text = "Prerendered and interactive";
    console.log('accueil.page');
  });
</script>

<PreloadFonts />
<MetaTags title="Vite Plugin SSR Svelte Project"
  description="Demonstration of using the Vite bundler for Svelte projects." />

<Layout>
  <h1>Accueil</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>{state_text}.</li>
  </ul>
</Layout>

<style>
  h1 {
    background-color: deeppink;
    color: pink;
  }
</style>