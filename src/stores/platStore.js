import { defineStore } from "pinia";
import {getAllPlat} from '../service/platService';
import {insertionPlat} from '../service/platService';

export const usePlatStore = defineStore("platStore", {
  state: () => ({
    plats: [
      { 
        nomPlat: "Spaghetti Bolognese", 
        tempsCuisson: 20, 
        prixUnitaire: 12, 
        imageUrl: "/images/plats/spaghetti.jpg" 
      },
      { 
        nomPlat: "Pizza Margherita", 
        tempsCuisson: 15, 
        prixUnitaire: 10, 
        imageUrl: "/images/plats/pizza.jpg" 
      }
    ],
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

