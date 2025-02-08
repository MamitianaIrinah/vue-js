<!-- src/views/InsertionPlat.vue -->
<template>
    <div>
      <h2>Insertion de Plat</h2>
      <form @submit.prevent="submitPlat">
        <div>
          <label for="nomPlat">Nom :</label>
          <input type="text" id="nomPlat" v-model="plat.nomPlat" required>
        </div>
        <div>
          <label for="tempsCuisson">Temps de cuisson :</label>
          <input type="number" id="tempsCuisson" v-model="plat.tempsCuisson" required>
        </div>
        <div>
          <label for="prixUnitaire">prix Unitaire :</label>
          <input type="number" id="prixUnitaire" v-model.number="plat.prixUnitaire" required>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
      <br>
      <router-link to="/liste-plats">Voir la liste des plats</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { usePlatStore } from '../stores/platStore'
  
  export default {
    name: "InsertionPlat",
    setup() {
      const platStore = usePlatStore()
      platStore.addPlat()
      const plat = ref({
        nomPlat: "",
        tempsCuisson: "",
        prixUnitaire: null,
      })
      
      const submitPlat = () => {
        // Ajoute le plat dans le store (la propriété ingredients sera ajoutée automatiquement)
        platStore.addPlat({ ...plat.value })
        // Réinitialise le formulaire
        plat.value = { nomPlat: "", tempsCuisson: "", prixUnitaire: null }
      }
  
      return { plat, submitPlat }
    }
  }
  </script>
  
  <style scoped>
  form div {
    margin-bottom: 10px;
  }
  </style>
  