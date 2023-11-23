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
})
