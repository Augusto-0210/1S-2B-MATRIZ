/*
Fazer um programa que lê 10 valores, armazene
em um array, e imprime o maior
e o menor valores lidos.
*/
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(9);
var maior = 0;
var menor = 0;
for (var x = 0; x < 10; x++) {
    array1[x] = parseInt(teclado("Digite o ".concat(x + 1, "\u00BA numero:")));
    menor = array1[0];
}
for (var y = 0; y < 10; y++) {
    if (maior < array1[y]) {
        maior = array1[y];
    }
}
for (var y = 0; y < 10; y++) {
    if (menor > array1[y]) {
        menor = array1[y];
    }
}
console.log("O maior numero \u00E9 ".concat(maior, " e o menor \u00E9 ").concat(menor));
