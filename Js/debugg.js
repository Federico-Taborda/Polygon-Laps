function comprobarCoordenadaYBola(poligono, indice) {
    return console.log(Math.round(poligono.coords[indice].x) == Math.round(poligono.ballX) && Math.round(poligono.coords[indice].y) == Math.round(poligono.ballY));
};

function velocidadesPoligono(poligono) {
    return console.log(poligono.speeds)
};

function coordenadasPoligono(poligono) {
    return console.log(poligono.coords);
};

function propiedadPoligono(propiedad) {
    return console.log(propiedad);

};