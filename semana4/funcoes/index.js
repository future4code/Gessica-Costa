/*Exercícios de interpretação de código
EXERCÍCIO 1
a. []
b. [0, 1, 0, 1, 2, 3]
c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

EXERCÍCIO 2
a. Saída:
0
2
undefined

As saídas se referem a posição do index do array que está o nome da entrada.
Por exemplo, "Darvas" e "João", o primeiro está no index 0, e o segundo no 1.
Já Paula não está no array, logo a saída é undefined, porque essa entrada não foi definida dentro do array.

b. Sim, a função retorna a posição do index que aquele valor está no array.
Então funcionaria da mesma forma.

EXERCÍCIO 3
A função recebe um array, cria duas variáveis, uma é a soma dos valores do array,
e a outra é a multiplicação dos seus valores. Por fim, os valores dessas duas variáveis
são adicionados em um novo array, que é retornado pela função.
Um nome melhor seria somaEMultiplica.
________________________________________________________________________________________

Exercícios de escrita de código
EXERCÍCIO 4
a.
*/
function anosHumanos(idadeCachorro) {
    let idadeHumano = idadeCachorro * 7
    return idadeHumano
}

console.log("A idade de cachorro é", anosHumanos(4))
    //b.
function informacoesPessoa(nome, idade, endereco, estudante) {
    let estudanteSimOuNao
    if (estudante === true) {
        estudanteSimOuNao = "sou"
    } else if (estudante === false) {
        estudanteSimOuNao = "não sou"
    }
    let mensagem = "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + estudanteSimOuNao + " estudante."
    return mensagem
}
console.log(informacoesPessoa("Géssica", 26, "Rua Joaquim Araújo Filho, 1440", true))

//EXERCÍCIO 5
// 1.
function anoSeculo(ano) {
    let seculo = ""
    if (ano > 900 && ano <= 1000) {
        seculo = "X"
    } else if (ano > 1000 && ano <= 1100) {
        seculo = "XI"
    } else if (ano > 1100 && ano <= 1200) {
        seculo = "XII"
    } else if (ano > 1200 && ano <= 1300) {
        seculo = "XIII"
    } else if (ano > 1300 && ano <= 1400) {
        seculo = "XIV"
    } else if (ano > 1400 && ano <= 1500) {
        seculo = "XV"
    } else if (ano > 1500 && ano <= 1600) {
        seculo = "XVI"
    } else if (ano > 1600 && ano <= 1700) {
        seculo = "XVII"
    } else if (ano > 1700 && ano <= 1800) {
        seculo = "XVIII"
    } else if (ano > 1800 && ano <= 1900) {
        seculo = "XIX"
    } else if (ano > 1900 && ano <= 2000) {
        seculo = "XX"
    } else if (ano > 2000 && ano <= 2100) {
        seculo = "XXI"
    }
    return seculo
}

console.log(anoSeculo(1401))
    //seculos = ["X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
    // for (let i = 900; i < 2101; i += 100) {
    //     for (let j = 0; j < 12; j++) {
    //         if(i === )
    //         seculo = seculos[j]
    //     }
    // }

// 2.
function anoSeculo2(ano) {
    let seculo = ""
    if (ano > 900 && ano <= 1000) {
        seculo = "X"
    } else if (ano > 1000 && ano <= 1100) {
        seculo = "XI"
    } else if (ano > 1100 && ano <= 1200) {
        seculo = "XII"
    } else if (ano > 1200 && ano <= 1300) {
        seculo = "XIII"
    } else if (ano > 1300 && ano <= 1400) {
        seculo = "XIV"
    } else if (ano > 1400 && ano <= 1500) {
        seculo = "XV"
    } else if (ano > 1500 && ano <= 1600) {
        seculo = "XVI"
    } else if (ano > 1600 && ano <= 1700) {
        seculo = "XVII"
    } else if (ano > 1700 && ano <= 1800) {
        seculo = "XVIII"
    } else if (ano > 1800 && ano <= 1900) {
        seculo = "XIX"
    } else if (ano > 1900 && ano <= 2000) {
        seculo = "XX"
    } else if (ano > 2000 && ano <= 2100) {
        seculo = "XXI"
    }
    return "O ano " + ano + " pertence ao século " + seculo
}
console.log(anoSeculo2(1534))

// EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    // a.
let quantidade = (array) => array.length
console.log(quantidade(array))

// b.
function par(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}
valor = 15
if (par(valor) === true) {
    console.log(valor + " é par")
} else {
    console.log(valor + " é ímpar")
}

// c.
function quantidadePar(numero) {
    let quant = 0
    for (let elemento of numero) {
        if (elemento % 2 === 0) {
            quant++
        }
    }
    return quant
}
valor = console.log("c. O array tem " + quantidadePar(array) + " números pares.")

// d.
function quantidadePar2(numero) {
    let quant = 0
    for (let elemento of numero) {
        if (par(elemento) === true) {
            quant++
        }
    }
    return quant
}
valor = console.log("d. O array tem " + quantidadePar2(array) + " números pares.")