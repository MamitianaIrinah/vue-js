import { defineStore } from "pinia";
import {getAllStock} from '../service/stockService';
import {insertionStock} from '../service/stockService';

export const useStockStore = defineStore("stockStore", {
  state: () => ({
    stocks: [
      
    ]
  }),
  actions: {
    async allStock() {
        const response = await getAllStock();
        console.log("Réponse API stocks :", response);
        this.stocks = response;
      
    },
    async addStock(data){
      console.log(data)
      const response = await insertionStock(data.IngredientById, data.quantiteEntree, data.quantiteSortie)
      this.stocks = response
    }

  }
});
