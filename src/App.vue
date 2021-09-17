<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <Menu :title="title" :isAdmin="true" />
    </v-navigation-drawer>

    <cabecera :title="title" :drawer="drawer" />

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue";
import Cabecera from "./components/Cabecera.vue";
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Menu,
    Cabecera,
    Footer,
  },
  data() {
    return {
      title: "La aplicación de Cesar",
      drawer: true,
    };
  },
  watch: {
    drawer(value) {
      return value;
    },
  },
};
</script>

<style>

</style>