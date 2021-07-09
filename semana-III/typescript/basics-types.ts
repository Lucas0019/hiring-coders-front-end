// Definimos tipos com letras minusculas

// boolean
const contaPaga: boolean = true;
const contaDescontada: boolean = false;

let isOpen: boolean
isOpen = true || false

// number
const idade: number = 21;
const avaliacao: number = 3.5;

// string
const nome: string = "Lucas";


// array - Tem que tipar que é array e qual o tipo do array

// Array (type[])
const nomes: string[] = ["Lucas", "Gabriela", "Eduarda"];
const idades: number[] = [21, 21, 21];

// Array (Array<type>)
let itemsStrings: Array<string> 
itemsStrings = ["Lucas", "Gabriela", "Eduarda"]

let itemsNumbers: Array<number>
itemsNumbers = [1, 2, 3]

// Tuple - Já sabemos que é array e de que tipo é
const isTupla: [string, number] = ["Lucas", 21]

// enum - mapeamos de valores para nomes
enum colors {
    white = "#fff",
    black = "#000",
}

enum StatusAprovacao {
  Aprovado = "001",
  Reprovado = "002",
  EmAndamento = "003",
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Reprovado;

// Any (Qualquer tipo) não tem um tipo definido, recomendavel não usar
let coisa: any = "qualquer coisa"

// Void - Retorna vazio
function logger(msg: string) {
    console.log(msg)
}

// Null e Undefined - Não tem nada
type log = string | null

// Object - Qualquer tipo
// OBS: Não é um tipo, mas um tipo de dados

let dados: Object

dados = {
    nome: "Lucas",
    idade: 21,
    avaliacao: 3.5,
}



// Tipo Never - Sempre retorna nulo
function loopInfinete() :never {
  while (true) {
    console.log("Infinito")
  }
}

function error(errorMsg: string) :never {
  throw new Error(`Código do erro ${errorMsg}`)
}


function falha(){
  return error("Erro de acesso")
}
