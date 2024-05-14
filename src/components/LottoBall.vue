<template>
  <div
    :style="{
      '--ball-size': ballSize + 'px',
      'background-color': ballColors[Math.floor(Math.random() * 6)],
    }"
    class="lotto-ball"
  >
    <div class="inner-ball border-1"></div>
    <div class="inner-ball border-2"></div>
    <div class="inner-ball border-3"></div>
    <div class="inner-ball border-4"></div>
    <div class="inner-ball border-5"></div>
    <div class="ball-number">{{ ballNo }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import * as PIXI from "pixi.js";

export default defineComponent({
  name: "LottoBall",
  props: {
    ballNo: {
      type: Number,
      required: true, // Ensure ballNo is required
    },
    ballSize: Number,
  },
  data() {
    return {
      ballColors: ["red", "purple", "green", "orange", "blue", "gold"],
    };
  },
});
</script>

<style scoped lang="scss">
.lotto-ball {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  aspect-ratio: 1 / 1;
  height: var(--ball-size);
  width: var(--ball-size);
  border-radius: 50%;
  transform: translateX(0);
  rotate: 0;
  margin-left: calc(var(--ball-size) / -12);
  margin-right: calc(var(--ball-size) / -12);
  position: relative;
  overflow: hidden;
  border: calc(var(--ball-size) / 100) solid white;
  box-shadow: inset calc(var(--ball-size) / 10) calc(var(--ball-size) / 7)
    calc(var(--ball-size) / 5) rgba(255, 255, 255, 0.3);
}

.inner-ball {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 40%;
  width: 40%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: solid calc(var(--ball-size) / 30) white;
}
.border-1 {
  height: 50%;
  width: 50%;
}
.border-2 {
  top: 110%;
  left: 50%;
}
.border-3 {
  top: 50%;
  left: 110%;
}
.border-4 {
  top: 50%;
  left: -10%;
}
.border-5 {
  top: -10%;
  left: 50%;
}

.ball-number {
  text-align: center;
  font-family: "Poetsen One";
  font-size: calc(var(--ball-size) / 3);
}
</style>
