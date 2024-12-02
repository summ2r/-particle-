class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
        this.isPaused = false;
    }

    addParticle() {
        this.particles.push(new Particle(this.origin));
    }

    applyGravity(g) {
        this.applyForce(g);
    }

    applyForce(force) {
        for (let p of this.particles) {
            p.applyForce(force);
        }
    }

    applyRepeller(repeller) {
        for (let particle of this.particles) {
            let force = repeller.repel(particle);
            particle.applyForce(force);
        }
    }

    run() {
        for (let i = this.particles.length-1; i >= 0; i--) {
            let p = this.particles[i];
            if (!this.isPaused) {
               p.run();
            }
            if (p.isDead()) {
              this.particles.splice(i, 1);
            }
          }
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        console.log("Paused:", this.isPaused)
    }
}