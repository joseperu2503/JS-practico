function calcularPromedio(lista){
    var sumaLista = 0;
    for (let i = 0; i < lista.length; i++){  
        sumaLista = sumaLista + lista[i];
   }
   return sumaLista / lista.length;
}

function calcularMediana(lista){
    //Ordenar el array de mayor a menos
    lista = lista.sort((x,y) => x - y);

    let mitad = Math.floor(lista.length / 2);
    return lista.length % 2 == 1 ? lista[mitad] : (lista[mitad-1]+lista[mitad])/2;
}

var lista2 = []

function onClickButtonPushValue() {
    const inputNumber = document.getElementById("InputNumbers");
    const numberValue = inputNumber.value;
    lista2.push(numberValue-0);
}

function onClickButtonProm() {
    const promedio = calcularPromedio(lista2);
    const mediana = calcularMediana(lista2);

    const resultPromedio = document.getElementById("ResultPromedio");
    const resultMediana = document.getElementById("ResultMediana");
    resultPromedio.innerText = "El promedio es: " + promedio;
    resultMediana.innerText = "La mediana es : " + mediana;
}

