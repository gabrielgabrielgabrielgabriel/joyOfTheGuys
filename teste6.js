var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let numero = parseFloat(lines[0]);
let horas = parseFloat(lines[1]);
let salario = parseFloat(lines[2]);

const resultado = horas * salario;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${resultado.toFixed(2)}\n`);
