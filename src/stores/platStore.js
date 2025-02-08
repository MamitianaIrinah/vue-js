import { defineStore } from "pinia";
import {getAllPlat} from '../service/platService';
import {insertionPlat} from '../service/platService';

export const usePlatStore = defineStore("platStore", {
  state: () => ({
    plats: [
      { id: 1, nom: "Tomate"  },
    ]
  }),
  actions: {
    async allPlat(){
      const response = await getAllPlat()
      this.plats = response
    },
    async addPlat(data){
      console.log(data)
      const response = await insertionPlat(data.nomPlat, data.tempsCuisson, data.prixUnitaire)
      this.plats = response
    }

  }
  
});
