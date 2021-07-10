"use strict";
var Data = /** @class */ (function () {
    // public dia: number; // é publico por padrão
    // mes: number;
    // ano: number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 2, 2015);
console.log(data.dia);
var dataSemAno = new Data(1, 2);
