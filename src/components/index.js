import Vue from "vue";

// import eventBus from '@/helpers/eventBus';
import VButton from "./VButton.vue";
import VInput from "./VInput.vue";

// function triggerGlobalClick(e) {
//   e.stopPropagation();
//   eventBus.$emit('focusChanged', this);
// }
// document.addEventListener('click', triggerGlobalClick);
//
// Vue.mixin({
//   mounted() {
//     this.$el.addEventListener('click', triggerGlobalClick);
//   },
//   beforeDestroy() {
//     this.$el.removeEventListener('click', triggerGlobalClick);
//   },
// });

const Components = {
  VButton,
  VInput
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
// export { eventBus };
