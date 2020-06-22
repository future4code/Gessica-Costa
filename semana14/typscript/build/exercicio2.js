function operacoes(type, a, b) {
    if (a >= 0) {
        switch (type) {
            case ShapeType.SOMA:
                return a + b;
            case ShapeType.SUBTRACAO:
                return a - b;
            case ShapeType.MULTIPLICACAO:
                return a * b;
            case ShapeType.MAIOR:
                return a > b ? a : b;
        }
    }
}
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["SOMA"] = 0] = "SOMA";
    ShapeType[ShapeType["SUBTRACAO"] = 1] = "SUBTRACAO";
    ShapeType[ShapeType["MULTIPLICACAO"] = 2] = "MULTIPLICACAO";
    ShapeType[ShapeType["MAIOR"] = 3] = "MAIOR";
})(ShapeType || (ShapeType = {}));
console.log(operacoes(0, 2, 3));
console.log(operacoes(1, 2, 3));
console.log(operacoes(2, 2, 3));
console.log(operacoes(3, 2, 3));
//# sourceMappingURL=exercicio2.js.map