let systems = [];
let repeller;
let input, button, greeting;

let g; // gravity

function setup() {
  createCanvas(720, 400);
  g = createVector(0, 0.05);
  repeller = new Repeller(0, height / 2);
  
  input = createInput();
  input.position(20, 65);

  button = createButton('sss');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'whAt iS yOUr nAmE?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
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

  repeller.move(createVector(1, 0));
  repeller.show();
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);
  systems.push(system);
}