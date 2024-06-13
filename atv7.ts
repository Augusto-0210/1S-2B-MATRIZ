/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
Nome:Augusto Lopes Costa da Silva*/
console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 3;
let coluna = 3;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = Math.floor(Math.random() * 10);
        
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);