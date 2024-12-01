let systems = [];
let repeller;

let g; // gravity

function setup() {
  createCanvas(720, 400);
  g = createVector(0, 0.05);
  repeller = new Repeller(0, height / 2);
}

function draw() {
  background(51);

  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    s.applyRepeller(repeller);
    s.run();
  }

  repeller.move(createVector(1, 0));
  repeller.show();
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);
  systems.push(system);
}