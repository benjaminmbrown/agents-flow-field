var pursuer;
var evader;

var debug = true;
var flowfield;
var vehicles = [];


function setup() {

    createCanvas(640, 360);
    setFrameRate(40);
    flowfield = new Flowfield(20);

    for (var i = 0; i < 100; i++) {
        vehicles.push(new Vehicle(random(width), random(height), random(1, 7), random(0.1, 0.5), width,height));
    }
}

function draw() {
    background(255);
    var mouse=createVector(mouseX,mouseY);
    if (debug) { flowfield.display(); }
    for (var i = 0; i < vehicles.length; i++) {
        vehicles[i].followFlow(flowfield);
      vehicles[i].seek(mouse);
        vehicles[i].run();
    }
}

function keyPressed() {
	console.log(key);
    if (key == 'K') {
        debug != debug;
    }
    console.log(debug);
}

function mousePressed() {
    flowfield.init();
}
