import { createApp, ref } from "vue";
import App from "./App.vue";
import data from "./statics/data";
import gsap from "gsap";
import { ParticleSystem } from "./emitter";

// createApp(App).mount("#app");
const app = createApp(App).mount("#app");

export class Game {
  private particleSystem;
  constructor() {
    this.setBettingTimer();
    this.particleSystem = new ParticleSystem();
    // document
    //   .getElementById("winningNumberScene")
    //   ?.classList.remove("invisible");
    // this.particleSystem.trigger();
    // setTimeout(() => {
    //   this.playWinAnimation(2);
    // }, 2000);
  }

  private async setBettingTimer() {
    gsap.to("#timeLineFill", {
      duration: data.bettingInterval,
      width: "0%",
      ease: "slow(0.5,0.4,false)",
    });
    setTimeout(async () => {
      if (data.isBet && data.playerBalance > 0) {
        data.betDisabled = true;
        document.getElementById("betButton")?.classList.add("disabled");
        const wonAmount = await this.startGameRound();
        this.updateBalance();
        await this.delay(2500);
        gsap.to("#winningNumberBall", {
          duration: 0.5,
          rotate: "0deg",
          scale: 0,
          ease: "elastic.out(1,0.3)",
        });
        if (wonAmount > 0) {
          await this.playWinAnimation(wonAmount);
          this.updateBalance();
        } else {
          document
            .querySelector(".lose-dialogue")
            ?.classList.remove("invisible");
        }
        await this.delay(2000);
        this.ResetScene();
      } else {
        this.ResetScene();
      }
    }, data.bettingInterval * 1000);
  }

  private async startGameRound(): Promise<number> {
    const winningNumber = await this.playBallWithdrawAnimation();
    data.playerBalance -= data.betAmount;
    if (winningNumber == data.chosenNumber) {
      return data.betAmount * 2;
    } else {
      return 0;
    }
  }

  private async playBallWithdrawAnimation(): Promise<number> {
    const winningNumber = Math.floor(Math.random() * 10) + 1;
    gsap.to(":root", {
      duration: 5,
      "--gradient-intensity": "20%",
      repeat: -1,
      yoyo: true,
      ease: "elastic.out(1,0.3)",
    });

    Array.from(document.getElementById("winningNumberBall")!.children).forEach(
      (e) => {
        if (e.classList.contains("ball-number")) {
          e.innerHTML = winningNumber.toString();
        }
      }
    );
    gsap.to("#winningNumberBall", {
      duration: 2,
      rotate: "720deg",
      scale: 1,
      ease: "elastic.out(1,0.3)",
    });
    document
      .getElementById("winningNumberScene")
      ?.classList.remove("invisible");

    return winningNumber;
  }

  private ResetScene() {
    document.getElementById("winningNumberScene")?.classList.add("invisible");
    document.getElementById("timeLineFill")!.style.width = "100%";
    data.chosenNumber = 0;
    document.querySelectorAll(".ball-option").forEach((option) => {
      option.classList.remove("active-ball");
    });
    document.querySelector(".win-dialogue")?.classList.add("invisible");
    document.querySelector(".lose-dialogue")?.classList.add("invisible");
    data.isBet = false;
    document.getElementById("betButton")!.classList.remove("invisible");
    document.getElementById("cancelButton")!.classList.add("invisible");
    document.getElementById("betButton")?.classList.remove("disabled");
    data.betDisabled = false;
    this.setBettingTimer();
  }

  private async playWinAnimation(wonAmount: number) {
    data.playerBalance += wonAmount;
    document.getElementById("winningAmountSpan")!.innerHTML =
      wonAmount + data.currency;
    document
      .getElementById("winAnimationCanvas")
      ?.classList.remove("invisible");
    document.querySelector(".win-dialogue")?.classList.remove("invisible");
    this.particleSystem.trigger();
  }

  private updateBalance() {
    document.querySelector(".bb-amount")!.innerHTML =
      data.playerBalance + " " + data.currency;
  }

  // Utility function to wait for a specified number of milliseconds
  private async delay(ms: number | undefined) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
