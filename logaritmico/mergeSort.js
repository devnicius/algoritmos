const listaLivros = require('../listas/listaDesordenada');


// Recursividade - resolver o problema em partes menores até que esteja completamente resolvido
function mergeSort(array, nivelAninhamento = 0) {
    console.log(` nível de aninhamento: ${nivelAninhamento}`);
  //  console.log(array);
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2); // arredondar um número abaixo
        /* A cada vez que a função chama a si mesma, ela re-executa o seu próprio bloco aninhado com os valores das variáveis*/
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1); // separa o array do começo ao meio (chama o próprio método a fim de se repetir até que saia do if)
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1); // separa o array do meio ao fim (executará enquanto a condição do if for verdadeira)
        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualP1 = 0;
    let posicaoAtualP2 = 0;

    const resultado = [];
    
    while (posicaoAtualP1 < parte1.length && posicaoAtualP2 < parte2.length) {
        let produtoAtualP1 = parte1[posicaoAtualP1];
        let produtoAtualP2 = parte2[posicaoAtualP2];

        if (produtoAtualP1.preco < produtoAtualP2.preco) {
            resultado.push(produtoAtualP1); // manda o parâmetro/elemento no final do array
            posicaoAtualP1++;
        } else {
            resultado.push(produtoAtualP2); // manda o parâmetro/elemento no final do array
            posicaoAtualP2++;
        }
    }
    return resultado.concat(posicaoAtualP1 < parte1.length ? parte1.slice(posicaoAtualP1) : parte2.slice(posicaoAtualP2))
}

console.log(mergeSort(listaLivros));