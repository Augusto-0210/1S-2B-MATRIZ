/*3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome:Augusto Lopes Costa da Silva*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 4;
var coluna = 2;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = (teclado("Digite o numero que vai estar no endere\u00E7o [".concat(z + 1, ", ").concat(x + 1, "] da matriz: ")));
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);
