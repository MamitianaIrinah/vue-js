<template>
  <div class="form-container">
    <h2>Insertion de Plat</h2>
    <form @submit.prevent="submitPlat">
      <div class="form-group">
        <label for="nomPlat">Nom :</label>
        <input type="text" id="nomPlat" v-model="plat.nomPlat" required>
      </div>
      <div class="form-group">
        <label for="tempsCuisson">Temps de cuisson :</label>
        <input type="number" id="tempsCuisson" v-model="plat.tempsCuisson" required>
      </div>
      <div class="form-group">
        <label for="prixUnitaire">Prix Unitaire :</label>
        <input type="number" id="prixUnitaire" v-model.number="plat.prixUnitaire" required>
      </div>
      <button type="submit">Enregistrer</button>
    </form>
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
    // Initialisation ou préparation si nécessaire
    platStore.addPlat() 
    
    const plat = ref({
      nomPlat: "",
      tempsCuisson: "",
      prixUnitaire: null,
    })
    
    const submitPlat = () => {
      // Ajoute le plat dans le store
      platStore.addPlat({ ...plat.value })
      // Réinitialise le formulaire
      plat.value = { nomPlat: "", tempsCuisson: "", prixUnitaire: null }
    }

    return { plat, submitPlat }
  }
}
</script>

<style scoped>
/* Bloc principal du formulaire agrandi horizontalement */
.form-container {
  width: 5000px;           /* Occupe 90% de la largeur de la fenêtre */
  max-width: 1500px;      /* Largeur maximale pour ne pas trop s'étendre sur les très grands écrans */
  margin: 50px auto;      /* Centré horizontalement avec une marge verticale */
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Titre de la page */
h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8rem;
}

/* Mise en page du formulaire en colonnes */
form {
  display: flex;
  flex-direction: column;
}

/* Chaque groupe de champ */
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

/* Labels */
.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #34495e;
}

/* Champs de saisie avec des bords plus arrondis */
form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #bdc3c7;
  border-radius: 30px; /* Changement : rend le champ plus arrondi */
  font-size: 1rem;
  transition: border-color 0.3s;
}

/* Focus sur les champs de saisie */
form input:focus {
  outline: none;
  border-color: #2c3e50;
}

/* Bouton d'enregistrement */
button[type="submit"] {
  background-color: #2c3e50;
  color: #ecf0f1;
  border: none;
  padding: 15px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.3s;
}

button[type="submit"]:hover {
  background-color: #34495e;
  transform: translateY(-2px);
}

/* Lien de navigation */
router-link,
a {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s;
}

router-link:hover,
a:hover {
  color: #34495e;
}
</style>
