<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> {{ title }} </v-list-item-title>
        <v-list-item-subtitle> {{ subtitle }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav v-if="isAdmin">
      <v-list-item v-for="item in adminItems" :key="item.title" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["title", "isAdmin"],
  data() {
    return {
      subtitle: "Menu principal",
      adminItems: [
          { title: "Gestion Productos", icon: "mdi-archive-settings" , path: "/catalog"},
          { title: "Gestion Clientes", icon: "mdi-account-circle", path: "/client" },
          ],
      items: [
        { title: "Inicio", icon: "mdi-home", path: "/" },
        { title: "Acerca de", icon: "mdi-help-box", path: "/about" },
      ],
    };
  },
};
</script>

<style scope>
</style>