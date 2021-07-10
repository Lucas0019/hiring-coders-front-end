class Data {
  // public dia: number; // é publico por padrão
  // mes: number;
  // ano: number;

  constructor(
    public dia: number,
    public mes: number,
    public ano: number = 1970
  ) {
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
  }
}

const data = new Data(1, 2, 2015);
console.log(data.dia);

const dataSemAno = new Data(1, 2);
