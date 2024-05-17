<template>
  <div id="gameScene">
    <div id="go-drum">
      <div id="ballContainer">
        <div v-for="n in 20" class="drum-ball" :key="n"></div>
      </div>
      <div class="go-line left"></div>
      <div class="go-line right"></div>
      <div class="go-line inner"></div>
      <div class="go-line inner v"></div>
    </div>
    <div id="winningNumberScene" class="invisible">
      <LottoBall
        :ballColor="Math.floor(Math.random() * 7)"
        :ballNo="0"
        :ballSize="100"
        id="winningNumberBall"
      ></LottoBall>
      <canvas
        id="winAnimationCanvas"
        class="invisible"
        ref="canvas"
        style="background: transparent"
      ></canvas>
      <div class="win-dialogue invisible">
        Congratulations<br />You Won<br /><span id="winningAmountSpan"></span>
      </div>
      <div class="lose-dialogue invisible">Try Again</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LottoBall from "./LottoBall.vue";
import gsap from "gsap";

export default defineComponent({
  name: "GameAnimation",
  components: {
    LottoBall,
  },
  mounted() {
    const balls = document.querySelectorAll(
      ".drum-ball"
    ) as unknown as HTMLDivElement[];
    const container = document.getElementById("ballContainer");

    const containerRect = container!.getBoundingClientRect();

    balls.forEach((ball) => {
      const ballRect = ball!.getBoundingClientRect();

      const maxX = containerRect.width - ballRect.width;
      const maxY = containerRect.height - ballRect.height;

      let posX = Math.random() * maxX;
      let posY = Math.random() * maxY;

      let velocityX = (Math.random() - 0.5) * 15;
      let velocityY = (Math.random() - 0.5) * 15;

      function update() {
        posX += velocityX;
        posY += velocityY;

        if (posX <= 0 || posX >= maxX) {
          velocityX *= -1;
        }

        if (posY <= 0 || posY >= maxY) {
          velocityY *= -1;
        }

        ball!.style.left = `${posX}px`;
        ball!.style.top = `${posY}px`;
        requestAnimationFrame(update);
      }
      update();
    });
  },
});
</script>
<style scoped lang="scss">
@keyframes rotateDrum {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 90deg;
  }
}

#gameScene {
  width: 100%;
  height: calc(100% - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(180deg, rgba(white, 0.3) 0%, rgba(white, 0) 100%);
}
#go-drum {
  position: relative;
  height: 50%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 10px solid black;
  background: linear-gradient(180deg, rgba(white, 0.3) 0%, rgba(white, 0) 100%);
}

#ballContainer {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.drum-ball {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(#ff5722, 0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.go-line {
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: black;
  bottom: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
}
.left {
  rotate: -45deg;
  right: -10px;
  bottom: calc(50% - 20px);
}
.right {
  rotate: -135deg;
  left: 0px;
}
.inner {
  transform: translate(0%, 0%);
  width: 100%;
  top: 48.5%;
  left: 0%;
  height: 5px;
  z-index: 0;
  background-color: rgba(black, 0.6);
  animation: rotateDrum 1.5s ease-in-out infinite;
}

.v {
  transform: rotate(90deg);
}

#winningNumberScene {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(
    circle,
    #ffde00 var(--gradient-intensity),
    rgb(232, 247, 255) calc(var(--gradient-intensity) * 2),
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#winningNumberBall {
  scale: 0;
}

#winAnimationCanvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.win-dialogue {
  font-family: "Poetsen One";
  font-size: 30px;
  color: black;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.lose-dialogue {
  font-family: "Poetsen One";
  font-size: 30px;
  color: black;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.invisible {
  display: none !important;
}
</style>
