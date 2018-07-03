<template>
  <div id="app">
    <v-button @click="handleClick">Test Button 1</v-button>
    <v-button @click="handleClick">Test Button 2</v-button>
    <v-button href="https://davidroyer.me" target="_blank" rel="noreferrer">External Link</v-button>
    <v-input id="input1" label="My Input"></v-input>
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
