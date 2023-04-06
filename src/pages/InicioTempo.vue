<template>
  <q-page class="q-py-md q-px-sm">
    <h1>Inicio</h1>
    {{ a + b }}
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InicioTempo",
  data() {
    return {
      a: 1,
      b:"Tatuapé"
    };
  },
  async created() {
    console.log("Iniciou aplicação")
  },
  methods: {
    teste(){
      console.log("Teste")
    }
  },
});
</script>

<style scoped>

</style>
