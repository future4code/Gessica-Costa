function quantidades(
    type: ShapeType2,
    array: number[]
): number[] | number {
    if (array.length >= 0) {
        switch (type) {
            case ShapeType2.QuantidadeDeNumeros:
                return array.length;
            case ShapeType2.QuantidadeDeImpares:
                return array.filter(elemento => {
                    return (elemento % 2 !== 0)
                }).length
            case ShapeType2.SomaElementos:
                let aux: number = 0
                array.map(elemento => {
                    aux += elemento
                })
                return aux;
        }
    }
}
enum ShapeType2 {
    QuantidadeDeNumeros,
    QuantidadeDeImpares,
    SomaElementos
}
console.log(quantidades(0, [2, 3, 4, 5, 1]))
console.log(quantidades(1, [2, 3, 4, 5, 1]))
console.log(quantidades(2, [2, 3, 4, 5, 1]))