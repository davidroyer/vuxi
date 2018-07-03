<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-button @click="handleClick">Test Button</v-button>
    <v-input label="My Input"></v-input>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    handleClick() {
      alert("worked!@");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
