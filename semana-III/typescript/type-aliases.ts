//Type aliases - vai unir se igual as propriedades, são atalhos

type Funcionarios = {
    nome: string,
    idade: number,
    email: string
}


const funcionariosTecnicos: Funcionarios[] = [
  {
    nome: 'Lucas',
    idade: 21,
    email: 'lucas@email.com'
  }, 
  {
    nome: 'João',
    idade: 22,
    email: 'joao@email.com'
  }
];

function notificarFuncionarios(funcionarios: Funcionarios[]) {
  funcionarios.forEach(funcionario => {
    console.log(funcionario.nome);
  });
}
