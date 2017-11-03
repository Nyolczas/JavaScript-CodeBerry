var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var sizeWidth = context.canvas.clientWidth;
var sizeHeight = context.canvas.clientHeight;

var offset = 10;

for (cnt = 0; cnt < 17; cnt++) {
    context.fillStyle = szinezo(cnt);
    context.fillRect(0 + (offset * cnt), 0 + (offset * cnt),
        sizeWidth - (offset * cnt * 2), sizeHeight - (offset * cnt * 2));
}

function szinezo(i) {
    var t1 = "hsla(";
    var hue = Math.round(360 - (360 / 17 * i));
    var t2 = ",79%, 45%, 1)";
    return t1 + hue + t2;
}