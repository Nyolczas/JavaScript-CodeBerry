var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var boxSize = 70;
var startMargin = 20;
var margin = 5;

context.fillStyle = 'rgba(255, 160, 0, 0.5)';

for (h = 0; h < 5; h++) {
    for (v = 0; v <= h; v++) {
        context.fillRect(startMargin + (margin * v) + (boxSize * v),
        startMargin + (margin * h) + (boxSize * h), boxSize, boxSize);
    }
}