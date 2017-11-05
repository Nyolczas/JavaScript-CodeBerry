var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var starPoints = [
    [0.5, 0],
    [0.62, 0.38],
    [1, 0.4],
    [0.7, 0.63],
    [0.81, 1],
    [0.5, 0.78],
    [0.19, 1],
    [0.3, 0.63],
    [0, 0.38],
    [0.38, 0.38],
    [0.5, 0]
];

function filledStar(offstX, offstY, size) {
    var yShft = 3;
    context.beginPath();
    context.moveTo(offstX + (starPoints[0][0] * size),
        offstY - Math.round(size / yShft) + (starPoints[0][1] * size));
    for (var i = 1; i <= 10; i++) {
        context.lineTo(offstX + (starPoints[i][0] * size),
            offstY - Math.round(size / yShft) + (starPoints[i][1] * size));
    }
    context.fillStyle = 'rgba(199, 79, 120, 0.5)';
    context.fill();
}

filledStar(40, 50, 75);
filledStar(130, 120, 100);
filledStar(250, 220, 150);