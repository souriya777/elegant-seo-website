<script>
  import Nav from "./_components/Nav.svelte";
  import Footer from "./_components/Footer.svelte";
</script>

<main>
  <Nav />

  <div class="content">
    <slot />
  </div>
</main>

<Footer />
