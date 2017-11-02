//JavaScript segítségével kijelöljük a megfelelő elemet:
var canvas = document.getElementById('myCanvas');
//És ezen létrehozunk egy rajzolási objektumot:
var context = canvas.getContext('2d');

function drawCandle(nr, open, hi, lo, close) {
    context.beginPath();
    context.moveTo(nr*10-5, hi);
    context.lineTo(nr*10-5, lo);
    context.stroke();

    if(open < close) {
        context.fillStyle = '#0797ff';
        context.fillRect((nr * 10) - 10,close,10,open);
    }
    else {
        context.fillStyle = '#ff0751'; 
        context.fillRect((nr * 10)- 10,open,10,close);
    }
    
}

drawCandle(1, 100, 80, 150, 90);
drawCandle(2, 90, 80, 150, 90);