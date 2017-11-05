var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = context.canvas.clientWidth;
var canvasHeight = context.canvas.clientHeight;

function drawCheckeredPattern(row, col) {
    var w = Math.ceil(canvasWidth / row);
    var h = Math.ceil(canvasHeight / col);
    for (r = 0; r < row; r++) {
        for (c = 0; c < col; c++) {
            if ((r + c) % 2 == 0) {
                context.fillStyle = '#F7F7F7';
            } else {
                context.fillStyle = '#000000';
            }
            context.fillRect(r * w, c * h, w, h);
        }
    }
}

drawCheckeredPattern(8, 8);