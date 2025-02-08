<template>
    <div>
      <h2 v-if="ingredient">Détails de l'Ingrédient : {{ ingredient.nomIngredient }}</h2>
     
  
      <h3>Stock</h3>
      <ul >
         <li v-for="stock in stockStore.stocks" :key="stock.id">
          {{ stock.quantiteEntree }}
        </li>
      </ul>
      <!-- <p v-else>Aucun stock trouvé pour cet ingrédient.</p> -->
  
      <br>
      <router-link to="/liste-ingredients">Retour à la liste</router-link>
    </div>
  </template>
  
  <script>
import { useStockStore } from '../stores/stockStore'

export default {
  name: "DetailIngredient",
  setup() {
    const stockStore = useStockStore()
    stockStore.allStockByIngredient();
     // Charge tous les plats
    return { stockStore }
  } 
}
</script>
  