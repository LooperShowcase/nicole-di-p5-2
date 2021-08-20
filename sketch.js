function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function preload() {
  img = loadImage("dog.png");
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("#f3e9dc");

  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  stroke("#fbc3bc");
  strokeWeight(12);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  rotate(secondAngle);
  stroke("#fbc3bc");
  line(0, 0, 80, 0);
  pop();

  let minuteAngle = map(mn, 0, 60, 0, 360);
  stroke("#f7a399");
  strokeWeight(12);
  arc(0, 0, 250, 250, 0, minuteAngle);

  push();
  rotate(minuteAngle);
  stroke("#f7a399");
  line(0, 0, 60, 0);
  pop();

  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  stroke("#f38375");
  strokeWeight(12);
  arc(0, 0, 200, 200, 0, hourAngle);

  push();
  rotate(hourAngle);
  stroke("#f38375");
  line(0, 0, 40, 0);
  pop();

  stroke("#aea3b0");
  point(0, 0);

  rotate(90);
  image(img, -20, -25, 40, 40);
}
