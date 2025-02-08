
  <script setup>
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  
  // Convertir tes données d'ingrédients en une variable réactive
  const ingredients = ref([
    { id: 1, nom: "Tomate", stock: 50 },
    { id: 2, nom: "Mozzarella", stock: 20 },
    { id: 3, nom: "Basilic", stock: 15 },
    { id: 4, nom: "Huile d'olive", stock: 30 },
    { id: 5, nom: "Sel", stock: 100 },
    { id: 6, nom: "Poivre", stock: 100 },
    { id: 7, nom: "Oignon", stock: 40 },
    { id: 8, nom: "Ail", stock: 25 },
    { id: 9, nom: "Poulet", stock: 12 },
    { id: 10, nom: "Boeuf", stock: 8 }
  ]);
  </script>
  
  <template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="row mt-4">
            <!-- Section Tableau Sales by Country -->
            <div class="col-lg-10 mb-lg-0 mb-4">
              <div class="card">
                <div class="p-3 pb-0 card-header">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-2">Sales by Country</h6>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center">
                    <tbody>
                      <tr v-for="ingredient in ingredients" :key="ingredient.id">
                        <td class="w-30">
                          <div class="px-2 py-1 d-flex align-items-center">
                            <div class="ms-6">
                              <p class="mb-0 text-xs font-weight-bold">
                                Nom:
                              </p>
                              <h6 class="mb-0 text-sm">{{ ingredient.nom }}</h6>                                
                            </div>                         
                          </div>
                        </td>
                        <br>           
                      </tr>               
                    </tbody>                  
                  </table>
                  <router-link to="/insertion-ingredient">
                Retour à l'insertion
              </router-link>
                </div>
              </div>
            </div>
            
            <!-- Section Liste des Ingrédients -->
            <div class="col-lg-5">
              <h2>Liste des Ingrédients</h2>
              <ul>
                <li v-for="ingredient in ingredients" :key="ingredient.id">
                  {{ ingredient.nom }}
                </li>
              </ul>
              <br>
              <router-link to="/insertion-ingredient">
                Retour à l'insertion
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  