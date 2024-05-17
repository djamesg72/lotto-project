<template>
  <LottoGame
    v-if="domContentLoaded"
    msg="Welcome to Your Vue.js + TypeScript App"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LottoGame from "./LottoGame.vue";

export default defineComponent({
  name: "App",
  components: {
    LottoGame,
  },
  data() {
    return {
      domContentLoaded: false,
    };
  },
  mounted() {
    // Listen for DOMContentLoaded event
    document.addEventListener("DOMContentLoaded", this.handleDOMContentLoaded);
  },
  methods: {
    handleDOMContentLoaded() {
      // Update domContentLoaded data property when DOMContentLoaded event occurs
      this.domContentLoaded = true;
    },
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap");
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";
:root {
  --gradient-intensity: 0%;
}

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

.canvas {
  aspect-ratio: unset;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  max-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: hsl(215, 73%, 45%);
  @include desktop {
    aspect-ratio: 16 / 9;
  }
  @include mobile {
    height: 100vh;
  }
  // margin-top: 60px;
}
</style>
