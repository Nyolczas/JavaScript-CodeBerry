var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var startX = 350;
var startY = 200;
var edge = 150;
var height = 135;
for (i = 0; i < 30; i++) {
    context.beginPath();
    context.moveTo(startX + (i * 5), startY + (i * 5));
    context.lineTo(startX + (i * 5) - edge, startY + (i * 5));
    context.lineTo(startX + (i * 5) - (edge / 2), startY + (i * 5) - height);
    context.lineTo(startX + (i * 5), startY + (i * 5));
    context.stroke();
}