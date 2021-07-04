// Reverse a string
// Dev => ved

let newString = "";

function reverseString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
    // console.log(newString); // Irá mostrar a iteração em cada passo
  }
  console.log(newString);
}

let result = reverseString("Dracula"); // alucarD