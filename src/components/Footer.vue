<template>
  <div>
    <p>Proyecto creado por un equipo comprometido en la calidad</p>
    <p>
      <b>contactenos</b>: <a :href="emailLink">{{ name }}</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "ajacome@example.com",
      name: "Adriana Carolina Jacome",
    };
  },
  computed: {
    emailLink(){
      return 'mailto:' + this.email;
    }
  },
};
</script>

<style>
</style>