// src/stores/ingredientStore.js
import { defineStore } from 'pinia'

export const useIngredientStore = defineStore('ingredientStore', {
  state: () => ({
    ingredients: [
      { id: 1, nom: "Tomate", stock: 50 },
      { id: 2, nom: "Mozzarella", stock: 20 },
      { id: 3, nom: "Basilic", stock: 15 },
      { id: 4, nom: "Huile d'olive", stock: 30 },
      { id: 5, nom: "Sel", stock: 100 },
      { id: 6, nom: "Poivre", stock: 100 },
      { id: 7, nom: "Oignon", stock: 40 },
      { id: 8, nom: "Ail", stock: 25 },
      { id: 9, nom: "Poulet", stock: 12 },
      { id: 10, nom: "Boeuf", stock: 8 }
    ]
  })
})
