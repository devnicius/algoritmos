
let atual = 0;
let menor = 0;


function menorValor(livros, posIni) {
    menor = posIni;
    for (atual = posIni; atual < livros.length; atual++) {
        if (livros[atual].preco < livros[menor].preco) {
            menor = atual;
        }
    }
    return menor;
}

module.exports = menorValor;