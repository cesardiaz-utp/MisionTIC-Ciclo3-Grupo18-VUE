<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <Menu :title="title" :isAdmin="true" />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      title: "La aplicación de Cesar",
      drawer: false,
    };
  },
};
</script>
