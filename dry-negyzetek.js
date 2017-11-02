var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var StartPos = 25;
var Size = 50;
for(var i = 0; i < 10 ; i++) {
    var x = i * Math.floor(Size / 2) + StartPos;
    context.fillStyle = 'rgba(255, 160, 0, 0.5)'; 
    context.fillRect(x,x,Size,Size);
}