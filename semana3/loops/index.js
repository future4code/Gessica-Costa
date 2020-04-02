/*
Exercícios de interpretação de código

EXERCÍCIO 1
O código está somando todos os números de 0 a 14.
O resultado impresso será a soma desses números, ou seja, 105.

EXERCÍCIO 2
a. O comando .push adiciona em elemento ao array, após os elementos já existentes.
b. [10, 15, 25, 30]
c. Se numero = 3, o valor impresso seria: [12, 15, 18, 21, 27, 30]
Se numero = 4, o valor impresso seria: [12]

DESAFIO 1
0
00
000
0000

____________________________________________________________________________

Exercícios de escrita de código
EXERCÍCIO 3
*/
// a.
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 110, 55]

let menor = numeros[0]
let maior = 0
for (let num of numeros) {
    if (num > maior) {
        maior = num
    }
}
for (let num of numeros) {
    if (num < menor) {
        menor = num
    }
}
console.log("O maior número é ", maior, "\nO menor número é ", menor)

//b.
let novoArrayB = []
for (i = 0; i < numeros.length; i++) {
    novoArrayB.push(numeros[i] / 10)
}
console.log(novoArrayB)

//c.
let novoArrayC = []
for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        novoArrayC.push(numeros[i])
    }
}
console.log(novoArrayC)

//d.
let novoArrayD = []
for (i = 0; i < numeros.length; i++) {
    novoArrayD.push("O elemento do índex " + i + " é " + numeros[i])
}
console.log(novoArrayD)

// DESAFIO 2
const numJogador = Number(prompt("Escolha um número"))
let contador = 0
console.log("Vamos jogar!")

for (i = 0; i < 1000; i++) {
    let chute = Number(prompt("Acerte o número"))
    if (chute > numJogador) {
        console.log("O número chutado foi: ", chute)
        console.log("Errou. O número escolhido é menor")
    } else if (chute < numJogador) {
        console.log("O número chutado foi: ", chute)
        console.log("Errou. O número escolhido é maior")
    } else {
        console.log("Acertou, o número é: ", numJogador)
        break
    }
    contador++
}
console.log("O número de tentativas foi: " + (contador + 1))

// DESAFIO 3

// const numJogador = Math.floor(Math.random() * 100) + 1
// let contador = 0
// console.log("Vamos jogar!")

// for (i = 0; i < 1000; i++) {
//     let chute = Number(prompt("Acerte o número"))
//     if (chute > numJogador) {
//         console.log("O número chutado foi: ", chute)
//         console.log("Errou. O número escolhido é menor")
//     } else if (chute < numJogador) {
//         console.log("O número chutado foi: ", chute)
//         console.log("Errou. O número escolhido é maior")
//     } else {
//         console.log("Acertou, o número é: ", numJogador)
//         break
//     }
//     contador++
// }
// console.log("O número de tentativas foi: " + (contador + 1))

/*
Fazer a alteração não foi difícil, mas eu poderia ter lido as referências antes de usá-las.
Primeiro coloquei só math.random(), não funcionou, depois coloquei igual a parte que falava
sobre números entre dois valores, também não funcionou.
Abri a referência do site da w3shools, coloquei como estava lá, sem o Math.floor, não funcionou.
Então coloquei com o Math.floor e funcionou.
Preciso ter mais paciência para ler os sites, porque geralmente prefiro testar logo.
Achei mais difícil o Exercício 3 a.
*/