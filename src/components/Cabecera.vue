<template>
  <v-app-bar color="indigo darken-2" dark app>
    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>

    <v-app-bar-title>{{ title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
    props: ["drawer", "title"],
    methods: {
        changeDrawer(){
            this.drawer = !this.drawer
            this.$emit("drawer")
        }
    }
};
</script>

<style>
</style>