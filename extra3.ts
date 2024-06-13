/*
Fazer um programa que lê 10 valores, armazene 
em um array, e imprime o maior 
e o menor valores lidos.
*/
console.clear()
const teclado = require (`prompt-sync`)();

let array1: number [] = new Array (9);
let maior: number = 0;
let menor: number = 0;


for(let x = 0; x < 10; x++){
    array1[x] = parseInt(teclado(`Digite o ${x+1}º numero:`));
    menor = array1[0];
}

for(let y = 0; y < 10; y++){
    if(maior < array1[y]){
        maior = array1[y];
    }
}

for(let y = 0; y < 10; y++){
    if(menor > array1[y]){
        menor = array1[y];
    }
}

console.log(`O maior numero é ${maior} e o menor é ${menor}`);