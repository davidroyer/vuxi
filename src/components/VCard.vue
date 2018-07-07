<template>
  <div class="v-card">
    <div class="v-card-header">
      <!-- Use this slot to for the card header -->
      <slot name="header"></slot>
    </div>
    <div class="v-card-body">
      <!-- Use this slot to for the card body, which is the middle area  -->
      <slot name="body"></slot>
    </div>
    <div class="v-card-footer">
      <!-- Use this slot to for the card footer -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VCard"
};
</script>

<style lang="scss">
.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid $grey;

  &-header {
    flex: 1;
  }

  &-body {
    flex: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
