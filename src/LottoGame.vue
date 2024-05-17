<template>
  <div class="lotto-game">
    <TimeLine></TimeLine>
    <GameAnimation></GameAnimation>
    <BallPool></BallPool>
    <UserHud></UserHud>
    <SplashScreen></SplashScreen>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SplashScreen from "@/components/SplashScreen.vue";
import UserHud from "@/components/UserHud.vue";
import BallPool from "@/components/BallPool.vue";
import TimeLine from "@/components/TimeLine.vue";
import GameAnimation from "@/components/GameAnimation.vue";
// import * as PIXI from "pixi.js";

export default defineComponent({
  name: "LottoGame",
  components: {
    SplashScreen,
    UserHud,
    BallPool,
    TimeLine,
    GameAnimation,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lotto-game {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: end;
}
</style>
