let posts = []
let i = posts.length


function formulario() {

    let titulo = document.getElementById("titulo")
    let autor = document.getElementById("autor")
    let conteudo = document.getElementById("conteudo")
    let valorTitulo = titulo.value
    let valorAutor = autor.value
    let valorConteudo = conteudo.value
    let postagens = document.getElementById("postagens")

    posts.push({ titulo: valorTitulo, autor: valorAutor, conteudo: valorConteudo })
    console.log(i)

    postagens.innerHTML += "<article><p>" + posts[i].titulo + "</p><p>" + posts[i].autor +
        "</p><p>" + posts[i].conteudo + "</article>"

    titulo.value = autor.value = conteudo.value = ""
    i = posts.length
}