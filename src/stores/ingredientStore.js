// src/stores/ingredientStore.js
import { defineStore } from 'pinia'
import {getAllIngredient} from '../service/ingredientService';

export const useIngredientStore = defineStore('ingredientStore', {
  state: () => ({
    ingredients: [
     
    ]
  }),
  actions: {
    async allIngredient(){
      const response = await getAllIngredient()
      this.ingredients = response
    }
  }
})
