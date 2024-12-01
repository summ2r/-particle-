class Repeller {
    constructor(x, y) {
        // this.position = createVector(x, y);
        this.power = 150;
        this.velocity = createVector(random(-2, 2), random(-2, 2));
        this.position = this.rWallPos();
    }

    rWallPos() {
        let side = floor(random(4));

        if (side === 0) {
            return createVector(random(width), 0);
        } else if (side === 1) {
            return createVector(random(width), height);
        } else if (side === 2) {
            return createVector(0, random(height));
        } else {
            return createVector(width, random(height));
        }
    }

    // All the same steps to calculate an attractive force, only pointing in the opposite direction
     repel(particle) {
        // Step 1: Get the force direction.
        let force = p5.Vector.sub(this.position, particle.position);

        // Step 2: Get and constrain the distance.
        let distance = force.mag();
        distance = constrain(distance, 5, 50);
      
        // Step 3: Calculate the magnitude, using a power variable for G.
        let strength = 1 * this.power / (distance * distance);
    
        // Step 4: Make a vector out of the direction and magnitude.
        force.setMag(strength);
        return force;
    }

    move(velocity) {
        this.position.add(this.velocity);

        if (this.position.x <= 0 || this.position.x >= width) {
            this.velocity.x *= -1;  // x방향 반전
        }
        if (this.position.y <= 0 || this.position.y >= height) {
            this.velocity.y *= -1;  // y방향 반전
        }
    }

    show() {
        stroke(0);
        fill(127);
        circle(this.position.x, this.position.y, 32);
    }
}