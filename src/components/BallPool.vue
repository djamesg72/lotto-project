<template>
  <div id="ballPoolWrapper">
    <div
      v-for="(item, index) in balls"
      :id="'ballOption' + index"
      class="ball-option"
      :key="index"
      @click="chooseBall(index)"
    >
      <LottoBall :ballNo="item" :ballColor="index" :ballSize="40"></LottoBall>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LottoBall from "./LottoBall.vue";
import data from "@/statics/data";

export default defineComponent({
  name: "BallPool",
  components: {
    LottoBall,
  },
  data() {
    return {
      balls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    chooseBall(index: number) {
      if (!data.betDisabled && !data.isBet) {
        data.chosenNumber = index + 1;
        document.querySelectorAll(".ball-option").forEach((option) => {
          option.classList.remove("active-ball");
        });
        document
          .getElementById("ballOption" + index)
          ?.classList.add("active-ball");
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";

#ballPoolWrapper {
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background-color: rgba(black, 0.3);
  transition: all 400ms ease;
  user-select: none;
  opacity: 1;
}

@include desktop {
  #ballPoolWrapper:hover > :not(:hover) {
    opacity: 0.6;
  }
}

.ball-option {
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.active-ball {
  border-radius: 50%;
  background-color: gold;
  box-shadow: 0px 0px 10px 10px gold;
  filter: saturate(2);
}
</style>
