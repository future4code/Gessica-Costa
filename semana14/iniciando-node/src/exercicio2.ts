function operacoes(
    operacao: string,
    a: number,
    b: number
): number | string {
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
            return "Operação não escolhida"
    }
}

const value1: string = (process.argv[2])
const value2: number = Number(process.argv[3])
const value3: number = Number(process.argv[4])
console.log(operacoes(value1, value2, value3))