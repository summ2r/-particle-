let systems = [];
let repeller;
let positions = [];
let rotations = [];
let scales = [];

let g; // gravity

function setup() {
  createCanvas(720, 400, WEBGL);
  for (let i = 0; i < 10; i++) {
    positions.push(createVector(
      random(-width / 2, width / 2),
      random(-height / 2, height / 2),
      random(-width / 2, width / 2)
    ));
    rotations.push(createVector(
      random(TWO_PI),
      random(TWO_PI),
      random(TWO_PI)
    ));
    scales.push(random(0.5, 2));
  }
  g = createVector(0, -0.02, 0);
  repeller = new Repeller(0, height / 2, width / 2);
}

function draw() {
  background(255);
  orbitControl();
  noStroke();
  lights();

  for (let i = 0; i < 10; i += 1) {
    push();
    translate(
      positions[i].x,
      positions[i].y,
      positions[i].z
    );
    rotateX(rotations[i].x);
    rotateY(rotations[i].y);
    rotateZ(rotations[i].z);
    scale(scales[i]);
    box(20);
    pop();
  }

  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    s.applyRepeller(repeller);
    s.run();
  }

  repeller.move(createVector(1, 0, 0));
  repeller.show();
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY, mouseZ);
  let system = new ParticleSystem(mPos);
  systems.push(system);
}

function keyPressed() {
  if (keyCode === 13) { //enter
    for (let s of systems) {
      s.togglePause();
    }
  }
}