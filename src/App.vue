<template>
  <div id="app">
    <v-card>
      <div slot="header">Card Header</div>
      <div slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eius corrupti a sint recusandae neque dolorum distinctio cupiditate. Unde non, odit praesentium odio, voluptate laboriosam eos quod vero ipsa nemo.</div>
      <div slot="footer">Card Footer</div>
    </v-card>
    <v-menu-button @click="mobileMenuActive = !mobileMenuActive" :checked="mobileMenuActive"></v-menu-button>
    <v-button @click="handleClick">Test Button 1</v-button>
    <v-button @click="handleClick">Test Button 2</v-button>
    <v-button @click="setFocus">Set Focus</v-button>
    <v-button href="https://davidroyer.me" target="_blank" rel="noreferrer">External Link</v-button>
    <v-input ref="input1" @focus="handleFocus" id="input1" label="My Input"></v-input>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: () => ({
    mobileMenuActive: false
  }),

  methods: {
    handleClick() {
      alert("worked!@");
    },
    handleFocus() {
      // alert("Focus was set");
    },
    setFocus() {
      // alert(this.$refs.input1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
