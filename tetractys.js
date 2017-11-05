var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = context.canvas.clientWidth;
var canvasHeight = context.canvas.clientHeight;

var cellWidth = 100;
var halfW = Math.round(cellWidth * 0.5);
var cellHeight = Math.sin(60 * Math.PI / 180) * cellWidth;
var tetrArray = [
    [1, cellWidth, '#E36266', cellWidth, cellHeight],
    [2, halfW, '#26AD49', 0, cellHeight],
    [3, 0, '#228180', halfW, 0]
];
var xShft = Math.round((canvasWidth - cellWidth * 3) / 2);
var yShft = Math.round((canvasHeight - cellHeight * 3) / 2);

for (var h = 0; h < 3; h++) {
    for (var w = 0; w < tetrArray[h][0]; w++) {
        var x = xShft + tetrArray[h][1] + (cellWidth * w);
        var y = yShft + (h * cellHeight);
        context.moveTo(x + halfW, y);
        for (i = 0; i < 3; i++) {
            context.lineTo(x + tetrArray[i][3], y + tetrArray[i][4]);
        }
        console.log(x,y);
        context.fillStyle = tetrArray[h][2];
        console.log(tetrArray[h][2]);
        context.fill();
        console.log('filled');
    }
}
