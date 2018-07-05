<template>
  <button
    class="v-menu-button"
    :class="{'v-menu-button--checked':menuIsActive}"
    v-on="$listeners">
    <span><slot>Menu</slot></span>
  </button>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menuIsActive() {
      return this.checked;
    }
  }
};
</script>

<style lang='scss'>
$menu-button-color: #666;
.v-menu-button {
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  width: 2rem;
  height: 1.75rem;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
  z-index: 99999;
}
button.v-menu-button > span,
button.v-menu-button:after,
button.v-menu-button:before {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  padding: 0;
  margin: 0;
  background: $menu-button-color;
}
button.v-menu-button:after,
button.v-menu-button:before {
  top: 50%;
  content: "";
  pointer-events: none;
  transition: transform 0.25s;
  transform-origin: 50% 50%;
}
button.v-menu-button:before {
  transform: translate3d(0, -10px, 0);
}
button.v-menu-button:after {
  transform: translate3d(0, 10px, 0);
}
button.v-menu-button > span {
  overflow: hidden;
  text-indent: 200%;
  color: rgba(0, 0, 0, 0);
  transition: opacity 0.25s;
}
button.v-menu-button--checked:before {
  transform: rotate3d(0, 0, 1, 45deg);
}
button.v-menu-button--checked:after {
  transform: rotate3d(0, 0, 1, -45deg);
}
button.v-menu-button--checked > span {
  opacity: 0;
}
</style>
