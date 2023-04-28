<template>
  <q-page class="q-py-md q-px-sm">
    <q-linear-progress
      stripe
      rounded
      size="20px"
      :value="0.5"
      color="red"
      class="q-mt-sm"
    >
      <div class="absolute-full flex flex-center">
        <q-badge color="red" text-color="white" :label="0.5 * 100 + '%'" />
      </div>
    </q-linear-progress>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GerenciamentoPoluicao",
  data() {
    return {};
  },
  async created() {},
  methods: {},
});
</script>

<style scoped></style>
