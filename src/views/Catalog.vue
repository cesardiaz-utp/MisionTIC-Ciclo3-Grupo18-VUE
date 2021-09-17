<template>
  <div>
    <h1>Catalogo de productos</h1>
    <v-btn elevation="2" bottom right fixed fab to="/catalog/new">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-text-field label="Filtro">
      <v-icon slot="append" color="red"> mdi-magnify </v-icon>
    </v-text-field>
    <v-container>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          lg="3"
          md="4"
          sm="6"
          xs="12"
        >
          <v-card>
            <CatalogItem :product="product" :active="active" />
            <v-card-actions>
              <v-btn tile color="success">
                <v-icon left> mdi-pencil </v-icon>
                Editar
              </v-btn>
              <v-btn tile color="red" dark>
                <v-icon left> mdi-delete </v-icon>
                Eliminar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CatalogItem from '../components/CatalogItem.vue';

export default {
  components: {
    CatalogItem
  },
  data() {
    return {
      products: [],
      active: true
    };
  },
  mounted() {
    let productos = localStorage.products;
    if (productos !== undefined && productos !== "") {
      this.products = JSON.parse(productos);
    }
  },
};
</script>

<style>
</style>