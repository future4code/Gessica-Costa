function quantidades(type, array) {
    if (array.length >= 0) {
        switch (type) {
            case ShapeType2.QuantidadeDeNumeros:
                return array.length;
            case ShapeType2.QuantidadeDeImpares:
                return array.filter(elemento => {
                    return (elemento % 2 !== 0);
                }).length;
            case ShapeType2.SomaElementos:
                let aux = 0;
                array.map(elemento => {
                    aux += elemento;
                });
                return aux;
        }
    }
}
var ShapeType2;
(function (ShapeType2) {
    ShapeType2[ShapeType2["QuantidadeDeNumeros"] = 0] = "QuantidadeDeNumeros";
    ShapeType2[ShapeType2["QuantidadeDeImpares"] = 1] = "QuantidadeDeImpares";
    ShapeType2[ShapeType2["SomaElementos"] = 2] = "SomaElementos";
})(ShapeType2 || (ShapeType2 = {}));
console.log(quantidades(0, [2, 3, 4, 5, 1]));
console.log(quantidades(1, [2, 3, 4, 5, 1]));
console.log(quantidades(2, [2, 3, 4, 5, 1]));
//# sourceMappingURL=exercicio3.js.map