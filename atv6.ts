/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
Nome:Augusto Lopes Costa da Silva*/
console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 3;
let coluna = 3;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = (teclado(`Digite o numero entre 0 a 9 que vai estar no endereço [${z+1}, ${x+1}] da matriz: `));
        if(numero < 10 && numero >= 0){
        minhaMatriz[z][x] = numero;
        }
        else{
            x--
        }
    }
}
console.log(minhaMatriz);