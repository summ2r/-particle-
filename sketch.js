let systems = [];
let repeller;

let g; // gravity
let wind;

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  wind = createVector(0.03, -0.01);
  repeller = new Repeller(width / 2 -29, height / 2);
}

function draw() {
  background(51);

  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    s.applyForce(wind);
    s.applyRepeller(repeller);
    s.run();
  }

  repeller.show();
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);
  systems.push(system);
}