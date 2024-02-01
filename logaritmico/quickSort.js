const listaLivros = require('../listas/listaDesordenada');
const trocaLugar = require('./encontraMenores');

// Recursividade
function quickSort(array, esquerda, direita) {
    
    if (array.length > 1) { // somente se tiver mais que um elemento restante (recursividade)
        let indiceAtual = particiona(array, esquerda, direita);

        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual - 1 < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }

    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda; //0
    let atualDireita = direita; //10

    while (atualEsquerda <= atualDireita) {
        while(array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        while(array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita); // o índice da direita vai para o da esquerda
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));