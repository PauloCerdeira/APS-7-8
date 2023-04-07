<template>
  <q-page class="q-py-md q-px-sm">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet">

    <h4>Formulário de Denúncias</h4>
    <q-toggle
        v-model="dados.denuncia.anonimo"
        label="Denuncia Anonima"
      />
     
    <div v-if="!dados.denuncia.anonimo">
      <q-input v-model="dados.denunciante.graus" label="Seu nome" hint="Nome e sobrenome"/>
      <q-input v-model="dados.denunciante.localizacao" label="Seu endereço"/>
      <q-input v-model="dados.denunciante.bairro" label="Seu bairro"/>
      <q-input v-model="dados.denunciante.cep" label="Seu CEP"/>
    </div>

    <q-input v-model="dados.denuncia.graus" label="Temperatura do local"/>
    <q-input v-model="dados.denuncia.localizacao" label="Informe o local"/>
    <br>
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
  h4 {
    font-family: 'Oswald', sans-serif;
    color:rgb(0, 119, 255);
  }
</style>
