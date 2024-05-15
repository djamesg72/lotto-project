<template>
  <div @click="hideDiv" v-if="isVisible" id="SplashScreenWrapper">
    <div class="vertical-split">
      <LottoBall :ballNo="ballNumbers[0]" :ballSize="ballSize"></LottoBall>
      <LottoBall :ballNo="ballNumbers[1]" :ballSize="ballSize"></LottoBall>
      <LottoBall :ballNo="ballNumbers[2]" :ballSize="ballSize"></LottoBall>
      <LottoBall :ballNo="ballNumbers[3]" :ballSize="ballSize"></LottoBall>
    </div>
    <div class="vertical-split">
      <div id="gameTitle"><span id="playButton">play</span><br />pick 1</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import gsap from "gsap";
import LottoBall from "@/components/LottoBall.vue";
export default defineComponent({
  name: "SplashScreen",
  components: {
    LottoBall,
  },
  data() {
    return {
      ballSize: this.calculateBallSize(),
      ballNumbers: [
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
      ],
      isVisible: true,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize); // Listen for window resize
    this.handleResize();
    gsap.from(".lotto-ball", {
      duration: 1,
      rotate: "-360deg",
      transform: "translateX(-50vw)",
      ease: "bounce",
    });
  },
  methods: {
    calculateBallSize() {
      return Math.min(
        Math.floor((25 * window.innerHeight) / 100),
        Math.floor((20 * window.innerWidth) / 100)
      );
    },
    handleResize() {
      this.ballSize = this.calculateBallSize(); // Update ballSize on window resize
    },
    hideDiv() {
      this.isVisible = false;
    },
  },
});
</script>
<style scoped lang="scss">
@keyframes splashScreenAnimation {
  0% {
    background-position-x: 0;
  }
  80% {
    background-position-x: 10vw;
  }
  100% {
    background-position-x: 10vw;
  }
}

#SplashScreenWrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-color: rgb(41, 117, 222);
  cursor: pointer;
  background-image: url(../assets/visual/ball.svg);
  background-size: 5vw;
  background-position-x: 0;
  background-position-y: 0.5vw;
  backdrop-filter: invert(1);
  animation: splashScreenAnimation 1s ease-in-out infinite;
}
.vertical-split {
  height: 40%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#gameTitle {
  font-size: 8vw;
  text-transform: capitalize;
  font-family: "Poetsen One";
  text-shadow: 5px 5px 5px black;
  transition: all 200ms ease-in-out;
}

#gameTitle:hover {
  scale: 1.2;
  color: gold;
}

#playButton {
  font-size: 5vw;
}
</style>
