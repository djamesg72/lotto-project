import * as PIXI from "pixi.js";

class ParticleSystem {
  private app: PIXI.Application;
  private particles: PIXI.Container;
  private particleTexture: PIXI.Texture;

  constructor(app: PIXI.Application) {
    this.app = app;
    this.particles = new PIXI.Container();
    this.app.stage.addChild(this.particles);

    // Create a simple circle texture for particles
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xffffff);
    graphics.drawCircle(0, 0, 5);
    graphics.endFill();
    this.particleTexture = this.app.renderer.generateTexture(graphics);

    // Hide particle container initially
    this.particles.visible = false;
  }

  public trigger() {
    this.particles.visible = true;
    this.particles.position.set(app.screen.width / 2, app.screen.height / 2);

    for (let i = 0; i < 100; i++) {
      const particle = new PIXI.Sprite(this.particleTexture);
      particle.x = 0;
      particle.y = 0;
      particle.alpha = Math.random();
      particle.scale.set(0.5 + Math.random() * 0.5);
      this.app.ticker.add((delta) => this.updateParticle(particle, delta));
      this.particles.addChild(particle);
    }

    setTimeout(() => {
      this.particles.visible = false;
      this.particles.removeChildren();
    }, 2000); // Show particles for 2 seconds
  }

  private updateParticle(particle: PIXI.Sprite, delta: number) {
    particle.x += (Math.random() - 0.5) * 10 * delta;
    particle.y += (Math.random() - 0.5) * 10 * delta;
    particle.alpha -= 0.01 * delta;

    if (particle.alpha <= 0) {
      this.particles.removeChild(particle);
    }
  }
}

// Initialize PixiJS application
const canvas = document.getElementById(
  "winAnimationCanvas"
) as HTMLCanvasElement;
const app = new PIXI.Application({ view: canvas });
// Create particle system
export const particleSystem = new ParticleSystem(app);
