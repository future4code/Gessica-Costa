//  Exercícios de interpretação de código
// 1.
const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
    // a. false
resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
    // b. false
resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
    // c. true
resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
    // d. false
console.log("e. ", typeof resultado)
    // e. boolean

// 2.
let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i + 1])

array[i + 1] = 19
const valor = array[i + 6]
console.log('V. ', array[i + 1], " e ", valor)

i += 1
array[i] = array[i - 1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i - 3]
const resultadoC = array[i] % array[1]
console.log('VII. ', resultadoC)
    /* a. É uma variável que guarda várias informações.
          Declaração array: let array = [1, 2, 3, 4, 5]
       b. 0.
       c. array.length
       d.
          I. undefined
          II. null
          III. 11
          IV. 3 e 4
          V. 19 e 9
          VI. 3
          VII. 1
    */

//Exercícios de escrita de código
console.log("\nExercícios de escrita de código\nExercício 1")
    //1. a.
const fahrenheitA = 77
let kelvinA = (fahrenheitA - 32) * 5 / 9 + 273.15
console.log("1. a. 77°F é igual a " + kelvinA + " K.")
    // b.
const celciusB = 80
let fahrenheitB = celciusB * 9 / 5 + 32
console.log("1. b. 80°C é igual a " + fahrenheitB + " °F.")
    // c.
const celciusC = 30
let fahrenheitC = celciusC * 9 / 5 + 32
let kelvinC = (fahrenheitC - 32) * 5 / 9 + 273.15
console.log("1. c. 30°C é igual a " + fahrenheitC + " °F e " + kelvinC + " K.")
    // d.
const celciusD = prompt("Digite um valor em Celcius")
let fahrenheitD = celciusD * 9 / 5 + 32
let kelvinD = (fahrenheitD - 32) * 5 / 9 + 273.15
console.log("1. d. " + celciusD + "°C é igual a " + fahrenheitD + " °F e " + kelvinD + " K.")

//2.
console.log("\nExercícios de escrita de código\nExercício 2")
const nome = prompt("Qual o seu nome?")
console.log("\n1. Qual o seu nome? \nResposta: " + nome)
const idade = prompt("Qual a sua idade?")
console.log("\n2. Qual a sua idade? \nResposta: " + idade)
const endereco = prompt("Qual o seu endereço?")
console.log("\n3. Qual o seu endereço? \nResposta: " + endereco)
const cor = prompt("Qual a sua cor favorita?")
console.log("\n4. Qual a sua cor favorita? \nResposta: " + cor)
const desenho = prompt("Qual o seu desenho favorito?")
console.log("\n5. Qual o seu desenho favorito? \nResposta: " + desenho)

//3.
console.log("\nExercícios de escrita de código\nExercício 3")
    // a.
const consumoResidencia = 280
let totalAPagar = 0.05 * consumoResidencia
console.log("3. a. Valor a ser pago por residência que consome 280 KWh: R$" + totalAPagar)
    // b.
let desconto = totalAPagar * 0.15
totalAPagar -= desconto
console.log("3. b. Total a pagar com desconto: R$" + totalAPagar)

//DESAFIO
console.log("\nDESAFIO")
    // 1. a.
const libraA = 20
let quiloA = libraA / 2.20462
console.log("1. a.\n" + libraA + " lb equivalem a " + quiloA + " kg")
    // 1. b.
const oncaB = 10.5
let quiloB = oncaB * 0.0283495
console.log("1. b.\n" + oncaB + " oz equivalem a " + quiloB + " kg")
    // 1. c.
const milhaC = 100
let metroC = milhaC * 1609.34
console.log("1. c.\n" + milhaC + " mi equivalem a " + metroC + " m")
    // 1. d.
const pesD = 50
let metroD = pesD / 3.281
console.log("1. d.\n" + pesD + " ft equivalem a " + metroD + " m")
    // 1. e.
const galaoE = 103.56
let litroE = galaoE * 3.78541
console.log("1. e.\n" + galaoE + " gal equivalem a " + litroE + " l")
    // 1. f.
const xicaraF = 450
let litroF = xicaraF * 0.284131
console.log("1. f.\n" + xicaraF + " xic equivalem a " + litroF + " l")
    // 1. g.
const xicaraG = prompt("Digite o valor em xícaras")
let litroG = xicaraG * 0.284131
console.log("1. g.\n" + xicaraG + " xic equivalem a " + litroG + " l")

const milhaG = prompt("DIgite o valor em milhas")
let metroG = milhaG * 1609.34
console.log("1. g.\n" + milhaG + " mi equivalem a " + metroG + " m")