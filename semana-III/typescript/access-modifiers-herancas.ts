// Modificadores de Acessores: public, private, protected, static

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string, 
    public modelo: string,
    private placa: string,
    private velocidadeMaxima: number = 220, // propriedade privada
  ) {}

  private alterarVelocidade(delta: number) {
    // Validação de acelerar e frear
    const newVelocidade = this.velocidadeAtual + delta;

    if (newVelocidade >= 0 && newVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = this.velocidadeMaxima;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
  }
}

  // Metodo - que é um método de classe - pode receber parâmetros e retorna um valor
  acelerar() {
    this.alterarVelocidade(15)
  }

  frear() {
    this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('Fiat', 'Uno', 'ABC123', 250);
// carro1.velocidadeMaxima = 400; // nÃ£o pode alterar a propriedade privada
carro1.acelerar(); // +5 = 255


// Herança de classe
class Fusca extends Carro {
  private turbo = false;

  constructor() {
    // Chama o construtor da super classe
    super('Brabo', 'Fusca', 'ABC123', 500);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const fusca = new Fusca();
fusca.acelerar(); 
fusca.frear(); 
fusca.ligarTurbo();

