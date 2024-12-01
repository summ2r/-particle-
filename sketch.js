let systems = [];
let repeller;

let g; // gravity
// let wind;

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  // wind = createVector(0.03, -0.01);
  repeller = new Repeller(0, height / 2);
}

function draw() {
  background(51);

  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    // s.applyForce(wind);
    s.applyRepeller(repeller);
    s.run();
  }


  repeller.move1(createVector(1, 0));
  repeller.move2(createVector(0, 1));

  repeller.show();
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);
  systems.push(system);
}