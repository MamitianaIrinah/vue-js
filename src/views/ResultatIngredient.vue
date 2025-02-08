<!-- src/views/ResultatIngredient.vue -->
<template>
    <div>
      <h2>Détails de l'ingrédient</h2>
      <div v-if="ingredient">
        <p><strong>Nom :</strong> {{ ingredient.nom }}</p>
        <p><strong>Stock :</strong> {{ ingredient.stock }}</p>
      </div>
      <br>
      <router-link to="/filtre-ingredient">Retour au filtre</router-link>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useIngredientStore } from '../stores/ingredientStore'
  
  export default {
    name: "ResultatIngredient",
    setup() {
      const route = useRoute()
      const ingredientStore = useIngredientStore()
      const id = parseInt(route.params.id) // On s'assure d'avoir un nombre
      const ingredient = computed(() =>
        ingredientStore.ingredients.find(ing => ing.id === id)
      )
  
      return { ingredient }
    }
  }
  </script>
  