<template>
  <q-page class="q-py-md q-px-sm">
    <h1>Denuncia</h1>
    <q-toggle
        v-model="dados.denuncia.anonimo"
        label="Denuncia Anonima"
      />
    <div v-if="!dados.denuncia.anonimo">
      <q-input v-model="dados.denunciante.graus" hint="Nome"/>
      <q-input v-model="dados.denunciante.localizacao" hint="Endereço"/>
      <q-input v-model="dados.denunciante.bairro" hint="Bairro"/>
      <q-input v-model="dados.denunciante.cep" hint="CEP"/>
    </div>

    <q-input v-model="dados.denuncia.graus" hint="Digite quantos graus estava no local"/>
    <q-input v-model="dados.denuncia.localizacao" hint="Digite quantos graus estava no local"/>
    <q-btn @click="teste()" push color="blue" text-color="white" label="Enviar Denuncia"/>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioDenuncia",
  data() {
    return {
      dados:{
        denuncia:{
        graus:"",
        localizacao:"",
        anonimo:false
        },

        denunciante:{
          nome:"",
          endereco:"",
          bairro:"",
          cep:""
        }
      }


    };
  },
  async created() {
    console.log("Iniciou aplicação")
  },
  methods: {
    teste(){

      console.log("Envio de dados",this.dados)

    }
  },
});
</script>

<style scoped>

</style>
