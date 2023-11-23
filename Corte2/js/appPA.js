/* declarar variables*/

const btnCalcular=document.getElementById('btnCalcular');

btnCalcular.addEventListener("click",function(){
//obtener los datos de los input
let valorAuto=document.getElementById('valorAuto').value;
let pInicial=document.getElementById('porcentaje').value;
let plazos=document.getElementById('plazos').value; 

/* hacer calculos*/
let pagoInicia=valorAuto*(pInicial/100);
let totalFin=valorAuto-pagoInicia;
let pagoMensual=totalFin/plazos;
/*mostrar datos*/
document.getElementById('pagoInicial').value=pagoInicia;
document.getElementById('totalfin').value=totalFin;
document.getElementById('pagoMensual').value=pagoMensual;
});

function arribaMouse(){
    parrafo = document.getElementById('pa');
    parrafo.style.color="#FF00FF";
    parrafo.style.fontSize='25px';
    parrafo.style.textAlign="justify";
}
function salirMouse(){
    parrafo=document.getElementById('pa');
    parrafo.style.color="red";
    parrafo.style.fontSize='17px';
}

function limpiarTexto() {
    parrafo = document.getElementById('pa');
    parrafo.textContent = ""; // Limpiar el contenido del párrafo
}
/*
// Agregar evento cuando el mouse se coloca sobre el elemento 'pa'
parrafo.addEventListener("mouseover", arribaMouse);

// Agregar evento cuando el mouse sale del elemento 'pa'
parrafo.addEventListener("mouseout", salirMouse);
*/