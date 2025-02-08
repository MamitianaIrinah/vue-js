<!-- src/views/InsertionPlat.vue -->
<template>
    <div>
      <h2>Insertion de Plat</h2>
      <form @submit.prevent="submitPlat">
        <div>
          <label for="nom">Nom :</label>
          <input type="text" id="nom" v-model="plat.nom" required>
        </div>
        <div>
          <label for="tempsCuisson">Temps de cuisson :</label>
          <input type="text" id="tempsCuisson" v-model="plat.tempsCuisson" required>
        </div>
        <div>
          <label for="quantite">Quantité :</label>
          <input type="number" id="quantite" v-model.number="plat.quantite" required>
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
      const plat = ref({
        nom: "",
        tempsCuisson: "",
        quantite: null,
      })
      
      const submitPlat = () => {
        // Ajoute le plat dans le store (la propriété ingredients sera ajoutée automatiquement)
        platStore.addPlat({ ...plat.value })
        // Réinitialise le formulaire
        plat.value = { nom: "", tempsCuisson: "", quantite: null }
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
  