var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 50;
var margin = 5;
var startX = 400 - (3 * size) - (4 * margin);
var startY = 300 - (3 * size) - (4 * margin);
var cnt = 0;

for (h = 0; h < 6; h++) {
    for (v = 0; v < 6; v++) {
        context.fillStyle = szinezo(cnt);
        cnt++;
        context.fillRect(startX + (margin * v) + (size * v),
            startY + (margin * h) + (size * h), size, size);
    }
}

function szinezo(i) {
    var t1 = "rgb(";
    var red = 199 - (7 * i);
    var t2 = ",79,";
    var blue = 120 + (15 * i);
    var t3 = ")";
    return t1 + red + t2 + blue + t3;
};