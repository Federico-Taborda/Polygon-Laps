let canvas = document.getElementById("Canvas"),
    ctx = canvas.getContext("2d");
    

let ancho = canvas.width;
let alto = canvas.height;

class Poligono {
    constructor(x, y, radio, vertices, nombre, color){
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.vertices = vertices;
        this.nombre = nombre;
        this.coords = [];
        this.speeds = [];
        this.ballX = this.x + this.radio * Math.cos( (2 * Math.PI / this.vertices) * 0);
        this.ballY = this.y + this.radio * Math.sin( (2 * Math.PI / this.vertices) * 0);
        this.contador = 1;
        this.velocidad = 0;
        this.color = color;
    };

    // Dibuja el poligono y guarda las coordenadas de cada punto del poligono
    dibujarPoligono() {
        /* ctx.rotate(3*Math.PI/2); */
        let radianes = 2 * Math.PI / this.vertices;
        this.coords = [];

        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        
        for(let i = 0; i < this.vertices; i++){
            let x = 0;
            let y = 0;
            x = (this.x + this.radio * Math.cos( radianes * i));
            y = (this.y + this.radio * Math.sin( radianes * i));
            
            this.coords.push({x, y});
            ctx.lineTo(x, y);
        };
        
        this.sacarVelocidades();
        
        ctx.closePath();
        ctx.stroke();
    };

    // Dibuja la bola en la primera coordenada
    dibujarBola() {        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.ballX, this.ballY, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
		/*ctx.srtroke();*/ /* Fijarme si el codigo funciona con esta linea sino borrar */
    };

    // Si la coordenada de la bola es igual a la coordenada de alguno de los puntos cambia la velocidad a la siguiente coordenada
    moverBola() {
        if(Math.round(this.coords[this.contador].x) == Math.round(this.ballX) && Math.round(this.coords[this.contador].y) == Math.round(this.ballY)) {
            this.contador++;
            this.velocidad++;
        };
        
        if(this.contador >= this.coords.length - 1) {
            this.contador = 0;
        };

        this.ballX += this.speeds[this.velocidad].x;
        this.ballY += this.speeds[this.velocidad].y;
    };

    // Guarda las velocidades de la bola de un punto a otro
    sacarVelocidades() {
        this.speeds = [];

        for(let j = 1; j < this.coords.length; j++) {
            let numX = this.coords[j].x - this.coords[j - 1].x;
            let numY = this.coords[j].y - this.coords[j - 1].y;

            this.speeds.push({
                x: this.sacarPorcentaje(numX.toFixed()),
                y: this.sacarPorcentaje(numY.toFixed())
            });
        };
    };

    // Saca el 1% del numero ingresado
    sacarPorcentaje(num) {
        let cien = 100;
        let uno = 1;
        let result = 0;

        return result = (num * uno) / cien;
    };
};

const Poligonos = [
    triangulo = new Poligono(ancho / 2, alto / 2, 50, 3, "Triangulo", "#2980b9"),
    cuadrado = new Poligono(ancho / 2, alto / 2, 100, 4, "Cuadrado", "#c0392b"),
    pentagono = new Poligono(ancho / 2, alto / 2, 150, 5, "Pentagono", "#2ecc71"),
    hexagono = new Poligono(ancho / 2, alto / 2, 200, 6, "Hexagono", "#9b59b6"),
    heptagono = new Poligono(ancho / 2, alto / 2, 250, 7, "Heptagono", "#f1c40f"),
    octagono = new Poligono(ancho / 2, alto / 2, 300, 8, "Octagono", "#e67e22")
];

function FPS() {
    ctx.clearRect(0, 0, ancho, alto);
    
    Poligonos.map((figura) => {
        figura.dibujarPoligono();
        figura.moverBola();
        figura.dibujarBola();
    });
    
    // Debugg (Ingresar el poligono a debuggear)
    /* comprobarCoordenadaYBola(triangulo, 2); */
    /* velocidadesPoligono(triangulo) */
    /* coordenadasPoligono(triangulo) */
    /* propiedadPoligono(triangulo.contador) */
    
    // Animacion
    requestAnimationFrame(FPS);
};

FPS();