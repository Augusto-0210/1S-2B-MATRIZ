/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
Nome:Augusto Lopes Costa da Silva*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 3;
var coluna = 3;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = Math.floor(Math.random() * 10);
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);
