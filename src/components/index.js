// import Vue from "vue";

import VButton from "./VButton.vue";
import VInput from "./VInput.vue";

const Components = {
  VButton,
  VInput
};

const Vuxi = {
  // eslint-disable-next-line
  install: function(Vue, options) {
    Object.keys(Components).forEach(name => {
      Vue.component(name, Components[name]);
    });
  }
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(Vuxi);
}

export default Vuxi;
