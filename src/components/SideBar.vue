<!-- src/components/Sidebar.vue -->

<template>
    <div class="sidebar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/insertion-plat">Insertion Plat</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/liste-ingredients">Liste Ingrédient</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/liste-plats">Liste des Plats</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/filtre-ingredient">Filtre par ingrédient</router-link>
        </li>
        <li class="nav-item">
  <router-link to="/insertion-recette">Insertion Recette</router-link>
</li>
<li class="nav-item">
  <router-link to="/insertion-stock">Insertion Stock</router-link>
</li>


      </ul>
    </div>
  </template>
  
  <script>


  export default {
    name: "Sidebar",
  };
  </script>
  
  <style scoped>
/* Conteneur principal de la sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #2c3e50; /* Bleu foncé */
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
}

/* Liste des liens */
.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

/* Style de chaque item */
.nav-item {
  margin-bottom: 20px;
}

/* Style des liens sous forme de bloc */
.nav-item a {
  display: block;
  color: #ecf0f1;       /* Texte clair */
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 15px;
  background-color: #34495e; /* Une nuance complémentaire de bleu foncé */
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

/* Effet au survol et sur le lien actif */
.nav-item a:hover,
.router-link-active {
  background-color: #3d566e; /* Légère variation pour l'effet visuel */
  transform: translateX(5px);
}
</style>
