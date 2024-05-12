function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    background(0, 0, 0, 25); // Slight fade effect for twinkling stars
    drawStars(200); // Draw 200 stars
}

function drawStars(number) {
    for (let i = 0; i < number; i++) {
        const x = random(width);
        const y = random(height);
        const size = random(1, 3);
        const twinkle = random(100) > 98 ? random(150, 255) : random(120, 180);
        fill(twinkle);
        noStroke();
        ellipse(x, y, size, size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
