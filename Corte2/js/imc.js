const btnCalcular = document.getElementById('btnCalcular');
const resultadoIMC = document.getElementById('IMC');
const nivelIMC = document.getElementById('nivelIMC');
const imagenNivel = document.getElementById('imagenNivel');

btnCalcular.addEventListener("click", function () {
    // Obtener los datos de los inputs
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let edad = parseInt(document.getElementById('edad').value);
    let sexo = document.getElementById('sexo').value;

    /* hacer calculos de IMC */
    let alturA = altura * altura;
    let imc = peso / alturA;

    /* mostrar datos de IMC */
    resultadoIMC.value = imc.toFixed(2);

    // Determinar el nivel del IMC y mostrar la imagen correspondiente
    if (imc < 18.5) {
        nivelIMC.textContent = "Peso por debajo de lo normal";
        imagenNivel.src = "/img/01.png";
        imagenNivel.alt = "Peso por debajo de lo normal";
    } else if (imc >= 18.5 && imc < 25) {
        nivelIMC.textContent = "Peso saludable";
        imagenNivel.src = "/img/02.png";
        imagenNivel.alt = "Peso saludable";
    } else if (imc >= 25 && imc < 30) {
        nivelIMC.textContent = "Sobrepeso";
        imagenNivel.src = "/img/03.png";
        imagenNivel.alt = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        nivelIMC.textContent = "Obesidad tipo I";
        imagenNivel.src = "/img/04.png";
        imagenNivel.alt = "Obesidad tipo I";
    } else if (imc >= 35 && imc < 40) {
        nivelIMC.textContent = "Obesidad Tipo II";
        imagenNivel.src = "/img/05.png";
        imagenNivel.alt = "Obesidad Tipo II";
    } else {
        nivelIMC.textContent = "Obesidad Tipo III";
        imagenNivel.src = "/img/06.png";
        imagenNivel.alt = "Obesidad Tipo III";
    }

    // Calcular las calorías según la edad, sexo y nivel de actividad
    let calorias;

    if (edad < 18) {
        calorias = sexo === 'hombre' ? (17.686 * peso + 658.2) : (13.384 * peso + 692.6);
    } else if (edad >= 18 && edad < 30) {
        calorias = sexo === 'hombre' ? (15.057 * peso + 692.2) : (14.818 * peso + 486.6);
    } else if (edad >= 30 && edad < 60) {
        calorias = sexo === 'hombre' ? (11.472 * peso + 873.1) : (8.126 * peso + 845.6);
    } else {
        calorias = sexo === 'hombre' ? (11.711 * peso + 587.7) : (9.082 * peso + 658.5);
    }

    // Mostrar las calorías en el resultado
    nivelIMC.textContent += `\nCalorías recomendadas: ${calorias.toFixed(2)} kcal/día`;
});
