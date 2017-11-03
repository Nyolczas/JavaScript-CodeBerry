var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var sizeWidth = context.canvas.clientWidth;
var sizeHeight = context.canvas.clientHeight;

var horizon = Math.round(sizeHeight / 2);
var halfWidth = Math.round(sizeWidth / 2);

var cnt = 0;

while (cnt <= sizeWidth) {
    drawLines(cnt);
    cnt += 3;
}

function drawLines(i) {
    var y;
    if (i % 2 == 0) {
        y = 0;
    } else {
        y = sizeHeight;
    }
    context.strokeStyle = "#FF5500";
    context.beginPath();
    context.moveTo(i, horizon);
    context.lineTo(halfWidth,y);
    context.stroke();
}