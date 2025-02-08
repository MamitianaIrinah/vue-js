<template>
    <div>
      <h2>Insertion d'Ingrédient</h2>
      <form @submit.prevent="submitIngredient">
        <div>
          <label for="nom">Nom :</label>
          <input type="text" id="nom" v-model="ingredient.nom" required>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
      <br>
      <router-link to="/liste-ingredients">Voir la liste des ingrédients</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "InsertionIngredient",
    data() {
      return {
        ingredient: {
          nom: "",
        },
      };
    },
    methods: {
      submitIngredient() {
        console.log("Ingrédient enregistré :", this.ingredient);
        // Réinitialiser le formulaire
        this.ingredient.nom = "";
      },
    },
  };
  </script>
  
  <style scoped>
  form div {
    margin-bottom: 10px;
  }
  </style>
  