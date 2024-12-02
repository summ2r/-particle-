// A simple Particle class

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.position = position.copy();
        this.lifespan = 200;
        this.w = 2;
        this.isPaused = false;
    }

    run() {
        this.update();
        this.display();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        if(!this.isPaused) {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        }
        this.lifespan -= 2;
        this.acceleration.set(0, 0);
    }

    display() {
        stroke(200, this.lifespan);
        strokeWeight(2);
        fill(0);
        rect(this.position.x, this.position.y, this.w/4, this.w*100);
    }

    isDead() {
        return this.lifespan < 0;
    }

    togglePause() {
        this.isPaused = !this.isPaused;
    }
}

