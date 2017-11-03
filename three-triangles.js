var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

triangle(230,160,50);
triangle(270,100,50);
triangle(200,50,150);

function triangle (x, y, size) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x - Math.round(size / 2), y + size);
    context.lineTo(x + Math.round(size / 2), y + size);
    context.lineTo(x, y);
    context.strokeStyle = "#A38F6B";
    context.stroke();
    context.fillStyle = 'rgba(255, 160, 0, 0.5)';
    context.fill();
}