<template>
  <div id="app">
    <!-- Le Sidebar sur la gauche -->
    <Sidebar />

    <!-- La zone principale pour afficher le contenu des pages -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
