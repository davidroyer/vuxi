import Vue from "vue";
import App from "./App.vue";
import Vuxi from "./components";
import "./assets/styles/app.scss";

Vue.use(Vuxi);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
