import { defineStore } from "pinia";

export const usePlatStore = defineStore("platStore", {
  state: () => ({
    plats: [
      { id: 1, nom: "Pizza" },
      { id: 2, nom: "Pâtes" },
      { id: 3, nom: "Salade" }
    ]
  })
});
