<template>
  <div class="user-hud-wrapper">
    <div id="betBalanceWrapper">
      <div class="bb-wrapper" id="balanceAmount">
        <div class="bb-title">Balance:</div>
        {{ balanceAmount + " " + betCurrency }}
      </div>
      <div class="bb-wrapper" id="betAmount">
        <div class="bb-title">Bet:</div>
        {{ betAmount + " " + betCurrency }}
      </div>
    </div>
    <div v-if="!isBet" @click="toggleBet" class="play-button" id="betButton">
      Place Bet
    </div>
    <div v-else @click="toggleBet" class="play-button" id="cancelButton">
      Cancel Bet
    </div>
    <div
      v-if="!soundOn"
      @click="toggleSound"
      class="sound-button"
      id="soundIsOff"
    ></div>
    <div v-else @click="toggleSound" class="sound-button" id="soundIsOn"></div>
  </div>
</template>

<script lang="ts">
import data from "@/statics/data";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserHud",
  data() {
    return {
      isBet: data.isBet,
      soundOn: false,
      betAmount: 1,
      balanceAmount: 3,
      betCurrency: "EUR",
    };
  },
  methods: {
    toggleBet() {
      data.isBet = !data.isBet;
      this.isBet = data.isBet;
      console.log(data.isBet);
    },
    toggleSound() {
      data.soundOn = !data.soundOn;
      this.soundOn = !this.soundOn;
    },
  },
});
</script>

<style scoped lang="scss">
.user-hud-wrapper {
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  box-shadow: 0 -5px 2px rgba($color: black, $alpha: 0.5);
  font-family: "Poetsen One";
}

.play-button {
  height: 30px;
  width: fit-content;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  color: white;
  font-size: 20px;
  transition: all 200ms ease-in-out;
}
#betButton {
  background-color: rgba($color: gold, $alpha: 0.5);
}
#betButton:hover {
  background-color: gold;
  color: black;
}

#cancelButton {
  background-color: rgba($color: red, $alpha: 0.5);
}
#cancelButton:hover {
  background-color: red;
  color: black;
}

#betBalanceWrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-align: center;
  width: fit-content;
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  padding-left: 2px;
  user-select: none;
  cursor: default;
}

.bb-wrapper {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.bb-title {
  font-size: 20px;
  width: 90px;
  height: 25px;
  background-color: white;
  color: black;
  margin-right: 10px;
  margin-left: 0;
  padding: 0;
}

#betAmount {
  color: white;
}
#balanceAmount {
  color: greenyellow;
}

.sound-button {
  width: 50px;
  height: 50px;
  background-size: contain;
  cursor: pointer;
  background-repeat: no-repeat;
}

#soundIsOff {
  background-image: url(../assets/visual/sound-on.svg);
}

#soundIsOn {
  background-image: url(../assets/visual/sound-off.svg);
}
</style>
