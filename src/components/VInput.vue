<template>
  <div class="v-input-wrapper">
    <!-- 
    Bind the parent's id attribute to the label's "for" attribute. 
    The id attribute from the parent will be added to the input,
    ensuring that the label specifies which input it is bound to.
    -->
    <label
      v-if="label"
      class="v-input-label"
      :for="$attrs.id"
    >
      {{ label }}
    </label>
    <!-- 
    Bind attributes from parent to the input using v-bind="$attr", 
    e.g. <v-input placerholder="Email"> will set the input's 
    placeholder property to "Email".

    v-on="listeners" ensures that all native events from the input
    propagate to the parent, allowing native events to be called
    from the parent, e.g. <v-input @focus="focusEvent" />
    -->
    <input
      class="v-input"
      :class="[fullWidth ? 'full-width' : '']"
      v-bind="$attrs"
      v-on="listeners"
      :value="value"
    >
  </div>
</template>

<script>
export default {
  name: "VInput",
  inheritAttrs: false,
  props: {
    value: String,
    label: String,
    fullWidth: Boolean
  },
  computed: {
    /*
    The "listeners()" computed property is responsible
    for emitting all events from an inner element to the parent.
    The input method ensures that v-model works with the parent.
    */
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.v-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.v-input-label {
  margin-bottom: $size-xsmall;
  font-family: $font-heading-family;
  font-size: 14px;
}

.v-input {
  height: $size-xlarge;
  width: 100%;
  max-width: 200px;
  margin-bottom: $size-xsmall;
  padding: 0 $size-xsmall;
  font-size: 14px;
  border: $border-default;

  &.full-width {
    max-width: 100%;
  }
}
</style>
