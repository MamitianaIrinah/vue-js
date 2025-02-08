// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import InsertionPlat from '../views/InsertionPlat.vue'
import ListePlats from '../views/ListePlats.vue'
import InsertionIngredient from '../views/InsertionIngredient.vue'
import ListeIngredients from '../views/ListeIngredients.vue'
import DetailPlat from '../views/DetailPlat.vue'
import FiltreIngredient from '../views/FiltreIngredient.vue'
import ResultatIngredient from '../views/ResultatIngredient.vue' // Import du nouveau composant

const routes = [
  {
    path: '/',
    redirect: '/insertion-plat'
  },
  {
    path: '/insertion-plat',
    name: 'InsertionPlat',
    component: InsertionPlat
  },
  {
    path: '/liste-plats',
    name: 'ListePlats',
    component: ListePlats
  },
  {
    path: '/insertion-ingredient',
    name: 'InsertionIngredient',
    component: InsertionIngredient
  },
  {
    path: '/liste-ingredients',
    name: 'ListeIngredients',
    component: ListeIngredients
  },
  {
    path: '/plat/:id',
    name: 'DetailPlat',
    component: DetailPlat
  },
  {
    path: '/filtre-ingredient',
    name: 'FiltreIngredient',
    component: FiltreIngredient
  },
  {
    path: '/resultat-ingredient/:id',
    name: 'ResultatIngredient',
    component: ResultatIngredient
  },

  {
    path: '/insertion-recette',
    name: 'InsertionRecette',
    component: () => import('../views/InsertionRecette.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
