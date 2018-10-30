// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY

const canvasBreite = 750;
const canvasHoehe = 750;

let myFont;
function preload() {
	myFont = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
	createCanvas(canvasBreite, canvasHoehe);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	translate(canvasBreite / 2, canvasHoehe / 2);
	rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();

	strokeWeight(8);
	stroke(255, 100, 150);
	noFill();
	let secondAngle = map(sc, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, secondAngle);

	stroke(150, 100, 255);
	let minuteAngle = map(mn, 0, 60, 0, 360);
	arc(0, 0, 280, 280, 0, minuteAngle);

	stroke(150, 255, 100);
	let hourAngle = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 260, 260, 0, hourAngle);

	push();
	rotate(secondAngle);
	stroke(255, 100, 150);
	line(0, 0, 100, 0);
	pop();

	push();
	rotate(minuteAngle);
	stroke(150, 100, 255);
	line(0, 0, 75, 0);
	pop();

	push();
	rotate(hourAngle);
	stroke(150, 255, 100);
	line(0, 0, 50, 0);
	pop();

	stroke(255);
	point(0, 0);

	rotate(90);

	noStroke();
	fill(255);
	textSize(height/10);
	textAlign(CENTER);
	textFont(myFont);

	// Wenn Werte < 10 dann eine '0' davor
	if (hr < 10) {
		hr = '0' + hr;
	}
	if (mn < 10) {
		mn = '0' + mn;
	}
	if (sc < 10) {
		sc = '0' + sc;
	}
	text(hr + ':' + mn + ':' + sc, 0, canvasHoehe / 2.3);
}
