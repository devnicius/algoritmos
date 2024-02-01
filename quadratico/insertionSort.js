const livros = require('../listas/listaDesordenada')

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) { // percorre a lista
        let analise = atual; // obtém a posição atual da lista
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) { // percorre (com base na posição atual) enquanto o valor da posição atual for menor que da posição anterior (desde que não seja a posição 0)
            let itemAnalise = lista[analise] // obtém o livro com menor valor
            let itemAnterior = lista[analise -1] // obtém o livro que deixará de ocupar a posição anterior (em relação ao passo acima)
            lista[analise] = itemAnterior // sobrescreve o livro anterior (de maior valor) na posição atual
            lista[analise - 1] = itemAnalise // sobrescreve o livro atual (de menor valor) na posição anterior

            analise -- // decrementa analise para sempre estar a uma posição anterior em relação ao atual
        }
    }
    console.log(lista)
}

insertionSort(livros)