// Divisivel por 3 = 'Fiz'
// Divisivel por 5 = 'Buz'
// Divisivel por 3 e 5 = 'FizzBuzz'
// Se não for numero = 'Não é um numero'
// Se não for divisivel nem por 3 e nem por 5 = Retorna entrada

let result = fizzBuzz(5);

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') return 'Não é um numero 😆'
  if ((entrada % 3 === 0) && (entrada % 5 === 0)) return 'FizzBuzz 🔥'
  if (entrada  % 3 === 0) return 'Fizz 🙂'
  if (entrada  % 5 === 0) return 'Buzz 😀'
  
  return entrada + '😴'
}

console.log(result);