"use strict";
// Definimos tipos com letras minusculas
// boolean
var contaPaga = true;
var contaDescontada = false;
var isOpen;
isOpen = true || false;
// number
var idade = 21;
var avaliacao = 3.5;
// string
var nome = "Lucas";
// array - Tem que tipar que é array e qual o tipo do array
// Array (type[])
var nomes = ["Lucas", "Gabriela", "Eduarda"];
var idades = [21, 21, 21];
// Array (Array<type>)
var itemsStrings;
itemsStrings = ["Lucas", "Gabriela", "Eduarda"];
var itemsNumbers;
itemsNumbers = [1, 2, 3];
// Tuple - Já sabemos que é array e de que tipo é
var isTupla = ["Lucas", 21];
// enum - mapeamos de valores para nomes
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Reprovado"] = "002";
    StatusAprovacao["EmAndamento"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Reprovado;
// Any (Qualquer tipo) não tem um tipo definido, recomendavel não usar
var coisa = "qualquer coisa";
// Void - Retorna vazio
function logger(msg) {
    console.log(msg);
}
// Object - Qualquer tipo
// OBS: Não é um tipo, mas um tipo de dados
var dados;
dados = {
    nome: "Lucas",
    idade: 21,
    avaliacao: 3.5,
};
// Tipo Never - Sempre retorna nulo
function loopInfinete() {
    while (true) {
        console.log("Infinito");
    }
}
function error(errorMsg) {
    throw new Error("C\u00F3digo do erro " + errorMsg);
}
function falha() {
    return error("Erro de acesso");
}
