/* declarar variables*/

const btnCalcular=document.getElementById('btnCalcular');

btnCalcular.addEventListener("click",function(){
//obtener los datos de los input
let peso=parseFloat(document.getElementById('peso').value);
let altura=parseFloat(document.getElementById('altura').value);
/* hacer calculos*/
let alturA=altura*altura;
let imc=peso/alturA;

/*mostrar datos*/
document.getElementById('IMC').value=imc.toFixed(2);
})