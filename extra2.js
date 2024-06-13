/*
Fazer um programa que receba um conjunto de 10 valores
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
*/
console.clear();
var teclado = require("prompt-sync")();
var soma = 0;
var array1 = new Array(9);
for (var x = 0; x < 10; x++) {
    array1[x] = parseInt(teclado("Digite o ".concat(x + 1, "\u00BA numero:")));
    soma += array1[x];
}
var media = soma / 10;
console.log("As notas foram ".concat(array1));
console.log("A soma das notas \u00E9 ".concat(soma));
console.log("A m\u00E9dia \u00E9 ".concat(media));
for (var y = 0; y < 10; y++) {
    if (array1[y] == media) {
        console.log("O ".concat(array1[y], " \u00E9 igual a media"));
    }
    else {
        console.log("O ".concat(array1[y], " \u00E9 diferente da media"));
    }
}
