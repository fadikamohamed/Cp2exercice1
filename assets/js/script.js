var c = document.getElementById('iceCream');
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.moveTo(50,130);
ctx.quadraticCurveTo(120,1,150,130);
ctx.fillStyle = '#8A0908';
ctx.fill();

ctx.beginPath();
ctx.moveTo(50,130);
ctx.lineTo(150,130);
ctx.lineTo(100,275);
ctx.closePath();
ctx.fillStyle = '#AA6522';
ctx.fill();
