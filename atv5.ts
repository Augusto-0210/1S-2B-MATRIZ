/*5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
Nome:Augusto Lopes Costa da Silva*/
console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 3;
let coluna = 3;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = (teclado(`Digite o numero que vai estar no endereço [${z+1}, ${x+1}] da matriz: `));
        
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);