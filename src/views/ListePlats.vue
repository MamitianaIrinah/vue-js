<!-- src/views/ListePlats.vue -->
<template>
    <div>
      <h2>Liste des Plats</h2>
      <ul>
        <!-- Pour chaque plat, on crée un lien vers la page de détail -->
        <li v-for="(plat, index) in platStore.plats" :key="index">
          <router-link :to="{ name: 'DetailPlat', params: { id: index } }">
            {{ plat.nom }} - {{ plat.tempsCuisson }} - {{ plat.quantite }}
          </router-link>
        </li>
      </ul>
      <br>
      <router-link to="/insertion-plat">Retour à l'insertion</router-link>
    </div>
  </template>
  
  <script>
  import { usePlatStore } from '../stores/platStore'
  
  export default {
    name: "ListePlats",
    setup() {
      const platStore = usePlatStore()
      return { platStore }
    }
  }
  </script>
  