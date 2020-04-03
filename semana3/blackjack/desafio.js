/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
const confirm = prompt("Quer iniciar uma nova rodada? [s/n]")
let arrayUsuarioV = []
let arrayComputadorV = []
let arrayUsuarioT = []
let arrayComputadorT = []
let somaUsuario = 0
let somaComputador = 0
if (confirm === "s") {
    for (i = 0; i < 2; i++) {
        const cartaUsuario = comprarCarta()
        const cartaComputador = comprarCarta()
        arrayUsuarioT.push(cartaUsuario.texto)
        arrayComputadorT.push(cartaComputador.texto)
        arrayUsuarioV.push(cartaUsuario.valor)
        arrayComputadorV.push(cartaComputador.valor)
        somaUsuario += arrayUsuarioV[i]
        somaComputador += arrayComputadorV[i]
        while (somaUsuario === 22 || somaComputador === 22) {
            const cartaUsuario = comprarCarta()
            const cartaComputador = comprarCarta()
        }
    }
    if (somaUsuario === 21) {
        console.log("O usuário venceu!")
    } else if (somaComputador === 21) {
        console.log("O computador venceu!")
    } else if (somaUsuario === 21 && somaComputador === 21) {
        console.log("Empate!")
    } else {
        let novaCarta = prompt("Suas cartas são: " + (arrayUsuarioT[0]) + " e " + arrayUsuarioT[1] + ". A carta revelada do computador é " + arrayComputadorT[0] + "." +
            "\n" +
            "Deseja comprar mais uma carta? [s/n]")
        if (novaCarta === "s") {

        }
    }
} else {
    console.log("Acabou o jogo!")
}