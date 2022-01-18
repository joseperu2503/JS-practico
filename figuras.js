//codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}



//codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm" );

// console.log("la altura del triangulo mide: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1 , lado2 , base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base , altura) {
    return base*altura;
}

console.groupEnd();

const pi = Math.PI;

function perimetroCirculo(radio) {
    return 2 * radio * pi;
}

function areaCirculo(radio) {
    return pi * radio * radio;
}

//Aqui interactuamos con el html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);  
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
