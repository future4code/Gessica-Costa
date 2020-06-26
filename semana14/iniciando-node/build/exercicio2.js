"use strict";
function operacoes(operacao, a, b) {
    switch (operacao) {
        case "sum":
            return a + b;
        case "sub":
            return a - b;
        case "mult":
            return a * b;
        case "div":
            return a / b;
        default:
            return "Operação não escolhida";
    }
}
var value1 = (process.argv[2]);
var value2 = Number(process.argv[3]);
var value3 = Number(process.argv[4]);
console.log(operacoes(value1, value2, value3));
//# sourceMappingURL=exercicio2.js.map