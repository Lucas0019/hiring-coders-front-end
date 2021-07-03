 class Book {
     constructor(title, author, pages) {
         this.title = title;
         this.author = author;
         this.pages = pages;
     }

     read() {
       return `Estou lendo ${this.title} do ${this.author} que tem ${this.pages}`
     }
 }



//  let book = new Book('14 Hábitos de programadores altamente produtivos', 'Zeno Rocha', 400)

//  console.log(book); // Retornar os dados das classes
//  console.log(book.read()); // Retorna os dados das classes com o metodo read()


//  Herança
class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages) // Nesse momento que estou herdando as classes
        this.technology = technology;
    }
}

// let itBook = new ITBook('14 Hábitos de programadores altamente produtivos', 'Zeno Rocha', 400, 'Js')
//  console.log(itBook.read()); // Retorna os dados das classes com o metodo read()


 // Encapsulamento -  Get e Set
 class Person {
     constructor(name) {
         this._name = name // Simboliza propriedade privada
     }

     // Definir um get para a pessoa pegar nossa propriedade encpsulada
     get name() {
       return this._name
     }

     // Permite reatribuir novos valores na classe
     set name(value) {
       this._name = value
     }
 }

 let person = new Person('Lucas')

 person.name = 'Duda'

 console.log(person.name); // Undefined
