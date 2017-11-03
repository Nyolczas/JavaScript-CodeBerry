var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var unit = 15;

for (cnt = 1; cnt <= 15; cnt++) {
    context.fillStyle = setColor(cnt);
    context.fillRect(unit * cnt, unit * cnt, unit * 2, unit * 2);
}

function setColor(i) {
    if (i % 3 == 0 && i % 5 == 0) {
        return 'rgba(0, 255, 0, 0.5)';
    } else if (i % 3 == 0) {
        return 'rgba(0, 0, 255, 0.5)';
    } else if (i % 5 == 0) {
        return 'rgba(255, 255, 0, 0.5)';
    } else {
        return 'rgba(50, 50, 50, 0.5)';
    }

};