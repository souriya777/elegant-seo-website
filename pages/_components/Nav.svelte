<script>
  const base = import.meta.env.BASE_URL;
</script>

<nav>
  <ul>
    <li>
      <a href={base} class="logo">
        <img src={`${base}logo.svg`} height="64" width="64" alt="logo" />
      </a>
    </li>
    <li><a href="/">Page d'accueil</a></li>
    <li><a href="{`${base}page2`}">Page 2</a></li>
    <li><a href={`${base}about`}>About</a></li>
    <li><a href={`${base}productpage`}>Page produit</a></li>
    <li><a href={`${base}productlistpage`}>Page liste produits</a></li>
    <li><a href={`${base}basket`}>Panier</a></li>
    <li><a href={`${base}loginpage`}>Se connecter</a></li>
    <li><a href={`${base}registerpage`}>S'enregistrer</a></li>
    <li><a href={`${base}myaccountpage`}>Mon compte</a></li>
  </ul>
</nav>
