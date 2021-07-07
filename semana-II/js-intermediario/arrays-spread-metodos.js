const devs = ['Lucas', 'Luiz', 'Windsor', 'Camie', 'Marcelo']

//Acessar informações de um array
console.log(`Nome do primeiro dev: ${devs[0]}`) // Lucas

//acessar terceiro elemento do array
console.log(`Nome do terceiro dev: ${devs[2]}`) // Windsor

// Operador spread (..)
// O operador spread (..) é usado para expandir um array para uma lista de argumentos.
const newDev = [...devs, 'Duda']
console.log(newDev);


// Metodos de iteração

// Ordernação - sort()
const orderDev = newDev.sort()
console.log(orderDev);

// Antigo
for (let i = 0; i < devs.length; i++) {
  console.log(devs[i])
}

// Map
// O Map para cada elemento do array, retorna um novo array com o valor alterado
devs.map(dev => console.log(dev))

// Metodos de um array
// Metodos de um array são os métodos que você pode chamar sobre um array.
// Para ver os métodos de um array, você pode usar a palavra reservada Array.

// Filter
// O Filter retorna um novo array com apenas os elementos que satisfazem a condição passada.
const numbers = [34, 45, 67, 90, 55, 76]
const evenNumbers = numbers.filter(num => num % 2 !== 0) // Numeros impares
console.log(evenNumbers); 


// Reduce
// O Reduce para cada elemento do array, retorna um novo array com o valor alterado
const total = numbers.reduce((prev, curr) => prev + curr)
console.log(total);
