class Repeller {
    constructor(x, y, z) {
        this.position = createVector(x, y, z);
        this.power = 150;
        this.isPaused = false; 
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
        this.position.add(velocity);

        if (this.position.x > width) {
            this.position.x = -width /2;
            this.position.y = random(-height / 2, height / 2);
            this.position.z = random(-200, 200);
        }
    }

    show() {
        stroke(0);
        fill(127);
        push();
        translate(this.position.x, this.position.y, this.position.y);
        sphere(10);
        pop();
    }
}