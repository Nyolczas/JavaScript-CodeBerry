var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function draw(startX, startY, len, angle, branchWidth, clr) {
    ctx.lineWidth = branchWidth;
    ctx.beginPath();
    ctx.save();

    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.strokeStyle = clr;
    ctx.stroke();

    if (len < 10) {
        ctx.restore();
        return;
    }

    draw(0, -len, len * 0.8, -15, branchWidth * 0.8);
    draw(0, -len, len * 0.8, 15, branchWidth * 0.8);

    ctx.restore();
}

function frctlCreator(x, y, len, width, color, Angl) {
    var ang = 0;
    while (ang < 360) {
        draw(x, y, len, ang, width, color);
        ang += Angl;
    }
}

frctlCreator(444,444,90,8,'#181FF8',12);
frctlCreator(444,444,90,10,'#2A55FF',30);
frctlCreator(444,444,90,5,'#98CCFC',45);
frctlCreator(88,88,20,2,'#98CCFC',75);