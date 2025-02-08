<!-- src/views/FiltreIngredient.vue -->
<template>
    <div>
      <h2>Filtrer par ingrédient</h2>
      <select v-model="selectedIngredientId">
        <option disabled value="">Sélectionnez un ingrédient</option>
        <option
          v-for="ingredient in ingredientStore.ingredients"
          :key="ingredient.id"
          :value="ingredient.id"
        >
          {{ ingredient.nom }}
        </option>
      </select>
      <br><br>
      <!-- Bouton Valider, désactivé tant qu'aucun ingrédient n'est sélectionné -->
      <button @click="validerFiltre" :disabled="!selectedIngredientId">Valider</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useIngredientStore } from '../stores/ingredientStore'
  import { useRouter } from 'vue-router'
  
  export default {
    name: "FiltreIngredient",
    setup() {
      const ingredientStore = useIngredientStore()
      const router = useRouter()
      const selectedIngredientId = ref("")
  
      const validerFiltre = () => {
        if (selectedIngredientId.value) {
          // Redirige vers la page de résultat en passant l'id dans les params
          router.push({ name: 'ResultatIngredient', params: { id: selectedIngredientId.value } })
        }
      }
  
      return { ingredientStore, selectedIngredientId, validerFiltre }
    }
  }
  </script>
  
  <style scoped>
  select {
    padding: 5px;
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  button {
    padding: 5px 10px;
    font-size: 16px;
  }
  </style>
    