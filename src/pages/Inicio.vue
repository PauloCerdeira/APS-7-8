<template>
  <q-page class="q-py-md q-px-sm text-center">
    <h3>Paginas Disponíveis</h3>
    <div class="row justify-center">
      <div
        v-for="element in linksList"
        :key="element.title"
        class="custom-big-btn text-white"
        @click="$router.push(element.link.replace('#', ''))"
      >
        <div class="text-h5">
          <q-icon :name="element.icon" /> {{ element.title }}
        </div>
        <div class="text-caption">
          {{ element.caption }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import linksList from "src/utils/linksList";

export default defineComponent({
  name: "InicioTempo",
  data() {
    return {
      linksList: linksList.filter((e) => e.title != "Inicio"),
    };
  },
  async created() {},
  methods: {},
});
</script>

<style scoped>
.custom-big-btn {
  transition: transform 200ms;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 15px;
  margin-top: 0px;
  min-height: 100px;
  max-height: 150px;
  background-color: #1976d2;
  border-radius: 8px;
  padding: 15px;
  width: 100vw;
  max-width: 400px;
  cursor: pointer;
}

.custom-big-btn:hover {
  transform: scale(1.05);
}

.custom-big-btn:active {
  opacity: 0.7;
}
</style>
