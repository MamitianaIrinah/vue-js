<template>
    <div>
      <h2 v-if="ingredient">Détails de l'Ingrédient : {{ ingredient.nomIngredient }}</h2>
      <p v-else>Chargement...</p>
  
      <h3>Stock</h3>
      <ul v-if="ingredientStocks.length > 0">
        <li v-for="stockItem in ingredientStocks" :key="stockItem.id">
          Quantité Entrée : {{ stockItem.quantiteEntree }} - Quantité Sortie : {{ stockItem.quantiteSortie }}
        </li>
      </ul>
      <p v-else>Aucun stock trouvé pour cet ingrédient.</p>
  
      <br>
      <router-link to="/liste-ingredients">Retour à la liste</router-link>
    </div>
  </template>
  
  <script>
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useIngredientStore } from '../stores/ingredientStore';
  import { useStockStore } from '../stores/stockStore';
  
  export default {
    name: 'DetailIngredient',
    setup() {
      const route = useRoute();
      const id = route.params.id;
  
      const ingredientStore = useIngredientStore();
      const stockStore = useStockStore();
  
      // Charge les données au montage du composant
      onMounted(async () => {
        await ingredientStore.allIngredient();
        await stockStore.allStock();
  
        console.log("ID ingrédient demandé :", id);
        console.log("Tous les stocks :", stockStore.stocks);
        console.log("Tous les ingrédients :", ingredientStore.ingredients);
      });
  
      // Récupère l'ingrédient correspondant
      const ingredient = computed(() => {
        return ingredientStore.ingredients.find(item => Number(item.id) === Number(id));
      });
  
      // Filtrer les stocks associés à l'ingrédient
      const ingredientStocks = computed(() => {
        const filtered = stockStore.stocks.filter(stock => {
          console.log("Stock examiné :", stock);
          return stock.ingredient && Number(stock.ingredient.id) === Number(id);
        });
  
        console.log("Stock après filtrage :", filtered);
        return filtered;
      });
  
      return { ingredient, ingredientStocks };
    }
  };
  </script>
  