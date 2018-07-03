<template>
  <!-- <component :is="type"></component> -->
  <button
    v-if="!routerLink"
    class="v-button"
    v-on="$listeners"
  >
    <slot/>
  </button>
  <router-link 
  v-else
  :to="disabled ? '' : routeObject ? routeObject : routeUrl"
  tag="button"
  class="v-button"
  :class="[disabled ? 'disabled' : '']"
>
  <slot/>
</router-link>
</template>

<script>
export default {
  name: "VButton",
  props: {
    routeUrl: String,
    routeObject: Object,
    onClick: Function,
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.v-button {
  color: $red;
  border: 2px solid;

  @include respond-above(sm) {
    color: $blue;
  }

  @include respond-above(md) {
    color: $purple;
  }
}
</style>
