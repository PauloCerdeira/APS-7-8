import { boot } from "quasar/wrappers";
import axios from "axios";

const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org",
});

const webService = axios.create({
  baseURL: "http://localhost:3000",
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$openWeatherApi = openWeatherApi;
  app.config.globalProperties.$webService = webService;
});

export { openWeatherApi };
