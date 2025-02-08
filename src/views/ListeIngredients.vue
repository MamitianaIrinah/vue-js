<template>
  <div>
    <h2>Liste des Ingrédients</h2>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.id">
        <router-link :to="{ name: 'DetailIngredient', params: { id: ingredient.id } }">
          {{ ingredient.nomIngredient }}
        </router-link>
      </li>
    </ul>
    <br>
    <!-- Vous pouvez ajouter d'autres liens ici si nécessaire -->
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useIngredientStore } from '../stores/ingredientStore';

export default {
  name: "ListeIngredients",
  setup() {
    const ingredientStore = useIngredientStore();
    
    // Charge la liste des ingrédients (vérifiez que la méthode allIngredient() met à jour ingredientStore.ingredients)
    ingredientStore.allIngredient();
    
    // Extraire la propriété réactive ingredients
    const { ingredients } = storeToRefs(ingredientStore);
    
    return { ingredients };
  } 
}
</script>

<style scoped>
/* Conteneur principal centré avec fond blanc et ombre portée */
div {
  width: 4000px;           /* Occupe 90% de la largeur de la fenêtre */
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

/* Liste sans puces et sans padding */
ul {
  list-style: none;
  padding: 0;
}

/* Espacement entre les éléments de la liste */
ul li {
  margin-bottom: 15px;
}

/* Style des liens (router-link se transforme en <a>) */
ul li a {
  display: block;
  padding: 15px;
  background-color: #2c3e50;  /* Bleu foncé */
  color: #ecf0f1;             /* Texte clair */
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Effet au survol des liens */
ul li a:hover {
  background-color: #34495e;  /* Variation de bleu */
  transform: translateX(5px);
}
</style>
