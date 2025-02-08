<template>
    <div>
      <h2>Liste des stocks</h2>
      <ul>
        <li v-for="stock in stockStore.stocks" :key="stock.id">
            {{ ingredient.idIngredient.nomIngredient }} - {{ stock.quantiteEntree }} - {{ stock.quantiteSortie }} 
        </li>
      </ul>
      <br>
      <router-link to="/insertion-stocks">
        Retour à l'insertion
      </router-link>
    </div>
  </template>
  
  <script>
  import { useStockStore } from '../stores/stockStore'
  
  
  export default {
    name: "ListeStock",
    setup() {
      const stockStore = useStockStore()
      stockStore.allStock()
      return { stockStore }
    }
  }
  </script>
  