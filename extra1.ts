/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e 
devolve a média do aluno. */
console.clear()
const teclado = require (`prompt-sync`)();

let array1: number [] = new Array (4);
let soma: number = 0;
for(let x = 0; x < 5; x++){
    array1[x] = parseInt(teclado(`Digite a ${x+1}º nota`));
    soma += array1[x];
}

let media = soma/5;

console.log(`As notas foram ${array1}`);
console.log(`A soma das notas é ${soma}`);
console.log(`A média é ${media}`);