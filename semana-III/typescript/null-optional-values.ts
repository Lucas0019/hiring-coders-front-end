// Permite deixar uma variavel com retorno de null
let altura: number | null = 1.72
altura = null

type Contato = {
    nome: string,
    email: string | null,
    telefonePessoal: string | null,
    telefoneResidencial?: string  // o interrogação (?) sigignifica que pode ser nulo - opocional
}

const contato: Contato = {  
    nome: 'João',
    email: 'joao@email.com',
    telefonePessoal: '(88) 9999-8888',
}