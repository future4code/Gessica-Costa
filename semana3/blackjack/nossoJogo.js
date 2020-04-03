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

if (confirm === "s") {
    const cartaUsuario = comprarCarta()
    const cartaUsuario2 = comprarCarta()
    cartaUsuario.valor += cartaUsuario2.valor
    const cartaComputador = comprarCarta()
    const cartaComputador2 = comprarCarta()
    cartaComputador.valor += cartaComputador2.valor
    console.log("Usuário - cartas: " + (cartaUsuario.texto) + " e " + cartaUsuario2.texto + "  - pontuação " + (cartaUsuario.valor))
    console.log("Computador - cartas: " + (cartaComputador.texto) + " e " + cartaComputador2.texto + "  - pontuação " + (cartaComputador.valor))

    if (cartaUsuario.valor > cartaComputador.valor && cartaUsuario.valor <= 21) {
        console.log("O usuário ganhou!")
    } else if (cartaComputador.valor > cartaUsuario.valor && cartaComputador.valor <= 21) {
        console.log("O computador ganhou!")
    } else if (cartaUsuario.valor > cartaComputador.valor && cartaUsuario.valor > 21) {
        console.log("O computador ganhou!")
    } else if (cartaComputador.valor > cartaUsuario.valor && cartaComputador.valor > 21) {
        console.log("O usuário ganhou!")
    } else {
        console.log("Empate!")
    }
} else {
    console.log("O jogo acabou.")
}