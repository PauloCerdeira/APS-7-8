<template>
  <q-page class="q-py-md q-px-sm row justify-center" style="margin: 0px auto">
    <div class="col-xs-12 col-md-auto controle-div">
      <h5 class="q-my-sm text-center">Controle de Poluição</h5>
      <q-list
        bordered
        class="rounded-borders controle"
        style="max-width: 450px; margin: 5px auto 5px auto"
      >
        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="local_shipping"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section>
              Poluição Terrestre Total -
              {{
                (
                  poluicaoDados.terrestre.max *
                  poluicaoDados.terrestre.porcentagem
                ).toFixed(0)
              }}
              / {{ poluicaoDados.terrestre.max }}
              <q-linear-progress
                stripe
                rounded
                size="20px"
                :value="poluicaoDados.terrestre.porcentagem"
                :color="setProgessColor(poluicaoDados.terrestre.porcentagem)"
                class="q-mt-sm"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    color="transparent"
                    text-color="black"
                    :label="
                      (poluicaoDados.terrestre.porcentagem * 100).toFixed(2) +
                      '%'
                    "
                  />
                </div>
              </q-linear-progress>
            </q-item-section>
          </template>
          <q-card>
            <q-card-section
              class="row"
              v-for="veiculo in poluicaoDados.terrestre.veiculos"
              :key="veiculo.id"
            >
              <div class="col-auto q-pr-sm text-center">
                <q-icon name="local_shipping" size="28px" /> <br />
                ID Veiculo:
                {{ veiculo.id }}
              </div>
              <div class="col row items-center justify-center">
                {{ veiculo.value }} /
                {{
                  (
                    poluicaoDados.terrestre.max /
                    poluicaoDados.terrestre.veiculos.length
                  ).toFixed(2)
                }}
                <q-linear-progress
                  stripe
                  rounded
                  size="20px"
                  :value="veiculo.porcentagem"
                  :color="setProgessColor(veiculo.porcentagem)"
                >
                  <div class="absolute-full flex flex-center">
                    <q-badge
                      color="transparent"
                      text-color="black"
                      :label="
                        (
                          (veiculo.value /
                            (poluicaoDados.terrestre.max /
                              poluicaoDados.terrestre.veiculos.length)) *
                          100
                        ).toFixed(2) + '%'
                      "
                    />
                  </div>
                </q-linear-progress>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <div class="divider"></div>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar icon="sailing" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              Poluição Marítima Total -
              {{
                poluicaoDados.maritmo.max * poluicaoDados.maritmo.porcentagem
              }}
              / {{ poluicaoDados.maritmo.max }}
              <q-linear-progress
                stripe
                rounded
                size="20px"
                :value="poluicaoDados.maritmo.porcentagem"
                :color="setProgessColor(poluicaoDados.maritmo.porcentagem)"
                class="q-mt-sm"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    color="transparent"
                    text-color="black"
                    :label="
                      (poluicaoDados.maritmo.porcentagem * 100).toFixed(2) + '%'
                    "
                  />
                </div>
              </q-linear-progress>
            </q-item-section>
          </template>
          <q-card>
            <q-card-section
              class="row"
              v-for="veiculo in poluicaoDados.maritmo.veiculos"
              :key="veiculo.id"
            >
              <div class="col-auto q-pr-sm text-center">
                <q-icon name="sailing" size="28px" /> <br />
                ID Veiculo:
                {{ veiculo.id }}
              </div>
              <div class="col row items-center justify-center">
                {{ veiculo.value }} /
                {{
                  poluicaoDados.maritmo.max /
                  poluicaoDados.maritmo.veiculos.length
                }}
                <q-linear-progress
                  stripe
                  rounded
                  size="20px"
                  :value="veiculo.porcentagem"
                  :color="setProgessColor(veiculo.porcentagem)"
                >
                  <div class="absolute-full flex flex-center">
                    <q-badge
                      color="transparent"
                      text-color="black"
                      :label="
                        (
                          (veiculo.value /
                            (poluicaoDados.maritmo.max /
                              poluicaoDados.maritmo.veiculos.length)) *
                          100
                        ).toFixed(2) + '%'
                      "
                    />
                  </div>
                </q-linear-progress>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <div class="divider"></div>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar icon="flight" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              Poluição Aérea Total -
              {{ poluicaoDados.aereo.max * poluicaoDados.aereo.porcentagem }}
              / {{ poluicaoDados.aereo.max }}
              <q-linear-progress
                stripe
                rounded
                size="20px"
                :value="poluicaoDados.aereo.porcentagem"
                :color="setProgessColor(poluicaoDados.aereo.porcentagem)"
                class="q-mt-sm"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    color="transparent"
                    text-color="black"
                    :label="
                      (poluicaoDados.aereo.porcentagem * 100).toFixed(2) + '%'
                    "
                  />
                </div>
              </q-linear-progress>
            </q-item-section>
          </template>
          <q-card>
            <q-card-section
              class="row"
              v-for="veiculo in poluicaoDados.aereo.veiculos"
              :key="veiculo.id"
            >
              <div class="col-auto q-pr-sm text-center">
                <q-icon name="flight" size="28px" /> <br />
                ID Veiculo:
                {{ veiculo.id }}
              </div>
              <div class="col row items-center justify-center">
                {{ veiculo.value }} /
                {{
                  poluicaoDados.aereo.max / poluicaoDados.aereo.veiculos.length
                }}
                <q-linear-progress
                  stripe
                  rounded
                  size="20px"
                  :value="veiculo.porcentagem"
                  :color="setProgessColor(veiculo.porcentagem)"
                >
                  <div class="absolute-full flex flex-center">
                    <q-badge
                      color="transparent"
                      text-color="black"
                      :label="
                        (
                          (veiculo.value /
                            (poluicaoDados.aereo.max /
                              poluicaoDados.aereo.veiculos.length)) *
                          100
                        ).toFixed(2) + '%'
                      "
                    />
                  </div>
                </q-linear-progress>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <div class="divider"></div>
      </q-list>
    </div>

    <div class="col-xs-12 col-md-auto">
      <h5 class="q-my-sm text-center">
        Denuncias Recebidas
        <!-- <q-btn push color="primary" icon="refresh" /> -->
      </h5>
      <div class="denuncia-container">
        <div class="q-py-xs" v-for="denuncia in denuncias" :key="denuncia.id">
          <div class="text-h6">{{ denuncia.titulo }}</div>
          <div class="text-subtitle2">
            {{ denuncia.endereco }} -
            {{ denuncia.nome_denunciante || "Anônimo" }}
          </div>
          <div class="text-body2">
            {{ denuncia.descricao }}
          </div>
          <hr />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GerenciamentoPoluicao",
  data() {
    return {
      poluicaoDados: {
        terrestre: {
          max: 3000,
          veiculos: [
            {
              id: 1,
              value: 320,
            },
            {
              id: 2,
              value: 980,
            },
            {
              id: 3,
              value: 110,
            },
          ],
        },
        maritmo: {
          max: 4500,
          veiculos: [
            {
              id: 1,
              value: 1600,
            },
            {
              id: 2,
              value: 2700,
            },
          ],
        },
        aereo: {
          max: 5000,
          veiculos: [
            {
              id: 1,
              value: 420,
            },
            {
              id: 2,
              value: 930,
            },
          ],
        },
      },
      denuncias: [
        {
          id: 8,
          anonima: 0,
          nome_denunciante: "Paulo Cerdeira",
          endereco_denunciante: "avenida das joias, 305, apto 17",
          contato_denunciante: "11 98484649",
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico.",
        },
        {
          id: 9,
          anonima: 1,
          nome_denunciante: null,
          endereco_denunciante: null,
          contato_denunciante: null,
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico anonimo",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico anonimo.",
        },
        {
          id: 8,
          anonima: 0,
          nome_denunciante: "Paulo Cerdeira",
          endereco_denunciante: "avenida das joias, 305, apto 17",
          contato_denunciante: "11 98484649",
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico.",
        },
        {
          id: 9,
          anonima: 1,
          nome_denunciante: null,
          endereco_denunciante: null,
          contato_denunciante: null,
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico anonimo",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico anonimo.",
        },
        {
          id: 8,
          anonima: 0,
          nome_denunciante: "Paulo Cerdeira",
          endereco_denunciante: "avenida das joias, 305, apto 17",
          contato_denunciante: "11 98484649",
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico.",
        },
        {
          id: 9,
          anonima: 1,
          nome_denunciante: null,
          endereco_denunciante: null,
          contato_denunciante: null,
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico anonimo",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico anonimo.",
        },
        {
          id: 8,
          anonima: 0,
          nome_denunciante: "Paulo Cerdeira",
          endereco_denunciante: "avenida das joias, 305, apto 17",
          contato_denunciante: "11 98484649",
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico.",
        },
        {
          id: 9,
          anonima: 1,
          nome_denunciante: null,
          endereco_denunciante: null,
          contato_denunciante: null,
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico anonimo",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico anonimo.",
        },
        {
          id: 8,
          anonima: 0,
          nome_denunciante: "Paulo Cerdeira",
          endereco_denunciante: "avenida das joias, 305, apto 17",
          contato_denunciante: "11 98484649",
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico.",
        },
        {
          id: 9,
          anonima: 1,
          nome_denunciante: null,
          endereco_denunciante: null,
          contato_denunciante: null,
          endereco: "rua brilhante, 3004",
          titulo: "Lixo Tóxico anonimo",
          descricao:
            "Neste local, foi jogado grandes quantidades de lixo toxico anonimo.",
        },
      ],
    };
  },
  async created() {
    // this.getDenuncias()
    // console.log(this.denuncias);
    this.getPoluicaoDados();
  },
  methods: {
    async getDenuncias() {
      this.denuncias = await this.$webService.get("/denuncia").data;
      console.log("denuncias buscadas: ", this.denuncias);
    },
    async getPoluicaoDados() {
      this.poluicaoDados.terrestre.porcentagem =
        this.poluicaoDados.terrestre.veiculos.reduce(
          (acc, veiculo) => (acc += veiculo.value),
          0
        ) / this.poluicaoDados.terrestre.max;

      for (let veiculo of this.poluicaoDados.terrestre.veiculos) {
        veiculo.porcentagem =
          veiculo.value /
          (this.poluicaoDados.terrestre.max /
            this.poluicaoDados.terrestre.veiculos.length);
      }

      this.poluicaoDados.maritmo.porcentagem =
        this.poluicaoDados.maritmo.veiculos.reduce(
          (acc, veiculo) => (acc += veiculo.value),
          0
        ) / this.poluicaoDados.maritmo.max;

      for (let veiculo of this.poluicaoDados.maritmo.veiculos) {
        veiculo.porcentagem =
          veiculo.value /
          (this.poluicaoDados.maritmo.max /
            this.poluicaoDados.maritmo.veiculos.length);
      }

      this.poluicaoDados.aereo.porcentagem =
        this.poluicaoDados.aereo.veiculos.reduce(
          (acc, veiculo) => (acc += veiculo.value),
          0
        ) / this.poluicaoDados.aereo.max;

      for (let veiculo of this.poluicaoDados.aereo.veiculos) {
        veiculo.porcentagem =
          veiculo.value /
          (this.poluicaoDados.aereo.max /
            this.poluicaoDados.aereo.veiculos.length);
      }

      console.log(this.poluicaoDados);
    },
    setProgessColor(porcentagem) {
      porcentagem = porcentagem * 100;
      if (porcentagem < 30) {
        return "positive";
      }
      if (porcentagem < 60) {
        return "warning";
      }
      if (porcentagem < 90) {
        return "orange";
      } else {
        return "red-5";
      }
    },
  },
});
</script>

<style>
.q-separator--horizontal {
  display: none !important;
}
</style>
<style scoped>
.denuncia-container {
  margin: 0px auto;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  min-height: 100px;
  max-height: 773px;
  overflow: auto;
  max-width: 450px;
}
.divider {
  height: 3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin: 0px 10px;
}
.controle {
  width: 100%;
  max-width: 450px;
  max-width: 100vw;
}
.controle-div {
  margin-right: 15px;
  width: 452px;
}
@media (max-width: 1146px) {
  .controle-div {
    margin-right: 0px;
    width: 100%;
  }
}
</style>
