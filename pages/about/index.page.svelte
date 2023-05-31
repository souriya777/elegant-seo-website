<script>
  import MetaTags from '../_components/MetaTags.svelte';
  import Layout from '../__layout.svelte';
  export let pageProps;
</script>

<MetaTags title={pageProps.title} description={pageProps.body} />

<Layout>
  <h1>TESTA</h1>
  <h1>{pageProps.title}</h1>
  <p>{pageProps.body}</p>
</Layout>
