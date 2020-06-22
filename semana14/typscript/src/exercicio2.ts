function operacoes(
    type: ShapeType,
    a: number, b: number
): number {
    if (a >= 0) {
        switch (type) {
            case ShapeType.SOMA:
                return a + b;
            case ShapeType.SUBTRACAO:
                return a - b;
            case ShapeType.MULTIPLICACAO:
                return a * b;
            case ShapeType.MAIOR:
                return a > b ? a : b
        }
    }
}

enum ShapeType {
    SOMA,
    SUBTRACAO,
    MULTIPLICACAO,
    MAIOR
}
console.log(operacoes(0, 2, 3))
console.log(operacoes(1, 2, 3))
console.log(operacoes(2, 2, 3))
console.log(operacoes(3, 2, 3))