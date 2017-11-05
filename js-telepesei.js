var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = context.canvas.clientWidth;
var canvasHeight = context.canvas.clientHeight;

var cellWidth = 100;
var cellHeight = Math.sin(60 * Math.PI / 180) * Math.round(cellWidth);
var margin = 10;
var xShft = Math.round(((canvasWidth - cellWidth * 2.5) / 2) + margin * 0.5);
var yShft = Math.round(((canvasHeight - cellHeight * 3) / 2) + margin * 0.5);
var clrNull = '#F7F7F7';
var clrFill = '#FFA100';

function drawHexagon(x, y, fill) {
    var hexaPoints = [
        [0.75, 0],
        [1, 0.5],
        [0.75, 1],
        [0.25, 1],
        [0, 0.5],
        [0.25, 0]
    ];
    context.beginPath();
    context.moveTo(x + Math.round((cellWidth - margin) * 0.25), y);
    for (var i = 0; i < 6; i++) {
        context.lineTo(x + Math.round((cellWidth - margin) * hexaPoints[i][0]),
            y + Math.round((cellHeight - margin) * hexaPoints[i][1]));
    }
    context.strokeStyle = clrFill;
    context.stroke();
    context.fillStyle = fill;
    context.fill();
}

drawHexagon(xShft, yShft + Math.round(0.5 * cellHeight), clrNull);
drawHexagon(xShft, yShft + Math.round(1.5 * cellHeight), clrNull);
drawHexagon(xShft + Math.round(0.75 * cellWidth), yShft, clrNull);
drawHexagon(xShft + Math.round(0.75 * cellWidth), yShft + cellHeight, clrNull);
drawHexagon(xShft + Math.round(0.75 * cellWidth), yShft + 2 * cellHeight, clrNull);
drawHexagon(xShft + Math.round(1.5 * cellWidth), yShft + Math.round(0.5 * cellHeight), clrNull);
drawHexagon(xShft + Math.round(1.5 * cellWidth), yShft + Math.round(1.5 * cellHeight), clrFill);