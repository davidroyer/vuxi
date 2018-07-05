<template>
  <component
    class="v-button"
    :is="component"
    v-bind="$attrs"
    :type="type"
    :tabindex="0"
    role="button"
    v-on="$listeners">
    <span class="v-button-text">
      <slot/>
    </span>
  </component>
</template>

<script>
export default {
  name: "VButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button"
    }
  },
  computed: {
    component() {
      if (this.$attrs.to) {
        return "router-link";
      } else if (this.$attrs.href) {
        return "a";
      } else {
        return "button";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-button {
  display: flex;
  align-items: center;
  height: $size-large;
  font-family: $font-heading-family;
  font-size: 12px;
  text-transform: uppercase;
  border: $border-default;
  transition: 0.3s ease;

  &-button-text {
    transition: 0.3s ease;
  }
  .v-icon {
    color: inherit;

    &.left {
      margin-right: $size-xsmall;
    }

    &.right {
      margin-left: $size-xsmall;
    }
  }

  &.large {
    height: $size-xlarge;
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
    color: $color-white;
    background-color: $color-black;

    & .v-button-text {
      color: $color-white;
    }
  }

  &.disabled {
    cursor: not-allowed;
    color: $color-white;
    background: $color-black;
  }
}
</style>
