<template>
  <div class="hello"></div>
  <SplashScreen></SplashScreen>
</template>

<script lang="ts">
import gsap from "gsap";
import { defineComponent } from "vue";
import SplashScreen from "@/components/SplashScreen.vue";
// import * as PIXI from "pixi.js";

// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });

export default defineComponent({
  name: "LottoGame",
  components: {
    SplashScreen,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
template {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
