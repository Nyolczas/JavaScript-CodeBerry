//JavaScript segítségével kijelöljük a megfelelő elemet:
var canvas = document.getElementById('myCanvas');
//És ezen létrehozunk egy rajzolási objektumot:
var context = canvas.getContext('2d');
//Erre a context változóra tudunk innentől rajzolni, például vonalat:
context.beginPath();
context.moveTo(55, 60);
context.lineTo(55,140);
context.stroke();
context.strokeStyle = "#0797ff";
//például egy négyszöget:
context.fillStyle = '#0797ff';
context.fillRect(50,70,10,30);
//Szín megadása a következő objektumra:
context.fillStyle = '#ff0751';
context.fillRect(65,70,10,50);