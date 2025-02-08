<template>
  <div class="container">
    <h2>Liste des Plats</h2>
    <ul>
      <!-- Pour chaque plat, on crée un lien vers la page de détail -->
      <li v-for="(plat, index) in platStore.plats" :key="index" class="plat-item">
        <router-link :to="{ name: 'DetailPlat', params: { id: index } }" class="plat-link">
          <div class="plat-content">
            <!-- Afficher l'image si elle existe -->
            <img 
              v-if="plat.imageUrl" 
              :src="plat.imageUrl" 
              :alt="'Image de ' + plat.nomPlat" 
              class="plat-image"
            />
            <!-- Contenu textuel du plat -->
            <div class="plat-info">
              <h3>{{ plat.nomPlat }}</h3>
              <p>Temps de cuisson: {{ plat.tempsCuisson }} secondes</p>
              <p>Prix: {{ plat.prixUnitaire }} €</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <br>
    <router-link to="/insertion-plat" class="back-link">Retour à l'insertion</router-link>
  </div>
</template>

<script>
import { usePlatStore } from '../stores/platStore'

export default {
  name: "ListePlats",
  setup() {
    const platStore = usePlatStore()
    platStore.allPlat()  // Charge tous les plats
    return { platStore }
  } 
}
</script>

<style scoped>
/* Conteneur principal centré avec fond blanc et ombre */
.container {
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Titre de la page */
h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 1.8rem;
}

/* Liste sans puces */
ul {
  list-style: none;
  padding: 0;
}

/* Chaque élément de la liste */
.plat-item {
  margin-bottom: 20px;
}

/* Lien complet du plat en mode bloc */
.plat-link {
  display: block;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 15px;
  background-color: #2c3e50;
  border-radius: 8px;
}

/* Contenu du plat : image et informations côte à côte */
.plat-content {
  display: flex;
  align-items: center;
}

/* Style de l'image du plat */
.plat-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}

/* Informations textuelles du plat */
.plat-info h3 {
  margin: 0 0 5px;
  color: #ecf0f1;
}

.plat-info p {
  margin: 0;
  color: #bdc3c7;
}

/* Effet au survol sur le lien du plat */
.plat-link:hover {
  background-color: #34495e;
  transform: translateX(5px);
}

/* Lien de retour */
.back-link {
  display: block;
  text-align: center;
  margin-top: 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s;
}

.back-link:hover {
  color: #34495e;
}
</style>
