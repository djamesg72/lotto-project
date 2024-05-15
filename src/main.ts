import { createApp } from "vue";
import App from "./App.vue";
import data from "./statics/data";

createApp(App).mount("#app");

export class Game {
  constructor() {
    console.log(data.isBet);
    this.setBettingTimer();
  }

  private async setBettingTimer() {
    setTimeout(async () => {
      if (data.isBet) {
        const wonAmount = await this.startGameRound();
        if (wonAmount > 0) {
          await this.playWinAnimation(wonAmount);
        }
        this.setBettingTimer();
      }
    }, 15000);
  }

  private async startGameRound(): Promise<number> {
    const winningNumber = await this.playBallWithdrawAnimation();
    if (winningNumber == data.chosenNumber) {
      return data.betAmount * 2;
    } else {
      return 0;
    }
  }

  private async playBallWithdrawAnimation(): Promise<number> {
    const winningNumber = Math.floor(Math.random() * 10) + 1;
    const ball = document.querySelector(".ball") as HTMLElement;
    return winningNumber;
  }

  private async playWinAnimation(wonAmount: number) {
    const animation = document.querySelector(".animation");
  }
}

addEventListener("DOMContentLoaded", () => {
  const game = new Game();
});
