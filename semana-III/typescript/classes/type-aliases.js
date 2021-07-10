"use strict";
//Type aliases - vai unir se igual as propriedades, são atalhos
var funcionariosTecnicos = [
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
function notificarFuncionarios(funcionarios) {
    funcionarios.forEach(function (funcionario) {
        console.log(funcionario.nome);
    });
}
