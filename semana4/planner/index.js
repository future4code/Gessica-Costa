function adicionarTarefa() {
    const tarefa = document.getElementById("addTarefa")
    const semana = document.getElementById("diasSemana")
    const novaTarefa = tarefa.value
    const diaSemana = semana.value
    tarefa.value = ""

    if (novaTarefa === " " || novaTarefa == "") {
        alert("Insira um item")
    } else if (diaSemana === "segunda") {
        const listaTarefas = document.getElementById("lista-segunda")
        listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    } else if (diaSemana === "terca") {
        const listaTarefas = document.getElementById("lista-terca")
        listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    } else if (diaSemana === "quarta") {
        const listaTarefas = document.getElementById("lista-quarta")
        listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    } else if (diaSemana === "quinta") {
        const listaTarefas = document.getElementById("lista-quinta")
        listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    } else if (diaSemana === "sexta") {
        const listaTarefas = document.getElementById("lista-sexta")
        listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    } else if (diaSemana === "sabado") {
        const listaTarefas = document.getElementById("lista-sabado")
        listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    } else if (diaSemana === "domingo") {
        const listaTarefas = document.getElementById("lista-domingo")
        listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    }
}



// switch (diaSemana) {
//     case "segunda":
//         const listaTarefas = document.getElementById("lista-segunda")
//         listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
//         break;
//     case "terca":
//         const listaTarefas = document.getElementById("lista-terca")
//         listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
//         break;
// }

// function adicionarTarefa() {
//     const input = document.querySelector("input")
//     const novoItem = input.value

//     if (novoItem === "") {
//         alert("Insira um item!!!")
//     } else {
//         const listaDeCompras = document.querySelector("ul")

//         listaDeCompras.innerHTML += "<li>" + novoItem + "</li>"

//         input.value = ""
//     }
// }