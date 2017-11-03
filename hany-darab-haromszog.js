var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var cw = context.canvas.clientWidth;
var ch = context.canvas.clientHeight;

var horizon = Math.round(ch / 2);

context.strokeStyle = "#007FFF";

for (var i = 1; i < cw; i++) {
    var x;
    var y;
    if (i % 4 == 0) {
        x = 0;
        y = 0;
    } else if (i % 4 == 1) {
        x = cw;
        y = 0;
    } else if (i % 4 == 2) {
        x = 0;
        y = ch;
    } else {
        x = cw;
        y = ch;
    }
    context.beginPath();
    context.moveTo(i, horizon);
    context.lineTo(x,y);
    context.stroke();
}