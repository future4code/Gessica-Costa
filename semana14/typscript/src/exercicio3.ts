function quantidades(
    type: ShapeType,
    array: number[]
): number[] {
    if (array.length >= 0) {
        switch (type) {
            case ShapeType.QUANTnUMEROS:
                return array;
            case ShapeType.QUANTnUMEROSiMPARES:
                return array;
            case ShapeType.SOMAeLEMENTOS:
                return array;
        }
    }
}
enum ShapeType {
    QUANTnUMEROS,
    QUANTnUMEROSiMPARES,
    SOMAeLEMENTOS
}
console.log(operacoes(0, 2, 3))
console.log(operacoes(1, 2, 3))
console.log(operacoes(2, 2, 3))