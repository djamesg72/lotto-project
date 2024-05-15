<template>
  <div class="lotto-game">
    <UserHud></UserHud>
    <SplashScreen></SplashScreen>
  </div>
</template>

<script lang="ts">
import gsap from "gsap";
import { defineComponent } from "vue";
import SplashScreen from "@/components/SplashScreen.vue";
import UserHud from "./components/UserHud.vue";
// import * as PIXI from "pixi.js";

// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });

export default defineComponent({
  name: "LottoGame",
  components: {
    SplashScreen,
    UserHud,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lotto-game {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  align-items: start;
  justify-content: center;
}
</style>
