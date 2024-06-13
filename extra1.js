/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e
devolve a média do aluno. */
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(4);
var soma = 0;
for (var x = 0; x < 5; x++) {
    array1[x] = parseInt(teclado("Digite a ".concat(x + 1, "\u00BA nota")));
    soma += array1[x];
}
var media = soma / 5;
console.log("As notas foram ".concat(array1));
console.log("A soma das notas \u00E9 ".concat(soma));
console.log("A m\u00E9dia \u00E9 ".concat(media));
