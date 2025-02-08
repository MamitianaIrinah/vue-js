<template>
    <div>
      <h2>Insertion d'une Recette</h2>
  
      <!-- Sélection du plat -->
      <label for="plat">Plat :</label>
      <select v-model="selectedPlatId">
        <option disabled value="">Sélectionnez un plat</option>
        <option v-for="plat in platStore.plats" :key="plat.id" :value="plat.id">
          {{ plat.nom }}
        </option>
      </select>
  
      <br><br>
  
      <!-- Sélection de l'ingrédient -->
      <label for="ingredient">Ingrédient :</label>
      <select v-model="selectedIngredientId">
        <option disabled value="">Sélectionnez un ingrédient</option>
        <option v-for="ingredient in ingredientStore.ingredients" :key="ingredient.id" :value="ingredient.id">
          {{ ingredient.nom }}
        </option>
      </select>
  
      <br><br>
  
      <!-- Saisie de la quantité -->
      <label for="quantite">Quantité :</label>
      <input type="number" v-model="quantite" min="1" />
  
      <br><br>
  
      <!-- Bouton d'ajout avec vérification du clic -->
      <button id="btnAjouterRecette" @click="ajouterRecette">
        Ajouter Recette
      </button>
  
      <h3>Recettes ajoutées :</h3>
      <ul>
        <li v-for="recette in recipeStore.recettes" :key="recette.id">
          Plat: {{ getPlatName(recette.platId) }} - Ingrédient: {{ getIngredientName(recette.ingredientId) }} - Quantité: {{ recette.quantite }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { usePlatStore } from '../stores/platStore'
  import { useIngredientStore } from '../stores/ingredientStore'
  import { useRecipeStore } from '../stores/recipeStore'
  
  export default {
    setup() {
      console.log("Le composant est bien monté !"); // Vérifie si le composant est chargé
  
      const platStore = usePlatStore();
      const ingredientStore = useIngredientStore();
      const recipeStore = useRecipeStore();
  
      const selectedPlatId = ref("");
      const selectedIngredientId = ref("");
      const quantite = ref(1);
  
      const ajouterRecette = () => {
        console.log("Bouton cliqué !"); // Vérifie si le bouton est cliqué
        console.log("Plat sélectionné :", selectedPlatId.value);
        console.log("Ingrédient sélectionné :", selectedIngredientId.value);
        console.log("Quantité :", quantite.value);
  
        if (!selectedPlatId.value || !selectedIngredientId.value || quantite.value <= 0) {
          console.error("Erreur : Tous les champs doivent être remplis !");
          return;
        }
  
        recipeStore.ajouterRecette(selectedPlatId.value, selectedIngredientId.value, quantite.value);
        console.log("Recette ajoutée :", recipeStore.recettes);
  
        // Réinitialisation des champs
        selectedPlatId.value = "";
        selectedIngredientId.value = "";
        quantite.value = 1;
      };
  
      const getPlatName = (id) => platStore.plats.find(plat => plat.id === id)?.nom || "Inconnu";
      const getIngredientName = (id) => ingredientStore.ingredients.find(ingredient => ingredient.id === id)?.nom || "Inconnu";
  
      return {
        platStore,
        ingredientStore,
        recipeStore,
        selectedPlatId,
        selectedIngredientId,
        quantite,
        ajouterRecette,
        getPlatName,
        getIngredientName
      };
    }
  };
  </script>
  