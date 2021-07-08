// Objetos
const pessoa = {
    nome: 'Lucas',
    idade: 21,
    cidade: 'São Paulo',
    faculdade: 'FMU'
}

// Notção de Ponto
console.log(pessoa.nome); // Lucas

// Notação de Colchetes
console.log(pessoa['idade']); // Lucas

// Destructuring
// Não precisa passar pessoa para carregar os valores
const { nome, idade, cidade, faculdade } = pessoa;
console.log(cidade); // São Paulo