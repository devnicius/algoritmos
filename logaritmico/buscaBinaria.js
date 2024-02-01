const listaLivros = require('../listas/listaOrdenada');

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    // tratamento para caso o parâmetro "de" passe do limite de "ate" - que é o tamanho máximo do array
    if (de > ate) {
        return -1;
    }

    if (valorBuscado == atual.preco) { // etapa em que o livro é encontrado
        return meio;
    }

    /* etapa em que caso o valor buscado seja menor que o da posição atual, a recursividade repete o processo,
        porém, considerando apenas da posição 0 até a anterior à atual */
    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    /* etapa em que caso o valor buscado seja menor que o da posição atual, a recursividade repete o processo,
        porém, considerando apenas da posição 0 até a anterior à atual */
    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length -1, 40));