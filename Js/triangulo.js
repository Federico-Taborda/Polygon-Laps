let dx = 1;
let dy = 1;
let x = 100;
let y = 300;

function dibujarBola() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
};

function dibujarTrazo() {
    ctx.beginPath();
    ctx.fillText("x: 100, y: 300", 100 - 70, 300,);
    ctx.moveTo(100, 300);
    ctx.lineTo(200, 300);
    
    ctx.fillText("x: 150, y: 250", 150 + 10, 250,);
    ctx.moveTo(100, 300);
    ctx.lineTo(150, 250);

    ctx.moveTo(150, 250);
    ctx.lineTo(200, 300);
    ctx.fillText("x: 200, y: 300", 200 + 10, 300,);
    ctx.stroke();
};

function dibujar() {
    dibujarBola();
    dibujarTrazo();

    if(x == 200 && y == 300){
        dx = -1;
        dy = 0;
    }else if(x == 100 && y == 300){
        dx = 1;
        dy = -1;
    }else if(x == 150 && y == 250){
        dx = 1;
        dy = 1;
    }

    x += dx;
    y += dy;
};