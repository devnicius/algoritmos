const { edGalho, edFolha } = require('../listas/listaEditora')

juntaListas(edGalho, edFolha);

function juntaListas(lista1 ,lista2) {
    let listaFinal = [];
    let posicaoAtualL1 = 0;
    let posicaoAtualL2 = 0;
    let atual = 0;

    while (posicaoAtualL1 < lista1.length && posicaoAtualL2 < lista2.length) {

        let produtoAtualL1 = lista1[posicaoAtualL1];
        let produtoAtualL2 = lista2[posicaoAtualL2];

        console.log(`Comaprando ${produtoAtualL1.titulo} com ${produtoAtualL2.titulo}`);
        

        if (produtoAtualL1.preco < produtoAtualL2.preco) {
            listaFinal[atual] = produtoAtualL1; //caso o valor da lista 1 seja menor, vai alocar o produto (l1) na posição atual da lista ordenada
            posicaoAtualL1++;
        } else {
            listaFinal[atual] = produtoAtualL2; // inverso - vai alocar o produto (l2) na posição atual da lista ordenada
            posicaoAtualL2++;
        }
        atual++;
    }

    while (posicaoAtualL1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualL1];
        posicaoAtualL1++;
        atual++;
    }

    while (posicaoAtualL2 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualL2];
        posicaoAtualL2++;
        atual++;
    }
    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));