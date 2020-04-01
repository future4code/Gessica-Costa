// Exercícios de interpretação de código

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM d.
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* Exercício 1
O código recebe um valor, em String, informado pelo usuário, 
transforma ele em Number, e verifica se o numero é par.
Se for par, aparece a mensagem informando que passou no teste,
se não, a mensagem é "Não passou no teste.".
O teste de verificação do número par é feito pelo operador %,
seu resultado é o resto da divisão dos dois números.
No caso, se o número dividido por 2 for igual a zero, ele é par.
______________________________________________________________________

 Exercício 2
a. O código serve para informar o preço da fruta escolhida.
b. "O preço da fruta Maçã é R$ 2.25".
c. R$ 24.55
d. O preço da fruta Pêra é R$ 5

// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if (numero1 > 0 && numero2 > 0) {
//     let mensagem
//     if (numero1 > numero2) {
//         mensagem = "Número 1 é maior que o 2!"
//     } else {
//         mensagem = "Número 1 é menor ou igual ao 2!"
//     }
// }

// console.log(mensagem)
______________________________________________________________________

 Exercício 3
A mensagem do terminal será que 'mensagem' não foi declarada/definida.
"Uncaught ReferenceError: mensagem is not defined at index.js:51".
Haverá um erro, pois a variável do tipo let foi declarada dentro do
bloco do primeiro if, e ela só pode ser utilizada dentro do seu escopo.
O "console.log(mensagem)" está fora do bloco/escopo do if.
______________________________________________________________________
*/

/* Exercícios de escrita de código */

// EXERCÍCIO 4
//4. a.
// const numero1A = Number(prompt("Digite o primeiro número"))
// const numero2A = Number(prompt("Digite o segundo número"))

// if (numero1A > numero2A) {
//     console.log("Números em ordem decrescente: ", numero1A, ">", numero2A)
// } else if (numero1A < numero2A) {
//     console.log("Números em ordem decrescente: ", numero2A, ">", numero1A)
// } else {
//     console.log("Os números são iguais.")
// }
// Se os números forem iguais é impressa a mensagem "Os números são iguais".
// Porém, se eu retirar o último else, nada é impresso.
//_____________________________________________________________________________________
//4. b.
// const numero1B = Number(prompt("Digite o primeiro número"))
// const numero2B = Number(prompt("Digite o segundo número"))
// const numero3B = Number(prompt("Digite o terceiro número"))

// if ((numero1B > numero2B) && (numero1B > numero3B)) {
//     if (numero2B > numero3B) {
//         console.log("Números em ordem decrescente: ", numero1B, ">", numero2B, ">", numero3B)
//     } else if (numero3B > numero2B) {
//         console.log("Números em ordem decrescente: ", numero1B, ">", numero3B, ">", numero2B)
//     } else {
//         console.log("O segundo e terceiro número são iguais.")
//     }
// } else if (numero2B > numero3B && numero2B > numero1B) {
//     if (numero1B > numero3B) {
//         console.log("Números em ordem decrescente: ", numero2B, ">", numero1B, ">", numero3B)
//     } else if (numero3B > numero1B) {
//         console.log("Números em ordem decrescente: ", numero2B, ">", numero3B, ">", numero1B)
//     } else {
//         console.log("O primeiro e terceiro número são iguais.")
//     }
// } else if (numero3B > numero1B && numero3B > numero2B) {
//     if (numero1B > numero2B) {
//         console.log("Números em ordem decrescente: ", numero3B, ">", numero1B, ">", numero2B)
//     } else if (numero2B > numero1B) {
//         console.log("Números em ordem decrescente: ", numero3B, ">", numero2B, ">", numero1B)
//     } else {
//         console.log("O primeiro e segundo número são iguais.")
//     }
// } else {
//     console.log("Pelo menos dois números são iguais.")
// }
// Se os números forem iguais é impressa uma mensagem informando que eles são iguais.
// Se os números iguais forem menores que o outro, será impresso quais são iguais, primeiro, segundo ou terceiro.
//_____________________________________________________________________________________
//4. c.
// const numero1C = Number(prompt("Digite o primeiro número"))
// const numero2C = Number(prompt("Digite o segundo número"))
// const numero3C = Number(prompt("Digite o terceiro número"))

// if ((numero1C > numero2C) && (numero1C > numero3C)) {
//     if (numero2C > numero3C) {
//         console.log("Números em ordem decrescente: ", numero1C, ">", numero2C, ">", numero3C)
//     } else if (numero3C > numero2C) {
//         console.log("Números em ordem decrescente: ", numero1C, ">", numero3C, ">", numero2C)
//     } else {
//         console.log("O segundo e terceiro número são iguais.")
//     }
// } else if (numero2C > numero3C && numero2C > numero1C) {
//     if (numero1C > numero3C) {
//         console.log("Números em ordem decrescente: ", numero2C, ">", numero1C, ">", numero3C)
//     } else if (numero3C > numero1C) {
//         console.log("Números em ordem decrescente: ", numero2C, ">", numero3C, ">", numero1C)
//     } else {
//         console.log("O primeiro e terceiro número são iguais.")
//     }
// } else if (numero3C > numero1C && numero3C > numero2C) {
//     if (numero1C > numero2C) {
//         console.log("Números em ordem decrescente: ", numero3C, ">", numero1C, ">", numero2C)
//     } else if (numero2C > numero1C) {
//         console.log("Números em ordem decrescente: ", numero3C, ">", numero2C, ">", numero1C)
//     } else {
//         console.log("O primeiro e segundo número são iguais.")
//     }
// } else if (numero1C == numero2C && numero2C == numero3C) {
//     console.log("Deve ser inserido ao menos um número diferente. Recarregue a página para tentar novamente.")
// }
//_____________________________________________________________________________________
/* 5. a.
Link:
https://onedrive.live.com/?authkey=%21AHlqNw6GykpFQDk&cid=52AFBD2A3EAE26B7&id=52AFBD2A3EAE26B7%213941&parId=52AFBD2A3EAE26B7%213938&o=OneUp
*/
//5. b.

// const ossos = prompt("Possui ossos formando seu esqueleto? [s/n]")
// if (ossos === "n") {
//     console.log("É um invertebrado.")
// } else {
//     const pelos = prompt("Possui pelos? [s/n]")
//     if (pelos === "s") {
//         const racional = prompt("É racional? [s/n]")
//         if (racional === "s") {
//             console.log("É um ser humano.")
//         } else {
//             console.log("É um mamífero não humano.")
//         }
//     } else {
//         const penas = prompt("Possui penas? [s/n]")
//         if (penas === "s") {
//             console.log("É uma ave.")
//         } else {
//             const terrestre = prompt("É um animal terrestre? [s/n]")
//             if (terrestre === "n") {
//                 console.log("É um peixe.")
//             } else {
//                 const ambienteAquatico = prompt("Passa parte da vida em ambiente aquático? [s/n]")
//                 if (ambienteAquatico === "s") {
//                     console.log("É um anfíbio.")
//                 } else {
//                     console.log("É um réptil.")
//                 }
//             }
//         }
//     }
// }

// DESAFIO
const nome = prompt("Informe seu nome completo")
let tipoJogo = prompt("Informe o tipo de jogo [IN/DO]")
let etapa = prompt("Informe a etapa do jogo [SF/DT/FI]")
const categoria = prompt("Informe a categoria do jogo [1/2/3/4]")
const quantidade = Number(prompt("Informe a quantidade de ingressos"))
let preco
let valorTotal

if (etapa === "SF") {
    switch (categoria) {
        case "1":
            preco = 1320
            break
        case "2":
            preco = 880
            break
        case "3":
            preco = 550
            break
        case "4":
            preco = 220
            break
        default:
            console.log("Essa categoria não existe.")
            break
    }
} else if (etapa === "DT") {
    switch (categoria) {
        case "1":
            preco = 660
            break
        case "2":
            preco = 440
            break
        case "3":
            preco = 330
            break
        case "4":
            preco = 170
            break
        default:
            console.log("Essa categoria não existe.")
            break
    }
} else if (etapa === "FI") {
    switch (categoria) {
        case "1":
            preco = 1980
            break
        case "2":
            preco = 1320
            break
        case "3":
            preco = 880
            break
        case "4":
            preco = 330
            break
        default:
            console.log("Essa categoria não existe.")
            break
    }
} else {
    console.log("Etapa não existente, tente novamente.")
}

valorTotal = preco * quantidade
precoIN = preco * 4.1
valorTotalIN = precoIN * quantidade

if (etapa === "SF") {
    etapa = "Semifinais"
} else if (etapa === "DT") {
    etapa = "Decisão do 3º lugar"
} else if (etapa === "FI") {
    etapa = "Final"
}

if (tipoJogo === "DO") {
    console.log(["---Dados da compra---\nNome do cliente: ", nome,
        "\nTipo do jogo: Nacional",
        "\nEtapa do Jogo: ", etapa,
        "\nCategoria: ", categoria,
        "\nQuantidade de Ingressos: ", quantidade, " ingressos",
        "\n---Valores---",
        "\nValor do ingresso: R$ ", preco,
        "\nValor total: R$ ", valorTotal
    ].join(""))
} else if (tipoJogo === "IN") {
    console.log(["---Dados da compra---\nNome do cliente: ", nome,
        "\nTipo do jogo: Internacional",
        "\nEtapa do Jogo: ", etapa,
        "\nCategoria: ", categoria,
        "\nQuantidade de Ingressos: ", quantidade, " ingressos",
        "\n---Valores---",
        "\nValor do ingresso: R$ ", precoIN,
        "\nValor total: R$ ", valorTotalIN
    ].join(""))
} else {
    console.log("Esse tipo de jogo não existe.")
}