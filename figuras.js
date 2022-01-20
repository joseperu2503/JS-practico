
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}



function perimetroTriangulo(lado1 , lado2 , lado3) {
    return lado1 + lado2 + lado3;
}

function areaTriangulo(lado1 , lado2, lado3) {
    s = perimetroTriangulo(lado1 , lado2 , lado3) /2;
    area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
    return area;
}


const pi = Math.PI;

function perimetroCirculo(radio) {
    return 2 * radio * pi;
}

function areaCirculo(radio) {
    return pi * radio * radio;
}

//Aqui interactuamos con el html

function onClickButtonPerimetroCuadrado() {
    const inputCuadrado = document.getElementById("InputCuadrado");
    const ladoCuadradoValue = inputCuadrado.value;
    const perimetro = perimetroCuadrado(ladoCuadradoValue);
    
    const resultPerimetro = document.getElementById("ResultPerimetro");
    resultPerimetro.innerText = "El perímetro del cuadrado es: " + perimetro
}

function onClickButtonAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    const resultArea = document.getElementById("ResultArea");
    resultArea.innerText = "El área del cuadrado es: " + area
}

function onClickButtonPerimetroCirculo() {
    const inputCirculo = document.getElementById("InputCirculo");
    const radioCirculoValue = inputCirculo.value;
    const perimetro_circulo = perimetroCirculo(radioCirculoValue);
    
    const resultPerimetroCirculo = document.getElementById("ResultPerimetroCirculo");
    resultPerimetroCirculo.innerText = "El perímetro del circulo es: " + perimetro_circulo.toFixed(3)
}

function onClickButtonAreaCirculo() {
    const inputCirculo = document.getElementById("InputCirculo");
    const radioCirculoValue = inputCirculo.value;
    const area_circulo = areaCirculo(radioCirculoValue);

    const resultAreaCirculo = document.getElementById("ResultAreaCirculo");
    resultAreaCirculo.innerText = "El área del circulo es: " + area_circulo.toFixed(3)
}

//triangulo

function onClickButtonPerimetroTriangulo() {
    const lado1 = document.getElementById("Lado1");
    const lado1Value = lado1.value;

    const lado2 = document.getElementById("Lado2");
    const lado2Value = lado2.value;

    const lado3 = document.getElementById("Lado3");
    const lado3Value = lado3.value;

    const area_triangulo = areaTriangulo(lado1Value-0 , lado2Value-0, lado3Value-0);
    const perimetro_triangulo = perimetroTriangulo(lado1Value-0, lado2Value-0, lado3Value-0);
    
    const resultPerimetroTriangulo = document.getElementById("ResultPerimetroTriangulo");

    if (isNaN(area_triangulo)) {
        resultPerimetroTriangulo.innerText = "No existe triangulo con esos lados ";
    }
    else {
        resultPerimetroTriangulo.innerText = "El perímetro del triángulo es: " + perimetro_triangulo;
    }   
}

function onClickButtonAreaTriangulo() {
    const lado1 = document.getElementById("Lado1");
    const lado1Value = lado1.value;

    const lado2 = document.getElementById("Lado2");
    const lado2Value = lado2.value;

    const lado3 = document.getElementById("Lado3");
    const lado3Value = lado3.value;


    const area_triangulo = areaTriangulo(lado1Value-0 , lado2Value-0, lado3Value-0);

    const resultAreaTriangulo = document.getElementById("ResultAreaTriangulo");

    if(isNaN(area_triangulo)) {
        resultAreaTriangulo.innerText = "No existe triangulo con esos lados ";
    }
    else if (area_triangulo - Math.floor(area_triangulo) != 0) {
        resultAreaTriangulo.innerText = "El área del triángulo es: " + area_triangulo.toFixed(3);
    }
    else {
        resultAreaTriangulo.innerText = "El área del triángulo es: " + area_triangulo;
    }


    
}


