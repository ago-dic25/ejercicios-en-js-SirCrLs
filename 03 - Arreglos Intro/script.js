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
