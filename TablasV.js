//Alumno: Diego Emiliano Pineda Guerrero
//AND
console.log("Tabla de verdad de la operacióo logica AND");
console.log("| a | b |   Q   |");
let and = 0 >= 1 && 0 >= 1;
console.log("| 0 | 0 | " + and + " |");
let and1 = 0 >= 1 && 1 >= 1;
console.log("| 0 | 1 | " + and1 + " |");
let and2 = 1 >= 1 && 0 >= 1;
console.log("| 1 | 0 | " + and2 + " |");
let and3 = 1 >= 1 && 1 >= 1;
console.log("| 1 | 1 | " + and3 + "  |");

//OR
console.log("Tabla de verdad de la operacióo logica OR");
console.log("| a | b |  Q  |");
let or= 0 >= 1 || 0 >= 1;
console.log("| 0 | 0 |" + or + "|");
let or1 = 0 >= 1 || 1 >= 1;
console.log("| 0 | 1 | " + or1 + "|");
let or2 = 1 >= 1 || 0 >= 1;
console.log("| 1 | 0 | " + or2 + "|");
let or3 = 0 >= 1 || 1 >= 1;
console.log("| 1 | 1 | " + or3 + "|");