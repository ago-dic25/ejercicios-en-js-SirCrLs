var alumnos = [
    "Carlos",
    "Cesar",
    "Regina",
    "Diego",
    "Andrea",
    "Mayela",
    "Eder",
    "Carlos",
    "Regina",
    "Diego 2",
    "Naomi",
    "Eder 2"
];

console.log(alumnos);

alumnos.pop();
alumnos.push("Edgar");

console.log(alumnos);

alumnos.shift();

alumnos.unshift("Axel");
console.log(alumnos);

alumnos[4]="Carlos Manuel";

alumnos.indexOf("Regina");

console.log(alumnos.indexOf("Regina"));
console.log(alumnos.includes("Alejandro"));
console.log(alumnos.find(nombre => nombre == "Regina"));
console.log(alumnos.findIndex(nombre => nombre == "Carlos"));

lista = document.getElementById("listaAlumnos");
filtro = document.getElementById("filtroAlumno");
btnConsulta = document.getElementById("consulta");

function crearLista(){
    for (let i = 0; i < alumnos.length; i++) {
        nuevoAlumno = document.createElement('li');
        nuevoAlumno.textContent = alumnos[i];
        lista.appendChild(nuevoAlumno);
    }
}

function encontrarAlumno(nombre){
    liAlumnos = [];
    for (let i = 0; i < alumnos.length; i++) { 
        if(nombre == alumnos[i]){
            liAlumnos.push(i);
        }
    }
    console.log(liAlumnos);
    return liAlumnos;
}

crearLista();

btnConsulta.addEventListener("click",function(){
    lista.textContent = "";
    if(alumnos.includes(filtro.value)){
        pos = encontrarAlumno(filtro.value)
        for (let i = 0; i < pos.length; i++) {
            nuevoAlumno = document.createElement('li');
            nuevoAlumno.textContent = alumnos[pos[i]];
            lista.appendChild(nuevoAlumno);
        }
    }else{
        if(filtro.value == ""){crearLista();}
        
    }
    
})

