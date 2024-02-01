const menorValor = require('../linear/select')
const livros = require('../listas/listaSimples')

for (let atual = 0; atual < livros.length; atual++) { // atual recebe e percorre a lista de elementos
    // Posição atual
    let menor = menorValor(livros, atual) // obtém a posição do livro com menor valor em relação à posição atual
   
    // Livro atual
    let livroAtual = livros[atual] // obtém o livro na posição atual da lista
   
    // Menor preco
    let livroMenorPreco = livros[menor] // obtém o livro com menor valor em relação à posição
    console.log(`Livro menor preço `, livros[menor]) // momento para obter/manipular exatamente o livro com o valor mais baixo em relação à posição

    livros[atual] = livroMenorPreco // sobrescreve a primeira/anterior posição com o livro selecionado com o menor valor
    livros[menor] = livroAtual // inverte o passo anterior, pegando (caso exista) o livro com valor maior e passa para a posição atual (enquanto o anterior passa para a posição menor)
}