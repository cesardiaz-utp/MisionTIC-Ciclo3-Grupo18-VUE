<template>
  <div>
    <v-img class="white--text align-end" height="200px" :src="product.img">
      <v-card-title>{{ product.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0 big">
      {{ product.description }}
    </v-card-subtitle>
  </div>
</template>

<script>
export default {
  props: ["product", "active"],
};
</script>

<style scope>
.big {
    font-size: 50px !important;
}
</style>

