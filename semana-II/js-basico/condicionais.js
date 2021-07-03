// if() else...
const num = 5

if (num === 1 ) {
  console.log("num é igual a 1");
} else if(num === 2) {
  console.log("num não é igual a 1");
} else {
  console.log("num é igual a 5");
}

// switch case

const mes = "janeiro"

switch (mes) {
  case "fevereiro":
    console.log("mes 2");
    break

  case "março":
    console.log("mes 3");
    break

  case "janeiro": 
    console.log("mes 1");
    break

  default:
    console.log("nenhum dos casos acima atendido");
}
