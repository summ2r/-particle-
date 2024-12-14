class Attractor {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-1, 0), random(-1, 0));
        this.power = 150;
    }
    
    move(velocity) {
        this.position.add(this.velocity);

        if (this.position.x <= 0 || this.position.x >=width) {
            this.velocity.x *= -1;
        }
        if (this.position.y <= 0 || this.position.y >= height) {
            this.velocity.y *= -1;
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



    show() {
        stroke(0);
        fill(200, 0, 0);
        circle(this.position.x, this.position.y, 32);
    }
}