var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cnw = ctx.canvas.clientWidth;
var cnh = ctx.canvas.clientHeight;

var bxw = 100;
var bxw2 = Math.round(bxw * 0.5);
var bxh = Math.sin(60 * Math.PI / 180) * bxw;
var trA = [
    [1, bxw, 'rgb(227, 98, 102)', bxw, bxh],
    [2, bxw2, 'rgb(38, 173, 73)', 0, bxh],
    [3, 0, 'rgb(34, 129, 128)', bxw2, 0]
];
var xShft = Math.round((cnw - bxw * 3) / 2);
var yShft = Math.round((cnh - bxh * 3) / 2);

for (var h = 0; h < 3; h++) {
    ctx.fillStyle = trA[h][2];
    for (var w = 0; w < trA[h][0]; w++) {
        triangle(xShft + trA[h][1] + (bxw * w),
        Math.round(yShft + (h * bxh)),
        trA[h][2]);
    }
}

function triangle(x,y,clr) {
    ctx.beginPath();
    ctx.moveTo(x + bxw2, y);
    for (i = 0; i < 3; i++) {
        ctx.lineTo(x + trA[i][3], y + trA[i][4]);
    }
    ctx.fillStyle = clr;
    ctx.fill();
}