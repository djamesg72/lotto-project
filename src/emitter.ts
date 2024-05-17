import * as PIXI from "pixi.js";
import { BALLCOLORS } from "./statics/enums";

export class ParticleSystem {
  private app: PIXI.Application;
  private particles: PIXI.Container;
  private particleTextures: PIXI.Texture[] = [];

  constructor() {
    const canvas = document.createElement("canvas");
    canvas.id = "winAnimationCanvas";
    canvas.classList.add("canvas");
    const app = new PIXI.Application({
      transparent: true,
      autoStart: true,
      resolution: window.devicePixelRatio,
      view: canvas,
    });
    document.getElementById("winningNumberScene")?.appendChild(canvas);
    this.app = app;
    this.particles = new PIXI.Container();
    app.stage.addChild(this.particles);

    // Create a simple circle texture for particles
    for (let value of Object.values(BALLCOLORS)) {
      value = "0x" + value.substring(1).toLowerCase();
      const graphics = new PIXI.Graphics();
      graphics.beginFill(Number(value));
      graphics.drawCircle(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        10
      );
      graphics.endFill();
      this.particleTextures.push(this.app.renderer.generateTexture(graphics));
    }

    // Hide particle container initially
    this.particles.visible = false;
  }

  public trigger() {
    this.particles.visible = true;
    this.particles.position.set(
      this.app.screen.width / 2,
      this.app.screen.height / 2
    );

    for (let i = 0; i < 1000; i++) {
      const particle = new PIXI.Sprite(
        this.particleTextures[
          Math.floor(Math.random() * this.particleTextures.length)
        ]
      );
      particle.position.x = (Math.random() - 0.5) * 1000;
      particle.position.y = (Math.random() - 0.5) * 1000;
      particle.alpha = Math.pow(Math.random(), 4);
      particle.scale.set(0.5 + Math.random() * 0.5);
      this.app.ticker.add((delta) => this.updateParticle(particle, delta));
      this.particles.addChild(particle);
    }

    // setTimeout(() => {
    //   this.particles.visible = false;
    //   this.particles.removeChildren();
    // }, 2000); // Show particles for 2 seconds
  }

  private updateParticle(particle: PIXI.Sprite, delta: number) {
    let position = -1;
    particle.x += (Math.random() - 0.5) * 10 * delta;
    particle.y += (Math.random() - 0.5) * 10 * delta;
    particle.alpha -= position * 0.01 * delta;

    if (particle.alpha >= 1) {
      position = 1;
    }
    if (particle.alpha <= 0) {
      this.particles.removeChild(particle);
    }
  }
}
