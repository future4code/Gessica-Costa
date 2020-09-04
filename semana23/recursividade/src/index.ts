// Exercício 1:
// a)
const recursiva1 = (num: number, i: number = 0): number => {

    if (i > num) {
        return num;
    }

    console.log(i)
    return recursiva1(num, i + 1)
}

// b)
const recursiva2 = (num: number, i: number = 0): void => {

    if (i > num) {
        return;
    }

    recursiva2(num, i + 1)
    return console.log(i)
}

// Exercício 2
const sum = (n: number): number => {

    if (n <= 0) {
        return 0
    }

    return n + sum(n - 1)
}

// Exercício 3

const printElements = (array: string[] | number[], i: number = 0): void => {

    if (i === array.length) {
        return;
    }
    console.log(array[i])
    return printElements(array, i + 1)

}