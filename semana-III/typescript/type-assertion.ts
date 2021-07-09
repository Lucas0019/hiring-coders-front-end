// Type Assertions for JavaScript
// Defini o tipo do elemento selecionado

const minhaIdade: any = 21;
(minhaIdade as number)

// const inputElement = document.getElementById('input') as HTMLInputElement;
const inputElement = <HTMLInputElement>document.getElementById('input');
console.log(inputElement.value);


const bestDog: any = "Doge";
const dogLength: number = (bestDog as string).length;