var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = context.canvas.clientWidth;
var canvasHeight = context.canvas.clientHeight;

function lineToCenter(x, y, color) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(Math.round(canvasWidth / 2), Math.round(canvasHeight / 2));
    context.strokeStyle = color;
    context.stroke();
}

var random = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 100 ismétlés helyett 1000-t használtam, mert így kapjuk meg a "minta képet"
for (var i = 0; i < 1000; i++) {
    lineToCenter(random(canvasWidth, 1),random(canvasHeight, 1),'#008281')
}

