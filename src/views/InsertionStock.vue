<template>
    <div>
      <h2>Insertion de Stock</h2>
      <form @submit.prevent="submitStock">
        <div>
          <label for="ingredient">Ingrédient :</label>
          <select id="IngredientById" v-model="selectedIngredientId" required>
            <option disabled value="">Sélectionnez un ingrédient</option>
            <option 
              v-for="ingredient in ingredientStore.ingredients" 
              :key="ingredient.id" 
              :value="ingredient.id"
            >
              {{ ingredient.nomIngredient }}
            </option>
          </select>
        </div>
  
        <div>
          <label for="quantiteEntree">Quantité Entrée :</label>
          <input type="number" id="quantiteEntree" v-model.number="stock.quantiteEntree" required>
        </div>
  
        <div>
          <label for="quantiteSortie">Quantité Sortie :</label>
          <input type="number" id="quantiteSortie" v-model.number="stock.quantiteSortie" required>
        </div>
  
  
        <button type="submit">Enregistrer</button>
      </form>
      <br>
      <router-link to="/liste-stocks">Voir la liste des stocks</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useIngredientStore } from '../stores/ingredientStore';
  import { useStockStore } from '../stores/stockStore';
  
  export default {
    name: "InsertionStock",
    setup() {
      // Récupère la liste des ingrédients
      const ingredientStore = useIngredientStore();
      ingredientStore.allIngredient();
  
      // Variable pour l'ingrédient sélectionné
      const selectedIngredientId = ref("");
  
      const stockStore = useStockStore();
  
      // Objet stock à insérer
      const stock = ref({
        IngredientById: "",
        quantiteEntree: null,
        quantiteSortie: null
      
      });
  
      const submitStock = () => {
        if (!selectedIngredientId.value) {
          alert("Veuillez sélectionner un ingrédient.");
          return;
        }
        // Affecte l'ingrédient sélectionné à l'objet stock
        stock.value.idIngredient = selectedIngredientId.value;
        // Appelle la méthode d'ajout dans le store en passant une copie de l'objet stock
        stockStore.addStock({ ...stock.value });
  
        // Réinitialise le formulaire
        selectedIngredientId.value = "";
        stock.value = {
            IngredientById: "",
          quantiteEntree: null,
          quantiteSortie: null
         
        };
      };
  
      return { ingredientStore, selectedIngredientId, stock, submitStock };
    }
  };
  </script>
  
  <style scoped>
  form div {
    margin-bottom: 10px;
  }
  </style>
  