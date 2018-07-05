import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const VuxiComponents = require.context("./", true, /.vue$/);

const Vuxi = {
  // eslint-disable-next-line
  install: function(Vue, options) {
    VuxiComponents.keys().forEach(fileName => {
      const componentConfig = VuxiComponents(fileName);
      // PascalCase name without file extension
      const componentName = upperFirst(
        camelCase(fileName.replace(/\.\w+$/, ""))
      );
      // Globally register the component
      Vue.component(componentName, componentConfig.default || componentConfig);
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
