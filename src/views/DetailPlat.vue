<!-- src/views/DetailPlat.vue -->
<template>
    <div>
      <h2>Détails du Plat : {{ plat.nom }}</h2>
      <p><strong>Temps de cuisson :</strong> {{ plat.tempsCuisson }}</p>
      <p><strong>Quantité :</strong> {{ plat.quantite }}</p>
  
      <h3>Ingrédients</h3>
      <ul>
        <li v-for="(ingredient, index) in plat.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
  
      <!-- Formulaire pour ajouter un ingrédient au plat -->
      <!-- <form @submit.prevent="ajouterIngredient">
        <input type="text" v-model="nouvelIngredient" placeholder="Ajouter un ingrédient" required>
        <button type="submit">Ajouter</button>
      </form> -->
  
      <br>
      <router-link to="/liste-plats">Retour à la liste</router-link>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { usePlatStore } from '../stores/platStore'
  import { useRoute } from 'vue-router'
  
  export default {
    name: 'DetailPlat',
    setup() {
      const route = useRoute()
      const platStore = usePlatStore()
      // On récupère l'index (id) du plat depuis les paramètres de l'URL
      const id = route.params.id
      // Le plat concerné
      const plat = computed(() => platStore.plats[id])
  
      // Pour ajouter un ingrédient
      const nouvelIngredient = ref('')
      const ajouterIngredient = () => {
        if (nouvelIngredient.value.trim()) {
          // On ajoute l'ingrédient dans le tableau ingredients du plat
          platStore.plats[id].ingredients.push(nouvelIngredient.value.trim())
          nouvelIngredient.value = ''
        }
      }
  
      return { plat, nouvelIngredient, ajouterIngredient }
    }
  }
  </script>
  