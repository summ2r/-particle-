class Repeller {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(0, 1), random(0, 1));
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

    repel(particle) {
        let force = p5.Vector.sub(this.position, particle.position);

        let distance = force.mag();
        distance = constrain(distance, 5, 50);
      
        let strength = 1 * this.power / (distance * distance);
    
        force.setMag(strength);
        return force;
    }



    show() {
        stroke(0);
        fill(127);
        circle(this.position.x, this.position.y, 32);
    }
}