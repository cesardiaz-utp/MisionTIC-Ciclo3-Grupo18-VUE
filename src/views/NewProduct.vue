<template>
  <div>
    <h1>Nuevo producto</h1>
    <v-img max-height="300" :src="img"></v-img>
    <v-text-field label="URL de la imagen" :rules="imgRules" v-model="img">
      <v-icon slot="prepend"> mdi-image </v-icon>
    </v-text-field>
    <v-text-field
      label="Nombre del producto"
      :rules="nameRules"
      hide-details="auto"
      v-model="name"
    >
      <v-icon slot="prepend"> mdi-account </v-icon>
    </v-text-field>
    <v-textarea name="input-7-1" label="Descripcion" v-model="description">
      <v-icon slot="prepend"> mdi-image </v-icon>
    </v-textarea>
    <div class="botones">
      <v-btn tile color="primary" @click="guardar()">
        <v-icon left> mdi-content-save </v-icon>
        Guardar
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      img: "",
      imgRules: [(value) => !!value || "Required."],
      nameRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  mounted() {
    console.log("idProduct:", localStorage.idProduct);
    console.log("products:", localStorage.products);
  },
  methods: {
    guardar() {
      console.log("Guardar");
      // Validar campos obligatorios
      if (this.img === "") {
        alert("La imagen es un campo obligatorio");
        return;
      }
      if (this.name === "") {
        alert("El nombre es un campo obligatorio");
        return;
      }

      //Agregar producto al localstorage
      let id = localStorage.idProduct;

      if (id === undefined || id == "") {
        id = 1;
      } else {
        id = parseInt(id) + 1;
      }

      const producto = {
        id: id,
        name: this.name,
        description: this.description,
        img: this.img,
      };

      let productos = localStorage.products;
      if (productos === undefined || productos == "") {
        productos = [];
      } else {
        productos = JSON.parse(productos);
      }

      console.log("productos", productos);
      productos.push(producto);

      alert("Producto creado exitosamente");
      this.name = "";
      this.description = "";
      this.img = "";

      localStorage.idProduct = id;
      localStorage.products = JSON.stringify(productos);
    },
  },
};
</script>

<style>
.botones {
  float: right;
}
</style>