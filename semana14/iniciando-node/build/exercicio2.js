"use strict";
function operacoes(operacao, a, b) {
    switch (operacao) {
        case operacaoType.ADD:
            return a + b;
        case operacaoType.SUB:
            return a - b;
        case operacaoType.MULT:
            return a * b;
        case operacaoType.DIV:
            return a / b;
        default:
            return "Operação não escolhida";
    }
}
var operacaoType;
(function (operacaoType) {
    operacaoType["ADD"] = "add";
    operacaoType["SUB"] = "sub";
    operacaoType["MULT"] = "mult";
    operacaoType["DIV"] = "div";
})(operacaoType || (operacaoType = {}));
console.log('Digite add para soma, sub para subtração, mult para multiplicação ou div para divisão.');
var value1 = Number(process.argv[2]);
var value2 = Number(process.argv[3]);
var value3 = Number(process.argv[4]);
//# sourceMappingURL=exercicio2.js.map