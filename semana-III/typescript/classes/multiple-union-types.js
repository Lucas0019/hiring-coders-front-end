"use strict";
// Tipos Complexos
// o Union ( | ) possibilita aceitar outra propriedade 
function exibirNota(nota) {
    console.log(nota);
}
exibirNota(10); // 10
exibirNota("10"); // 10
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
logDetails(123, 'sapato');
logDetails('123', 'sapato');
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as" + user + ".");
}
logInfo(123, 'Lucas');
logInfo('123', 'Lucas');
