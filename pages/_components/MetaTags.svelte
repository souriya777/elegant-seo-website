<script>
  export let title;
  export let description;
</script>

<svelte:head>
	<title>{title}</title>
  <meta name="description" content="{description}" />

  <!-- FIXME
  <meta name="description" content="{block name='head_seo_description'}{$page.meta.description}{/block}">
  <meta name="keywords" content="{block name='head_seo_keywords'}{$page.meta.keywords}{/block}">
  {if $page.meta.robots !== 'index'}
  <meta name="robots" content="{$page.meta.robots}">
  -->
</svelte:head>
