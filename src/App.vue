<template>
  <LottoGame msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LottoGame from "./LottoGame.vue";

export default defineComponent({
  name: "App",
  components: {
    LottoGame,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap");

.poetsen-one-regular {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

body {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  max-height: 100vh;
  aspect-ratio: 16 / 9;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rebeccapurple;
  // margin-top: 60px;
}
</style>
