"use strict";
function getUsuario() {
    return {
        nome: "Lucas",
        idade: 21,
        email: "lucas@email.com",
        telefone: "(00)0000-0000",
        data_nascimento: "11/02/2000",
        sexo: "M"
    };
}
// Usando as interface como types
function setUsuario(usuario) {
    console.log(usuario.nome);
}
