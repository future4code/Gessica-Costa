// Cadastro
let valor = document.getElementById("valor")
let descricao = document.getElementById("descricao")
let despesas = document.getElementById("despesas")
let listaDespesas = document.getElementById("listaDepesas")
let valorTotal = document.getElementById("valorTotal")
let extrato = document.getElementById("extrato")
let despesa = []

function limparCadastro() {
    despesas.value = "escolha"
    valor.value = descricao.value = ""
}

function novaDespesa() {
    const valorV = parseInt(valor.value)
    const despesasD = despesas.value
    const descricaoD = descricao.value

    if (valor.value === "" || descricaoD === "" || despesas.value === "escolha") {
        alert("Insira valores válidos")
    } else {

        objDespesa = {
            valor: valorV,
            despesas: despesasD,
            descricao: descricaoD
        }
        despesa.push(objDespesa)
        limparCadastro()
        imprimeDespesas(despesa)
        extratoTotal()
    }
}

function imprimeDespesas(array) {
    listaDespesas.innerHTML = ""
    extrato.innerHTML = ""
    for (let elemento of array) {
        listaDespesas.innerHTML += `<div><p> R$ ${elemento.valor} - Despesa de ${elemento.despesas} - Descrição: ${elemento.descricao}</div>`
        extrato.innerHTML += `<div><p> Valor: R$ ${elemento.valor} - Despesa de ${elemento.despesas}</div>`
    }
}

//Detalhes das depesas
function imprimeAposFiltro() {
    imprimeDespesas(despesa)
}

let despesasDetalhe = document.getElementById("despesasDetalhe")
let valorMinimo = document.getElementById("valorMinimo")
let valorMaximo = document.getElementById("valorMaximo")
let arrayfiltro = []

function limparDespesas() {
    despesasDetalhe.value = "escolha"
    valorMinimo.value = valorMaximo.value = ""
}

function entradaFiltros() {
    const despesasV = despesasDetalhe.value
    const valorMinimoV = parseInt(valorMinimo.value)
    const valorMaximoV = parseInt(valorMaximo.value)

    if (valorMaximo.value === "" && valorMinimo.value === "" && despesasDetalhe.value === "escolha") {
        alert("Insira pelo menos um valor")
    } else {
        const filtro = despesa.filter((despesa, index, array) => {
            if ((despesa.valor >= valorMinimoV && despesa.valor <= valorMaximoV && despesa.despesas === despesasV) ||
                (despesa.valor >= valorMinimoV && valorMaximo.value === "" && despesasV === "escolha") ||
                (valorMinimo.value === "" && despesa.valor <= valorMaximoV && despesasV === "escolha") ||
                (valorMinimo.value === "" && valorMaximo.value === "" && despesa.despesas === despesasV) ||
                (despesa.valor >= valorMinimoV && despesa.valor <= valorMaximoV && despesasV === "escolha") ||
                (despesa.valor >= valorMinimoV && valorMaximo.value === "" && despesa.despesas === despesasV) ||
                (valorMinimo.value === "" && despesa.valor <= valorMaximoV && despesa.despesas === despesasV)) {
                return true
            }
        })
        listaDespesas.innerHTML = ""

        for (let elemento of filtro) {
            listaDespesas.innerHTML += `<div><p> R$ ${elemento.valor} - Despesa de ${elemento.despesas} - Descrição: ${elemento.descricao}</div>`

        }
    }
    limparDespesas()
}

// Extrato

const extratoTotal = () => {
    let soma = 0
    for (let despesas of despesa) {
        soma += despesas.valor
    }
    valorTotal.innerHTML = `R$ ${soma},00`
}