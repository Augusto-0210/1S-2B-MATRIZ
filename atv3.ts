/*3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome:Augusto Lopes Costa da Silva*/
console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 4;
let coluna = 2;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = (teclado(`Digite o numero que vai estar no endereço [${z+1}, ${x+1}] da matriz: `));
        
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);