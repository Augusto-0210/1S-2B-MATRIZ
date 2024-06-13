/*5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
Nome:Augusto Lopes Costa da Silva*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 3;
var coluna = 3;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = (teclado("Digite o numero que vai estar no endere\u00E7o [".concat(z + 1, ", ").concat(x + 1, "] da matriz: ")));
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);
