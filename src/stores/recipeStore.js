import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => ({
    recettes: []
  }),
  actions: {
    ajouterRecette(platId, ingredientId, quantite) {
      this.recettes.push({ id: this.recettes.length + 1, platId, ingredientId, quantite });
    }
  }
});
