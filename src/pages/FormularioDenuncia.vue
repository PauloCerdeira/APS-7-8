<template>
  <q-page
    class="q-py-md q-px-sm text-center column justify-between items-center"
  >
    <div style="width: 100%; max-width: 450px; margin: 0px auto">
      <q-toggle v-model="dados.denuncia.anonima" label="Denuncia Anonima" />

      <div class="q-mb-xl" v-if="!dados.denuncia.anonima">
        <q-input
          v-model="dados.denunciante.nome"
          label="Digite seu nome completo"
        />
        <q-input
          v-model="dados.denunciante.endereco"
          label="Rua, numero e complemento"
        />
        <q-input
          v-model="dados.denunciante.contato"
          label="Telefone ou celular"
        />
      </div>

      <q-input
        v-model="dados.denuncia.endereco"
        label="Endereço ou local da denuncia"
      />
      <q-input v-model="dados.denuncia.titulo" label="Resumo da denuncia" />
      <q-input
        type="textarea"
        v-model="dados.denuncia.descricao"
        label="Descrição total da denuncia"
      />
      <br />
    </div>
    <q-btn
      @click="enviarDenuncia()"
      push
      color="blue"
      text-color="white"
      label="Enviar Denuncia"
      style="max-width: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioDenuncia",
  data() {
    return {
      dados: {
        denuncia: {
          endereco: "",
          titulo: "",
          descricao: "",
          anonima: false,
        },
        denunciante: {
          nome: "",
          endereco: "",
          contato: "",
        },
      },
    };
  },
  async created() {},
  methods: {
    async enviarDenuncia() {
      let res = await this.$webService.post("/denuncia", this.dados);
      if (res.data.error) {
        console.log("deu erro", res.data.error);
      } else {
        console.log("deu certo");
      }
    },
  },
});
</script>

<style scoped></style>
