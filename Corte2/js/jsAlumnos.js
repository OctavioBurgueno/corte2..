const tablaAlum = document.getElementById('tabla-alumnos');
let alumno = [{
    
    "matricula":"2020030664",
    "nombre":"Burgueño Barraza Octavio de Jesus",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/2.jpg">'
},{
    "matricula":"2020030321",
    "nombre":"Ontiveros Govea Yair Alejandro",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/10.jpg">'
},{
    "matricula":"2021030652",
    "nombre":"Quezada Lara Jesus Alejandro",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/1.png">'
},{
    "matricula":"2021030652",
    "nombre":"Pastrano Navarro Brandon Rogelio",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/3.jpeg">'
},{ 
    "matricula":"2021030142",
    "nombre":"Aguilar Romero Jonathan Jesus",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/4.jpg">'
},{
    "matricula":"2021030143",
    "nombre":"Tirado Rios Oscar de Jesus",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/5.jpg">'
},{
    "matricula":"202103001",
    "nombre":"Tirado Rios Luis Mario",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/6.jpg">'
},{
    "matricula":"202103101",
    "nombre":"Plazola Arangure Yohan",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/7.jpg">'
},{
    "matricula":"2021030311",
    "nombre":"Reyes Lizarraga Jonathan Alexis",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/8.jpg">'
},{
    "matricula":"2021030314",
    "nombre":"Peñaloza Pizarro Felipe Andres",
    "grupo":"TCI-7-3",
    "carrera":"Tecnologias de la Informacion",
    "foto":'<img src="/img/9.png">'

}
];



for (i=0;i<alumno.length;i++){
    let tabla = document.getElementById('tabla-alumnos');
    let row = tabla.insertRow(); // Inserta una fila en la tabla
    // Inserta celdas en la fila
    let cell1 = row.insertCell(0); // Matricula
    let cell2 = row.insertCell(1); // Nombre
    let cell3 = row.insertCell(2); // Grupo
    let cell4 = row.insertCell(3); // Carrera
    let cell5 = row.insertCell(4); // Foto

    // Agrega los datos del alumno a las celdas
    cell1.innerHTML = alumno[i].matricula;
    cell2.innerHTML = alumno[i].nombre;
    cell3.innerHTML = alumno[i].grupo;
    cell4.innerHTML = alumno[i].carrera;
    cell5.innerHTML = alumno[i].foto;
}

let tabla = document.getElementById('tabla-alumnos');



