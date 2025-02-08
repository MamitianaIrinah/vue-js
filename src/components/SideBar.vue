<!-- src/components/Sidebar.vue -->
<template>
    <div class="sidebar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/insertion-plat">Insertion Plat</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/insertion-ingredient">Insertion Ingrédient</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/liste-plats">Liste des Plats</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/filtre-ingredient">Filtre par ingrédient</router-link>
        </li>
        <li>
  <router-link to="/insertion-recette">Insertion Recette</router-link>
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
  .sidebar {
    width: 200px;
    background-color: #f4f4f4;
    padding: 10px;
  }
  
  /* .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 10px;
  } */
  </style>
  