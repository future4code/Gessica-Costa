let valor = document.getElementById("valor")
let descricao = document.getElementById("descricao")
let despesas = document.getElementById("despesas")
let despesa = []

function limpar() {
    despesas.value = "escolha"
    valor.value = descricao.value = ""
}

function novaDespesa() {
    const valorV = valor.value
    const despesasD = despesas.value
    const descricaoD = descricao.value

    if (valorV === "" || descricaoD === "" || despesas.value === "escolha") {
        alert("Insira valores válidos")
    } else {

        objDespesa = {
            valor: valorV,
            despesas: despesasD,
            descricao: descricaoD
        }
        despesa.push(objDespesa)
        limpar()
    }
}
console.log(despesa)