/*
Fazer um programa que receba um conjunto de 10 valores 
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
*/
console.clear()
const teclado = require (`prompt-sync`)();
let soma: number = 0;

let array1: number [] = new Array (9);

for(let x = 0; x < 10; x++){
    array1[x] = parseInt(teclado(`Digite o ${x+1}º numero:`));
    soma += array1[x];
}

let media = soma/10;

console.log(`As notas foram ${array1}`);
console.log(`A soma das notas é ${soma}`);
console.log(`A média é ${media}`);

for(let y = 0; y < 10; y++){
    if (array1[y] == media){
        console.log(`O ${array1[y]} é igual a media`)
    }
    else{
        console.log(`O ${array1[y]} é diferente da media`)
    }
}