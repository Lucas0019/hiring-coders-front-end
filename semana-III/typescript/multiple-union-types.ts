// Tipos Complexos
// o Union ( | ) possibilita aceitar outra propriedade 

function exibirNota(nota: string | number) {
    console.log(nota);
}

exibirNota(10) // 10
exibirNota("10") // 10


function logDetails(uid: number | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

logDetails(123, 'sapato') 
logDetails('123', 'sapato') 

type Uid = number | string | undefined | null 

function logInfo(uid: Uid, user: Uid) {
  console.log(`An user with ${uid} has a name as${user}.`);
}

logInfo(123, 'Lucas')
logInfo('123', 'Lucas')