//declaracion de array con elementos enteros
let arreglo = [4, 89, 30, 10, 34, 89, 10, 5, 8, 28];

//diseñar una funcion que recibe como argumento un arreglo de enteros e imprime cada elemento y el tamaño del arreglo
function mostrarArray(arreglo) {
    let tamaño = arreglo.length;
    for (let con = 0; con < arreglo.length; ++con) {
        console.log(con + ": " + arreglo[con]);
    }
    console.log("Tamaño: " + tamaño);
}

//funcion para mostrar el promedio de los elementos de array
function promedioArray(arreglo) {
    let promedio = 0;
    for (let con = 0; con < arreglo.length; ++con) {
        promedio += arreglo[con];
    }
    return promedio / arreglo.length;
}

console.log("Promedio: " + promedioArray(arreglo));
mostrarArray(arreglo);

//funcion para mostrar los valores pares de un arreglo
function mostrarValoresPares(arreglo) {
    for (let con = 0; con < arreglo.length; ++con) {
        if (arreglo[con] % 2 === 0) {
            console.log(arreglo[con]);
        }
    }
}

console.log("Valores pares:");
mostrarValoresPares(arreglo);

//funcion para mostrar el valor mayor de los elementos del arreglo
function encontrarValorMayor(arreglo) {
    let mayor = arreglo[0];
    for (let con = 1; con < arreglo.length; ++con) {
        if (arreglo[con] > mayor) {
            mayor = arreglo[con];
        }
    }
    return mayor;
}

console.log("Valor mayor: " + encontrarValorMayor(arreglo));

//funcion para llenar con valores aleatorios un arreglo
function llenarArregloAleatorio(longitud) {
    let arregloAleatorio = [];
    for (let con = 0; con < longitud; ++con) {
        arregloAleatorio.push(Math.floor(Math.random() * 100)); // genera números aleatorios entre 0 y 100
    }
    return arregloAleatorio;
}

let arregloAleatorio = llenarArregloAleatorio(10);
console.log("Arreglo aleatorio: " + arregloAleatorio);

//funcion que muestre el valor menor y la posicion del arreglo
function encontrarValorMenor(arreglo) {
    let menor = arreglo[0];
    let posicion = 0;
    for (let con = 1; con < arreglo.length; ++con) {
        if (arreglo[con] < menor) {
            menor = arreglo[con];
            posicion = con;
        }
    }
    return { valor: menor, posicion: posicion };
}

let resultadoMenor = encontrarValorMenor(arreglo);
console.log("Valor menor: " + resultadoMenor.valor);
console.log("Posición del valor menor: " + resultadoMenor.posicion);
//funcion para comprobar si el generador de numeros aleatorios es simetrico(que la diferencia entre numeros pares e impares no sea mayor al 20%)
function verificarSimetriaNumerosAleatorios(arreglo) {
    let contadorPares = 0;
    let contadorImpares = 0;

    // Contar la cantidad de números pares e impares en el arreglo
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
    }

    // Calcular el porcentaje de números pares e impares
    let porcentajePares = (contadorPares / arreglo.length) * 100;
    let porcentajeImpares = (contadorImpares / arreglo.length) * 100;

    // Verificar si la diferencia entre pares e impares es menor o igual al 20%
    return Math.abs(porcentajePares - porcentajeImpares) <= 20;
}

// Verificar la simetría del arreglo aleatorio
let esSimetrico = verificarSimetriaNumerosAleatorios(arregloAleatorio);

if (esSimetrico) {
    console.log("El generador de números aleatorios es simétrico.");
} else {
    console.log("El generador de números aleatorios no es simétrico.");
}