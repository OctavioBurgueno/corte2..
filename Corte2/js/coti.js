const btnCalcular = document.getElementById('btnCalcular');
const aside = document.querySelector('aside');
const btnLimpiar=document.getElementById('btnLimpiar');

btnCalcular.addEventListener('click', function () {
    // Obtener los datos de los input
    let valorAuto = parseFloat(document.getElementById('valorAuto').value);
    let pInicial = parseFloat(document.getElementById('porcentaje').value);
    let plazos = parseFloat(document.getElementById('plazos').value);

    // Hacer cálculos
    let pagoInicial = valorAuto * (pInicial / 100);
    let totalFinanciar = valorAuto - pagoInicial;
    let pagoMensual = totalFinanciar / plazos;

    // Mostrar los datos en los campos de entrada
    document.getElementById('pagoInicial').value = pagoInicial.toFixed(2);
    document.getElementById('totalfin').value = totalFinanciar.toFixed(2);
    document.getElementById('pagoMensual').value = pagoMensual.toFixed(2);

    // Crear un nuevo elemento de párrafo para mostrar los datos en el aside
    let parrafo = document.createElement('p');
    parrafo.textContent = `Pago Inicial: $${pagoInicial.toFixed(2)}, Total a Financiar: $${totalFinanciar.toFixed(2)}, Pago Mensual: $${pagoMensual.toFixed(2)}
    Valor de auto: $${valorAuto.toFixed(2)} Porcentaje: ${pInicial.toFixed(2)}% Plazos: ${plazos}`;

    // Agregar el nuevo párrafo al aside
    aside.appendChild(parrafo);
});
function arribaMouse(){
    parrafo = document.getElementById('pa');
    parrafo.style.color="#FF00FF";
    parrafo.style.fontSize='25px';
    parrafo.style.textAlign = 'justify';
}
function salirMouse(){
    parrafo=document.getElementById('pa');
    parrafo.style.color="red";
    parrafo.style.fontSize='17px';
    parrafo.style.textAlign = 'initial';
}

function limpiar(){
    let valorAuto = parseFloat(document.getElementById('valorAuto').value=null);
    let pInicial = parseFloat(document.getElementById('porcentaje').value=null);
    let plazos = parseFloat(document.getElementById('plazos').value=null);

    document.getElementById('pagoInicial').value = null;
    document.getElementById('totalfin').value = null;
    document.getElementById('pagoMensual').value = null;
}

btnLimpiar.addEventListener('click', limpiar);

/*Manejo de Arrays*/

//declaracion de array con elementos enteros
let arreglo = [4,89,30,10,34,89,10,5,8,28];

//diseñar una funcion que recibe como argumento un arreglo de enteros e imprime cada elemento y el tamaño del arreglo

function mostrarArray(arreglo){
    let tamaño=arreglo.length;

    for(let con=0;con<=arreglo.length;++ con){
        console.log(con+":" + arreglo[con]);
    }
    console.log("tamaño :"+tamaño);
}
//funcion para mostrar el promedio de los elementos de array
function promedioArray(arreglo){
    let promedio=0;
    for(let con=0;con<arreglo.length;++ con){
        promedio+=arreglo[con];
        return (promedio/arreglo.length);
    }
    console.log("Promedio :"+promedio);
    console.log(mostrarArray(arreglo));
    console.log(llenarArrayConValoresAleatorios(arregloAleatorio));
}
//funcion para mostrar los valores pares de un arreglo

//funcion para mostrar el valor mayot de los elementos del arreglo

//funcion para llenar con valores aleatorios un arreglo
let arregloAleatorio = llenarArrayConValoresAleatorios(10, 1, 100);

function llenarArrayConValoresAleatorios(longitud, valorMinimo, valorMaximo) {
    let arreglo = [];
  
    for (let i = 0; i < longitud; i++) {
      let numeroAleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
      arreglo.push(numeroAleatorio);
    }
  
    return arreglo;
  }
  