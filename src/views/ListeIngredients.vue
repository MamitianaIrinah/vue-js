<template>
  <div>
    <h2>Liste des Ingrédients</h2>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.id">
        <router-link :to="{ name: 'DetailIngredient', params: { id: ingredient.id } }">
          {{ ingredient.nomIngredient }}
        </router-link>
      </li>
    </ul>
    <br>
    <!-- Vous pouvez ajouter d'autres liens ici si nécessaire -->
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useIngredientStore } from '../stores/ingredientStore';

export default {
  name: "ListeIngredients",
  setup() {
    const ingredientStore = useIngredientStore();
    
    // Charge la liste des ingrédients (vérifiez que la méthode allIngredient() met à jour ingredientStore.ingredients)
    ingredientStore.allIngredient();
    
    // Extraire la propriété réactive ingredients
    const { ingredients } = storeToRefs(ingredientStore);
    
    return { ingredients };
  } 
}
</script>
